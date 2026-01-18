/**
 * i18n Module - Internationalization System
 *
 * Provides comprehensive translation support for multiple languages
 * with RTL/LTR handling and type-safe translation keys.
 *
 * @module i18n
 */

// Language types and utilities
export { Language, isRTL, getDirection, LANGUAGE_NAMES, LANGUAGE_SHORT_CODES } from './languages';

// Translation key types
export type {
  TranslationKey,
  BaseTranslationKey,
  NavTranslationKey,
  ButtonTranslationKey,
  CookieTranslationKey,
  HomeTranslationKey,
  ProductsTranslationKey,
  GalleryTranslationKey,
  AboutTranslationKey,
  ContactTranslationKey,
  FooterTranslationKey,
  ServiceTranslationKey
} from './keys';

// Translation functions
export { t, getTranslations, hasTranslation } from './t';

// Translation data
export { TRANSLATIONS_AR } from './translations.ar';
