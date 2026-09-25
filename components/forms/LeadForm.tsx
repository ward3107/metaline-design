import React, { useId, useState } from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { getChrome } from '../../i18n/siteChrome';

export type LeadFormVariant = 'consult' | 'architects' | 'contractors' | 'newsletter';

interface LeadFormProps {
  variant: LeadFormVariant;
  /** Render the heading + subtitle above the fields (default true). */
  showHeading?: boolean;
  className?: string;
}

type Field = 'name' | 'phone' | 'email' | 'area' | 'company' | 'interest' | 'message';

const FIELDS: Record<LeadFormVariant, Field[]> = {
  consult: ['name', 'phone', 'email', 'area', 'interest', 'message'],
  architects: ['name', 'phone', 'email', 'area', 'company', 'message'],
  contractors: ['name', 'phone', 'email', 'area', 'company', 'message'],
  newsletter: ['name', 'email'],
};

const REQUIRED: Record<LeadFormVariant, Field[]> = {
  consult: ['name', 'phone'],
  architects: ['name', 'phone', 'email'],
  contractors: ['name', 'phone'],
  newsletter: ['email'],
};

const inputClass =
  'w-full h-12 rounded-lg border border-ink-400 dark:border-ink-700 bg-white dark:bg-ink-900 px-4 text-base text-ink-950 dark:text-ink-50 focus:border-accent';

/**
 * Lead form used across the site (consultation band, professional registry
 * forms, newsletter). Consent checkboxes are separate and never pre-checked
 * (Israeli Privacy Protection Law, Amendment 13); only privacy acceptance is
 * mandatory, marketing opt-in stays optional.
 */
