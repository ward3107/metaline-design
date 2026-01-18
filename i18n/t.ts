import { Language } from './languages';
import { TranslationKey } from './keys';
import { CONTENT } from '../translations';
import { TRANSLATIONS_AR } from './translations.ar';

/**
 * Translation data structure for all languages
 */
interface TranslationData {
  direction: 'rtl' | 'ltr';
  companyName: string;
  tagline: string;
  nav: Array<{ path: string; label: string }>;
  buttons: Record<string, string>;
  cookies: {
    title: string;
    text: string;
    acceptAll: string;
    rejectAll: string;
    customize: string;
    save: string;
    categories: {
      essential: { title: string; desc: string };
      analytics: { title: string; desc: string };
      marketing: { title: string; desc: string };
    };
  };
  home: {
    heroTitle: string;
    heroHighlight: string;
    heroDesc: string;
    servicesTitle: string;
    servicesDesc: string;
    ctaTitle: string;
    ctaDesc: string;
    ctaButton: string;
    features: {
      warranty: { title: string; desc: string };
      design: { title: string; desc: string };
      safety: { title: string; desc: string };
      schedule: { title: string; desc: string };
    };
  };
  products: {
    title: string;
    subtitle: string;
    noResults: string;
    categories: Array<{ id: string; label: string }>;
  };
  gallery: {
    title: string;
    subtitle: string;
    types: {
      residential: string;
      commercial: string;
      outdoor: string;
    };
  };
  about: {
    title: string;
    subtitle: string;
    storyTitle: string;
    storyP1: string;
    storyP2: string;
    storyP3: string;
    valuesTitle: string;
    values: Array<{ title: string; text: string }>;
  };
  contact: {
    title: string;
    subtitle: string;
    infoTitle: string;
    phone: string;
    phoneNote: string;
    email: string;
    address: string;
    addressVal: string;
    formTitle: string;
    formSubtitle: string;
    labels: {
      name: string;
      namePlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      designType: string;
      designPlaceholder: string;
      message: string;
      messagePlaceholder: string;
    };
    designs: Array<{ id: string; label: string }>;
    map: string;
  };
  footer: {
    about: string;
    quickLinks: string;
    services: string;
    contact: string;
    rights: string;
  };
  servicesList: Array<{
    id: string;
    title: string;
    description: string;
    icon: any;
    image: string;
  }>;
  productsList: Array<{
    id: string;
    category: string;
    title: string;
    description: string;
    image: string;
  }>;
  galleryList: Array<{
    id: string;
    category: string;
    title: string;
    image: string;
  }>;
}

/**
 * Translation registry for all supported languages
 */
const TRANSLATIONS: Record<Language, TranslationData> = {
  [Language.EN]: CONTENT.en as TranslationData,
  [Language.HE]: CONTENT.he as TranslationData,
  [Language.AR]: TRANSLATIONS_AR as TranslationData,
};

/**
 * Get translation by key with optional parameter interpolation
 *
 * @param language - The language code
 * @param key - The translation key (e.g., 'home.heroTitle')
 * @param params - Optional parameters for string interpolation
 * @returns The translated string
 *
 * @example
 * // Simple usage
 * t(Language.EN, 'home.heroTitle') // 'Design & Safety'
 *
 * // With interpolation (if translation contains {{placeholder}})
 * t(Language.EN, 'common.welcome', { name: 'John' }) // 'Welcome, John!'
 */
export function t(
  language: Language,
  key: TranslationKey,
  params?: Record<string, string | number>
): string {
  const translations = TRANSLATIONS[language];

  if (!translations) {
    console.warn(`Translation not found for language: ${language}`);
    return key;
  }

  // Navigate through nested object using dot notation
  const keys = key.split('.');
  let value: any = translations;

  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      console.warn(`Translation key not found: ${key} for language: ${language}`);
      return key;
    }
  }

  // If final value is not a string, return it as is
  if (typeof value !== 'string') {
    return value;
  }

  // Perform parameter interpolation if params are provided
  if (params && Object.keys(params).length > 0) {
    return value.replace(/\{\{(\w+)\}\}/g, (match, paramKey) => {
      return params[paramKey]?.toString() || match;
    });
  }

  return value;
}

/**
 * Get all translations for a specific language
 *
 * @param language - The language code
 * @returns The complete translation object for the language
 */
export function getTranslations(language: Language): TranslationData {
  return TRANSLATIONS[language] || TRANSLATIONS[Language.HE];
}

/**
 * Check if a translation key exists for a given language
 *
 * @param language - The language code
 * @param key - The translation key to check
 * @returns true if the key exists, false otherwise
 */
export function hasTranslation(language: Language, key: TranslationKey): boolean {
  const translations = TRANSLATIONS[language];
  if (!translations) return false;

  const keys = key.split('.');
  let value: any = translations;

  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return false;
    }
  }

  return value !== undefined;
}
