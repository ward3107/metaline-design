import React, { useState, useCallback, useEffect } from 'react';
import { Loader2, Send, AlertCircle, CheckCircle } from 'lucide-react';
import {
  validateContactForm,
  ContactFormData,
  FormErrors,
  checkRateLimit,
  clearRateLimit,
  sanitizeInput,
} from '../../utils/validation';

export interface ContactFormProps {
  /**
   * Callback when form is submitted with valid data
   * @param data - Sanitized form data
   * @returns Promise that resolves when submission is complete
   */
  onSubmit: (data: ContactFormData) => Promise<{ success: boolean; message?: string }>;

  /**
   * Optional custom labels for form fields
   */
  labels?: {
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
    submit?: string;
    phonePlaceholder?: string;
  };

  /**
   * Include phone field (default: false)
   */
  includePhone?: boolean;

  /**
   * Rate limit configuration (max 3 submissions per minute by default)
   */
  rateLimit?: {
    maxAttempts?: number;
    windowMs?: number;
  };

  /**
   * Identifier for rate limiting (defaults to 'contact-form')
   */
  rateLimitId?: string;
}

interface FormStatus {
  type: 'idle' | 'validating' | 'submitting' | 'success' | 'error';
  message?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  onSubmit,
  labels = {},
  includePhone = false,
  rateLimit = { maxAttempts: 3, windowMs: 60000 },
  rateLimitId = 'contact-form',
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    honeypot: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Set<keyof ContactFormData>>(new Set());
  const [status, setStatus] = useState<FormStatus>({ type: 'idle' });
  const [retryAfter, setRetryAfter] = useState<number | null>(null);

  // Default labels
  const defaultLabels = {
    name: labels.name || 'Name',
    email: labels.email || 'Email',
    phone: labels.phone || 'Phone (Optional)',
    message: labels.message || 'Message',
    submit: labels.submit || 'Send Message',
    phonePlaceholder: labels.phonePlaceholder || '+972 XX XXX XXXX',
  };

  // Update retry countdown
  useEffect(() => {
    if (retryAfter !== null && retryAfter > 0) {
      const timer = setTimeout(() => setRetryAfter(retryAfter - 1), 1000);
      return () => clearTimeout(timer);
    } else if (retryAfter === 0) {
      setRetryAfter(null);
    }
  }, [retryAfter]);

