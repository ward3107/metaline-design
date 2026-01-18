/**
 * Language enum for supported languages
 */
export enum Language {
  EN = 'en',
  HE = 'he',
  AR = 'ar'
}

/**
 * Check if a language is RTL (Right-to-Left)
 * @param lang - Language code
 * @returns true if the language is RTL, false otherwise
 */
export function isRTL(lang: Language): boolean {
  return lang === Language.HE || lang === Language.AR;
}

/**
 * Get text direction for a language
 * @param lang - Language code
 * @returns 'rtl' or 'ltr'
 */
export function getDirection(lang: Language): 'rtl' | 'ltr' {
  return isRTL(lang) ? 'rtl' : 'ltr';
}

/**
 * Display names for languages in their native script
 */
export const LANGUAGE_NAMES: Record<Language, string> = {
  [Language.EN]: 'English',
  [Language.HE]: 'עברית',
  [Language.AR]: 'العربية'
};

/**
 * Short codes for language display (e.g., for UI buttons)
 */
export const LANGUAGE_SHORT_CODES: Record<Language, string> = {
  [Language.EN]: 'EN',
  [Language.HE]: 'עב',
  [Language.AR]: 'ع'
};
