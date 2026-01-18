/**
 * Validation utilities for form inputs
 * Provides safe, reusable validation functions with TypeScript support
 */

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

/**
 * Email validation using RFC 5322 compliant regex
 * Provides good balance between strictness and usability
 */
export const validateEmail = (email: string): ValidationResult => {
  if (!email || email.trim() === '') {
    return { isValid: false, error: 'Email is required' };
  }

  // RFC 5322 compliant email regex (simplified for practical use)
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  if (!emailRegex.test(email)) {
    return { isValid: false, error: 'Please enter a valid email address' };
  }

  // Check for common typos in major domains
  const domain = email.split('@')[1]?.toLowerCase();
  const commonTypos: Record<string, string> = {
    'gmial.com': 'gmail.com',
    'gmai.com': 'gmail.com',
    'yahooo.com': 'yahoo.com',
    'hotmial.com': 'hotmail.com',
  };

  if (domain && commonTypos[domain]) {
    return {
      isValid: false,
      error: `Did you mean ${email.replace(domain, commonTypos[domain])}?`
    };
  }

  return { isValid: true };
};

/**
 * Name validation - checks for minimum length and valid characters
 */
export const validateName = (name: string): ValidationResult => {
  if (!name || name.trim() === '') {
    return { isValid: false, error: 'Name is required' };
  }

  const trimmedName = name.trim();

  if (trimmedName.length < 2) {
    return { isValid: false, error: 'Name must be at least 2 characters' };
  }

  if (trimmedName.length > 100) {
    return { isValid: false, error: 'Name must be less than 100 characters' };
  }

  // Allow letters, spaces, hyphens, apostrophes (international names)
  const nameRegex = /^[\p{L}\s'-]+$/u;

  if (!nameRegex.test(trimmedName)) {
    return { isValid: false, error: 'Name contains invalid characters' };
  }

  return { isValid: true };
};

/**
 * Phone validation (optional field)
 * Supports international formats
 */
export const validatePhone = (phone: string): ValidationResult => {
  if (!phone || phone.trim() === '') {
    return { isValid: true }; // Phone is optional
  }

  // Remove common formatting characters
  const cleanedPhone = phone.replace(/[\s\-\(\)\+]/g, '');

  // Check if it's all digits and reasonable length
  const phoneRegex = /^\d{7,15}$/;

  if (!phoneRegex.test(cleanedPhone)) {
    return { isValid: false, error: 'Please enter a valid phone number' };
  }

  return { isValid: true };
};

/**
 * Message validation - checks for minimum and maximum length
 */
export const validateMessage = (message: string): ValidationResult => {
  if (!message || message.trim() === '') {
    return { isValid: false, error: 'Message is required' };
  }

  const trimmedMessage = message.trim();

  if (trimmedMessage.length < 10) {
    return { isValid: false, error: 'Message must be at least 10 characters' };
  }

  if (trimmedMessage.length > 5000) {
    return { isValid: false, error: 'Message must be less than 5000 characters' };
  }

  // Check for potential spam patterns
  const spamPatterns = [
    /http(s)?:\/\//gi,
    /\b(viagra|cialis|casino|poker|lottery)\b/gi,
    /\$+\s*\d+/g, // Money patterns
  ];

  for (const pattern of spamPatterns) {
    if (pattern.test(trimmedMessage)) {
      return {
        isValid: false,
        error: 'Message appears to contain spam content'
      };
    }
  }

  return { isValid: true };
};

/**
 * Sanitize user input to prevent XSS
 * Removes HTML tags and special characters
 */
export const sanitizeInput = (input: string): string => {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
    .trim();
};

/**
 * Rate limiting checker (client-side)
 * Uses localStorage to track submission attempts
 */
export interface RateLimitConfig {
  maxAttempts: number;
  windowMs: number;
}

export const checkRateLimit = (
  identifier: string,
  config: Partial<RateLimitConfig> = {}
): { allowed: boolean; remainingAttempts?: number; retryAfter?: number } => {
  const finalConfig: RateLimitConfig = {
    maxAttempts: config.maxAttempts ?? 3,
    windowMs: config.windowMs ?? 60000
  };
  const now = Date.now();
  const key = `rate_limit_${identifier}`;

  try {
    const stored = localStorage.getItem(key);

    if (!stored) {
      // First attempt
      const data = {
        attempts: 1,
        firstAttempt: now,
      };
      localStorage.setItem(key, JSON.stringify(data));
      return { allowed: true, remainingAttempts: finalConfig.maxAttempts - 1 };
    }

    const data = JSON.parse(stored);
    const timeSinceFirst = now - data.firstAttempt;

    // Reset if window has passed
    if (timeSinceFirst > finalConfig.windowMs) {
      const newData = {
        attempts: 1,
        firstAttempt: now,
      };
      localStorage.setItem(key, JSON.stringify(newData));
      return { allowed: true, remainingAttempts: finalConfig.maxAttempts - 1 };
    }

    // Check if limit exceeded
    if (data.attempts >= finalConfig.maxAttempts) {
      const retryAfter = Math.ceil((finalConfig.windowMs - timeSinceFirst) / 1000);
      return { allowed: false, retryAfter };
    }

    // Increment attempts
    data.attempts += 1;
    localStorage.setItem(key, JSON.stringify(data));
    return { allowed: true, remainingAttempts: finalConfig.maxAttempts - data.attempts };

  } catch (error) {
    // If localStorage fails, allow submission (fail-open)
    console.warn('Rate limiting failed:', error);
    return { allowed: true };
  }
};

/**
 * Clear rate limit for a specific identifier
 */
export const clearRateLimit = (identifier: string): void => {
  try {
    localStorage.removeItem(`rate_limit_${identifier}`);
  } catch (error) {
    console.warn('Failed to clear rate limit:', error);
  }
};

/**
 * Validate entire form data
 */
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  honeypot?: string; // Hidden field for spam detection
}

export interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  general?: string;
}

export const validateContactForm = (data: ContactFormData): { isValid: boolean; errors: FormErrors } => {
  const errors: FormErrors = {};

  // Check honeypot - if filled, it's a bot
  if (data.honeypot && data.honeypot.trim() !== '') {
    errors.general = 'Submission detected as spam';
    return { isValid: false, errors };
  }

  // Validate name
  const nameResult = validateName(data.name);
  if (!nameResult.isValid) {
    errors.name = nameResult.error;
  }

  // Validate email
  const emailResult = validateEmail(data.email);
  if (!emailResult.isValid) {
    errors.email = emailResult.error;
  }

  // Validate phone (optional)
  if (data.phone) {
    const phoneResult = validatePhone(data.phone);
    if (!phoneResult.isValid) {
      errors.phone = phoneResult.error;
    }
  }

  // Validate message
  const messageResult = validateMessage(data.message);
  if (!messageResult.isValid) {
    errors.message = messageResult.error;
  }

  const isValid = Object.keys(errors).length === 0;
  return { isValid, errors };
};
