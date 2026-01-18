import { useState, useEffect } from 'react';
import { Language, isRTL, getDirection, getTranslations } from '../i18n';
import { CONTENT } from '../translations';

/**
 * Language management hook with URL parameter support
 *
 * Features:
 * - Initializes from URL parameter (?lang=en|he|ar)
 * - Falls back to localStorage ("app_language")
 * - Defaults to 'he' (Hebrew)
 * - Updates URL parameter on language change
 * - Updates document.documentElement lang and dir attributes
 *
 * @returns Language state and management functions
 */
export function useLanguage() {
  const [language, setLanguageState] = useState<Language>(() => {
    // Priority 1: Check URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');

    if (urlLang && Object.values(Language).includes(urlLang as Language)) {
      return urlLang as Language;
    }

    // Priority 2: Check localStorage
    const storedLang = localStorage.getItem('app_language');
    if (storedLang && Object.values(Language).includes(storedLang as Language)) {
      return storedLang as Language;
    }

    // Priority 3: Default to Hebrew
    return Language.HE;
  });

  /**
   * Set language and update all necessary states
   * Updates localStorage, URL parameter, and document attributes
   *
   * @param lang - The language to set
   */
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);

    // Update localStorage
    localStorage.setItem('app_language', lang);

    // Update URL parameter without page reload
    const url = new URL(window.location.href);
    url.searchParams.set('lang', lang);
    window.history.replaceState({}, '', url.toString());
  };

  // Update document attributes when language changes
  useEffect(() => {
    const dir = getDirection(language);

    // Update document element for proper RTL/LTR handling
    document.documentElement.lang = language;
    document.documentElement.dir = dir;

    // Add or remove RTL class for additional styling hooks
    if (isRTL(language)) {
      document.documentElement.classList.add('rtl');
    } else {
      document.documentElement.classList.remove('rtl');
    }
  }, [language]);

  return {
    language,
    setLanguage,
    dir: getDirection(language),
    isRTL: isRTL(language),
    // Maintain backward compatibility with existing code
    content: getTranslations(language),
    direction: getDirection(language) as 'rtl' | 'ltr',
    // Legacy toggle function for backward compatibility
    toggleLanguage: () => {
      setLanguage(language === Language.HE ? Language.EN : Language.HE);
    }
  };
}