export const LeadForm: React.FC<LeadFormProps> = ({ variant, showHeading = true, className = '' }) => {
  const { content, language } = useLanguage();
  const c = getChrome(language).forms;
  const uid = useId();
  const fields = FIELDS[variant];
  const required = REQUIRED[variant];

  const [values, setValues] = useState<Record<string, string>>({});
  const [consents, setConsents] = useState({ registry: false, marketing: false, privacy: false });
  const [honeypot, setHoneypot] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);

  const titles: Record<LeadFormVariant, [string, string]> = {
    consult: [c.consultTitle, c.consultSubtitle],
    architects: [c.architectsTitle, c.architectsSubtitle],
    contractors: [c.contractorsTitle, c.contractorsSubtitle],
    newsletter: [c.newsletterTitle, c.newsletterSubtitle],
  };
  const submitLabel =
    variant === 'consult' ? c.submitConsult : variant === 'newsletter' ? c.submitNewsletter : c.submitPro;

  const labelFor: Record<Field, string> = {
    name: c.name,
    phone: c.phone,
    email: c.email,
    area: c.area,
    company: c.company,
    interest: c.interestedIn,
    message: c.message,
  };

  const set = (f: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setValues((v) => ({ ...v, [f]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return;
    const next: Record<string, string> = {};
    required.forEach((f) => {
      if (!values[f]?.trim()) next[f] = c.required;
    });
    if (!consents.privacy) next.privacy = c.privacyRequired;
    setErrors(next);
    if (Object.keys(next).length) return;

    // TODO(launch): send { variant, values, consents } to the chosen backend
    // (Formspree / Resend / CRM). Until then, fail visibly instead of faking success.
    setSubmitError(c.notConnected);
    // eslint-disable-next-line no-console
    console.warn(`[metaline-design] LeadForm (${variant}) submit blocked: no backend wired up.`);
  };

  const id = (f: string) => `${uid}-${f}`;
  const compact = variant === 'newsletter';
  const gridCols = compact ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';

  const renderField = (f: Field) => {
    const isReq = required.includes(f);
    const err = errors[f];
    const common = {
      id: id(f),
      name: f,
      value: values[f] || '',
      onChange: set(f),
      'aria-invalid': err ? true : undefined,
      'aria-describedby': err ? `${id(f)}-err` : undefined,
      required: isReq,
    };
    const wide = f === 'message' && !compact;
    return (
      <div key={f} className={`flex flex-col gap-1.5 ${wide ? 'sm:col-span-2 lg:col-span-3' : ''}`}>
        <label htmlFor={id(f)} className="text-sm font-semibold text-ink-900 dark:text-ink-100">
          {labelFor[f]}
          {isReq && <span aria-hidden="true" className="text-red-700 dark:text-red-400"> *</span>}
        </label>
        {f === 'interest' ? (
          <select {...common} className={inputClass}>
            <option value="">{c.choose}</option>
            {content.servicesList.map((s: { id: string; title: string }) => (
              <option key={s.id} value={s.id}>{s.title}</option>
            ))}
            <option value="all">{c.allProducts}</option>
          </select>
        ) : f === 'message' ? (
          <textarea {...common} rows={compact ? 2 : 3} className={`${inputClass} h-auto py-3 resize-y`} />
        ) : (
          <input
            {...common}
            type={f === 'email' ? 'email' : f === 'phone' ? 'tel' : 'text'}
            autoComplete={f === 'name' ? 'name' : f === 'email' ? 'email' : f === 'phone' ? 'tel' : f === 'company' ? 'organization' : undefined}
            dir={f === 'email' || f === 'phone' ? 'ltr' : undefined}
            className={inputClass}
          />
        )}
        {err && <span id={`${id(f)}-err`} className="text-sm text-red-700 dark:text-red-400">{err}</span>}
      </div>
    );
  };

  const checkbox = (key: keyof typeof consents, label: React.ReactNode) => (
    <label className="flex items-start gap-3 min-h-11 py-2 text-sm text-ink-800 dark:text-ink-300 cursor-pointer">
      <input
        type="checkbox"
        checked={consents[key]}
        onChange={(e) => setConsents((s) => ({ ...s, [key]: e.target.checked }))}
        className="mt-0.5 h-5 w-5 shrink-0 accent-[#104f9a]"
        aria-invalid={key === 'privacy' && errors.privacy ? true : undefined}
      />
      <span>{label}</span>
    </label>
  );

  return (
    <form onSubmit={handleSubmit} noValidate className={`flex flex-col gap-5 ${className}`}>
      {showHeading && (
        <div className="flex flex-col gap-2">
          <h2 className={`font-display font-bold text-ink-950 dark:text-white ${compact ? 'text-xl' : 'text-2xl md:text-3xl'}`}>
            {titles[variant][0]}
          </h2>
          <p className="text-ink-700 dark:text-ink-300">{titles[variant][1]}</p>
        </div>
      )}

      {/* Honeypot — hidden from people and assistive tech */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>Website<input tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} /></label>
      </div>

      <div className={`grid gap-4 ${gridCols}`}>{fields.map(renderField)}</div>

      <div className="flex flex-col">
        {variant === 'architects' && checkbox('registry', c.consentArchitects)}
        {variant === 'contractors' && checkbox('registry', c.consentContractors)}
        {checkbox('marketing', c.consentMarketing)}
        {checkbox(
          'privacy',
          <>
            {c.privacyPrefix}
            <Link to="/privacy-policy" className="underline text-accent-hover dark:text-accent">{c.privacyLink}</Link>
            {c.privacySuffix}
            <span aria-hidden="true" className="text-red-700 dark:text-red-400"> *</span>
          </>
        )}
        {errors.privacy && <span className="text-sm text-red-700 dark:text-red-400">{errors.privacy}</span>}
      </div>

      {submitError && (
        <div role="alert" className="flex items-start gap-2 rounded-lg bg-red-50 dark:bg-red-950/40 p-3 text-sm text-red-800 dark:text-red-300">
          <AlertCircle size={18} className="shrink-0 mt-0.5" />
          <span>{submitError}</span>
        </div>
      )}

      <button
        type="submit"
        className={`h-12 rounded-full font-bold transition-colors ${
          compact
            ? 'border-2 border-ink-950 dark:border-white text-ink-950 dark:text-white hover:bg-ink-950 hover:text-white dark:hover:bg-white dark:hover:text-ink-950'
            : 'self-start px-10 bg-gold hover:bg-gold-hover text-accent'
        }`}
      >
        {submitLabel}
      </button>
    </form>
  );
};
