/**
 * Cookie Consent — Amendment 13 compliant — GTM Consent Mode v2
 * Signals: analytics_storage, ad_storage, ad_user_data, ad_personalization
 * Built: 2026-02-26
 *
 * Israel Privacy Protection Law Amendment 13 (August 2025) compliant
 * Supports: Hebrew, Arabic, English, Russian
 */

// Consent storage key
export const CONSENT_STORAGE_KEY = 'cookie_consent';
export const CONSENT_VERSION = '1.0';
export const CONSENT_EXPIRY_MONTHS = 12;

// Consent types
export interface CookieConsentData {
  version: string;
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
  language: 'he' | 'ar' | 'en' | 'ru';
  expires: string;
}

// Default consent state (all denied except essential)
export const DEFAULT_CONSENT: Omit<CookieConsentData, 'timestamp' | 'expires' | 'language'> = {
  version: CONSENT_VERSION,
  essential: true,
  analytics: false,
  marketing: false,
};

/**
 * Calculate expiry date (12 months from now)
 */
export function calculateExpiryDate(): string {
  const expiry = new Date();
  expiry.setMonth(expiry.getMonth() + CONSENT_EXPIRY_MONTHS);
  return expiry.toISOString();
}

/**
 * Check if stored consent is expired
 */
export function isConsentExpired(consent: CookieConsentData): boolean {
  if (!consent.expires) return true;
  return new Date() > new Date(consent.expires);
}

/**
 * Save consent to localStorage
 */
export function saveConsent(
  analytics: boolean,
  marketing: boolean,
  language: 'he' | 'ar' | 'en' | 'ru'
): CookieConsentData {
  const consent: CookieConsentData = {
    version: CONSENT_VERSION,
    essential: true, // Always true
    analytics,
    marketing,
    timestamp: new Date().toISOString(),
    language,
    expires: calculateExpiryDate(),
  };

  localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent));
  return consent;
}

/**
 * Load consent from localStorage
 */
export function loadConsent(): CookieConsentData | null {
  try {
    const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!stored) return null;

    const consent = JSON.parse(stored) as CookieConsentData;

    // Check if expired
    if (isConsentExpired(consent)) {
      localStorage.removeItem(CONSENT_STORAGE_KEY);
      return null;
    }

    // Check version compatibility
    if (consent.version !== CONSENT_VERSION) {
      // Version mismatch - clear and re-consent
      localStorage.removeItem(CONSENT_STORAGE_KEY);
      return null;
    }

    return consent;
  } catch {
    return null;
  }
}

/**
 * Clear consent from localStorage
 */
export function clearConsent(): void {
  localStorage.removeItem(CONSENT_STORAGE_KEY);
}