  // Clear rate limit when component unmounts on success
  useEffect(() => {
    if (status.type === 'success') {
      const timer = setTimeout(() => {
        clearRateLimit(rateLimitId);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status.type, rateLimitId]);

  const handleChange = useCallback((field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));

    // Clear error for this field when user starts typing (excluding honeypot)
    if (field !== 'honeypot' && errors[field as keyof Omit<FormErrors, 'general'>]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  }, [errors]);

  const handleBlur = useCallback((field: keyof ContactFormData) => {
    setTouched(prev => new Set(prev).add(field));

    // Validate this field on blur
    if (field === 'honeypot') return; // Don't validate honeypot on blur

    const tempData = { ...formData, [field]: (formData as any)[field] };
    const validation = validateContactForm(tempData);

    if (!validation.isValid && validation.errors[field]) {
      setErrors(prev => ({ ...prev, [field]: validation.errors[field] }));
    }
  }, [formData]);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched
    setTouched(new Set(['name', 'email', 'phone', 'message'] as Array<keyof ContactFormData>));

    // Validate all fields
    const validation = validateContactForm(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      setStatus({
        type: 'error',
        message: 'Please fix the errors below'
      });
      return;
    }

    // Check rate limit
    const rateLimitCheck = checkRateLimit(rateLimitId, rateLimit);

    if (!rateLimitCheck.allowed) {
      setRetryAfter(rateLimitCheck.retryAfter || 60);
      setStatus({
        type: 'error',
        message: `Too many submissions. Please try again in ${rateLimitCheck.retryAfter} seconds.`
      });
      return;
    }

    setStatus({ type: 'submitting' });

    try {
      // Sanitize input before sending
      const sanitizedData: ContactFormData = {
        name: sanitizeInput(formData.name),
        email: sanitizeInput(formData.email),
        phone: formData.phone ? sanitizeInput(formData.phone) : undefined,
        message: sanitizeInput(formData.message),
      };

      const result = await onSubmit(sanitizedData);

      if (result.success) {
        setStatus({
          type: 'success',
          message: result.message || 'Message sent successfully!'
        });

        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          honeypot: '',
        });
        setErrors({});
        setTouched(new Set());

        // Clear success message after 5 seconds
        setTimeout(() => {
          setStatus({ type: 'idle' });
        }, 5000);
      } else {
        setStatus({
          type: 'error',
          message: result.message || 'Failed to send message. Please try again.'
        });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'An unexpected error occurred. Please try again.'
      });
    }
  }, [formData, onSubmit, rateLimitId, rateLimit]);

  const formatRetryTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Honeypot field - hidden from users, visible to bots */}
      <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
        <label htmlFor="honeypot">Leave this field empty</label>
        <input
          id="honeypot"
          type="text"
          name="honeypot"
          tabIndex={-1}
          autoComplete="off"
          value={formData.honeypot}
          onChange={(e) => handleChange('honeypot', e.target.value)}
        />
      </div>

      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {defaultLabels.name} <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          autoComplete="name"
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
          onBlur={() => handleBlur('name')}
          className={`w-full px-4 py-3 rounded-lg border transition-all outline-none ${
            touched.has('name' as unknown as keyof ContactFormData) && errors.name
              ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200 dark:focus:ring-red-800 bg-red-50 dark:bg-red-900/20 text-gray-900 dark:text-white'
              : 'border-gray-300 dark:border-slate-600 focus:border-accent focus:ring-2 focus:ring-accent/20 bg-white dark:bg-slate-700 text-gray-900 dark:text-white'
          }`}
          aria-invalid={touched.has('name' as unknown as keyof ContactFormData) && !!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {touched.has('name' as unknown as keyof ContactFormData) && errors.name && (
          <p id="name-error" className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
            <AlertCircle size={14} />
            {errors.name}
          </p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {defaultLabels.email} <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
          onBlur={() => handleBlur('email')}
          className={`w-full px-4 py-3 rounded-lg border transition-all outline-none ${
            touched.has('email' as unknown as keyof ContactFormData) && errors.email
              ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200 dark:focus:ring-red-800 bg-red-50 dark:bg-red-900/20 text-gray-900 dark:text-white'
              : 'border-gray-300 dark:border-slate-600 focus:border-accent focus:ring-2 focus:ring-accent/20 bg-white dark:bg-slate-700 text-gray-900 dark:text-white'
          }`}
          aria-invalid={touched.has('email' as unknown as keyof ContactFormData) && !!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {touched.has('email' as unknown as keyof ContactFormData) && errors.email && (
          <p id="email-error" className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
            <AlertCircle size={14} />
            {errors.email}
          </p>
        )}
      </div>

      {/* Phone Field (Optional) */}
      {includePhone && (
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {defaultLabels.phone}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            autoComplete="tel"
            placeholder={defaultLabels.phonePlaceholder}
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            onBlur={() => handleBlur('phone')}
            className={`w-full px-4 py-3 rounded-lg border transition-all outline-none ${
              touched.has('phone' as unknown as keyof ContactFormData) && errors.phone
                ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200 dark:focus:ring-red-800 bg-red-50 dark:bg-red-900/20 text-gray-900 dark:text-white'
                : 'border-gray-300 dark:border-slate-600 focus:border-accent focus:ring-2 focus:ring-accent/20 bg-white dark:bg-slate-700 text-gray-900 dark:text-white'
            }`}
            aria-invalid={touched.has('phone' as unknown as keyof ContactFormData) && !!errors.phone}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
          />
          {touched.has('phone' as unknown as keyof ContactFormData) && errors.phone && (
            <p id="phone-error" className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
              <AlertCircle size={14} />
              {errors.phone}
            </p>
          )}
        </div>
      )}

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {defaultLabels.message} <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={(e) => handleChange('message', e.target.value)}
          onBlur={() => handleBlur('message')}
          className={`w-full px-4 py-3 rounded-lg border transition-all outline-none resize-none ${
            touched.has('message' as unknown as keyof ContactFormData) && errors.message
              ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200 dark:focus:ring-red-800 bg-red-50 dark:bg-red-900/20 text-gray-900 dark:text-white'
              : 'border-gray-300 dark:border-slate-600 focus:border-accent focus:ring-2 focus:ring-accent/20 bg-white dark:bg-slate-700 text-gray-900 dark:text-white'
          }`}
          aria-invalid={touched.has('message' as unknown as keyof ContactFormData) && !!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {touched.has('message' as unknown as keyof ContactFormData) && errors.message && (
          <p id="message-error" className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
            <AlertCircle size={14} />
            {errors.message}
          </p>
        )}
        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
          {formData.message.length}/5000 characters
        </p>
      </div>

      {/* Status Messages */}
      {status.type !== 'idle' && (
        <div
          className={`p-4 rounded-lg flex items-center gap-3 ${
            status.type === 'success'
              ? 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200 border border-green-200 dark:border-green-800'
              : status.type === 'error'
              ? 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200 border border-red-200 dark:border-red-800'
              : 'bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200 border border-blue-200 dark:border-blue-800'
          }`}
          role="alert"
          aria-live="polite"
        >
          {status.type === 'success' && <CheckCircle size={20} />}
          {status.type === 'error' && <AlertCircle size={20} />}
          {status.type === 'submitting' && <Loader2 size={20} className="animate-spin" />}
          <span className="text-sm font-medium">
            {status.message}
          </span>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status.type === 'submitting' || retryAfter !== null}
        className={`w-full py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition-all ${
          status.type === 'submitting' || retryAfter !== null
            ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
            : 'bg-accent hover:bg-accent-hover text-white shadow-lg hover:shadow-xl'
        }`}
      >
        {status.type === 'submitting' ? (
          <>
            <Loader2 size={20} className="animate-spin" />
            Sending...
          </>
        ) : retryAfter !== null ? (
          `Try again in ${formatRetryTime(retryAfter)}`
        ) : (
          <>
            <Send size={20} />
            {defaultLabels.submit}
          </>
        )}
      </button>
    </form>
  );
};
