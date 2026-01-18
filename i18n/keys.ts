/**
 * Type-safe translation keys extracted from translations.ts
 * This ensures that all translation keys are strongly typed
 */

// Base translation keys (top-level)
export type BaseTranslationKey =
  | 'companyName'
  | 'tagline';

// Navigation keys
export type NavTranslationKey =
  | 'nav.home'
  | 'nav.products'
  | 'nav.gallery'
  | 'nav.about'
  | 'nav.contact';

// Button keys
export type ButtonTranslationKey =
  | 'buttons.callNow'
  | 'buttons.products'
  | 'buttons.contact'
  | 'buttons.learnMore'
  | 'buttons.scroll'
  | 'buttons.viewDetails'
  | 'buttons.sendMessage'
  | 'buttons.sending'
  | 'buttons.success'
  | 'buttons.backToTop';

// Cookie keys
export type CookieTranslationKey =
  | 'cookies.title'
  | 'cookies.text'
  | 'cookies.acceptAll'
  | 'cookies.rejectAll'
  | 'cookies.customize'
  | 'cookies.save'
  | 'cookies.categories.essential.title'
  | 'cookies.categories.essential.desc'
  | 'cookies.categories.analytics.title'
  | 'cookies.categories.analytics.desc'
  | 'cookies.categories.marketing.title'
  | 'cookies.categories.marketing.desc';

// Home page keys
export type HomeTranslationKey =
  | 'home.heroTitle'
  | 'home.heroHighlight'
  | 'home.heroDesc'
  | 'home.servicesTitle'
  | 'home.servicesDesc'
  | 'home.ctaTitle'
  | 'home.ctaDesc'
  | 'home.ctaButton'
  | 'home.features.warranty.title'
  | 'home.features.warranty.desc'
  | 'home.features.design.title'
  | 'home.features.design.desc'
  | 'home.features.safety.title'
  | 'home.features.safety.desc'
  | 'home.features.schedule.title'
  | 'home.features.schedule.desc';

// Products page keys
export type ProductsTranslationKey =
  | 'products.title'
  | 'products.subtitle'
  | 'products.noResults'
  | 'products.categories.all'
  | 'products.categories.gates'
  | 'products.categories.fences'
  | 'products.categories.pergolas'
  | 'products.categories.railings'
  | 'products.categories.cladding';

// Gallery page keys
export type GalleryTranslationKey =
  | 'gallery.title'
  | 'gallery.subtitle'
  | 'gallery.types.residential'
  | 'gallery.types.commercial'
  | 'gallery.types.outdoor';

// About page keys
export type AboutTranslationKey =
  | 'about.title'
  | 'about.subtitle'
  | 'about.storyTitle'
  | 'about.storyP1'
  | 'about.storyP2'
  | 'about.storyP3'
  | 'about.valuesTitle'
  | 'about.values.0.title'
  | 'about.values.0.text'
  | 'about.values.1.title'
  | 'about.values.1.text'
  | 'about.values.2.title'
  | 'about.values.2.text'
  | 'about.values.3.title'
  | 'about.values.3.text';

// Contact page keys
export type ContactTranslationKey =
  | 'contact.title'
  | 'contact.subtitle'
  | 'contact.infoTitle'
  | 'contact.phone'
  | 'contact.phoneNote'
  | 'contact.email'
  | 'contact.address'
  | 'contact.addressVal'
  | 'contact.formTitle'
  | 'contact.formSubtitle'
  | 'contact.labels.name'
  | 'contact.labels.namePlaceholder'
  | 'contact.labels.phone'
  | 'contact.labels.phonePlaceholder'
  | 'contact.labels.email'
  | 'contact.labels.emailPlaceholder'
  | 'contact.labels.designType'
  | 'contact.labels.designPlaceholder'
  | 'contact.labels.message'
  | 'contact.labels.messagePlaceholder'
  | 'contact.designs.gates'
  | 'contact.designs.fences'
  | 'contact.designs.pergolas'
  | 'contact.designs.railings'
  | 'contact.designs.cladding'
  | 'contact.designs.bars'
  | 'contact.designs.other'
  | 'contact.map';

// Footer keys
export type FooterTranslationKey =
  | 'footer.about'
  | 'footer.quickLinks'
  | 'footer.services'
  | 'footer.contact'
  | 'footer.rights';

// Service keys
export type ServiceTranslationKey =
  | 'services.gates.title'
  | 'services.gates.description'
  | 'services.fences.title'
  | 'services.fences.description'
  | 'services.pergolas.title'
  | 'services.pergolas.description'
  | 'services.railings.title'
  | 'services.railings.description'
  | 'services.cladding.title'
  | 'services.cladding.description'
  | 'services.bars.title'
  | 'services.bars.description';

// Combined translation key type
export type TranslationKey =
  | BaseTranslationKey
  | NavTranslationKey
  | ButtonTranslationKey
  | CookieTranslationKey
  | HomeTranslationKey
  | ProductsTranslationKey
  | GalleryTranslationKey
  | AboutTranslationKey
  | ContactTranslationKey
  | FooterTranslationKey
  | ServiceTranslationKey;

/**
 * Total translation keys count: 92
 */
