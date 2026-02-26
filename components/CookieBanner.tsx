/**
 * Cookie Consent Banner — Amendment 13 compliant — GTM Consent Mode v2
 * Signals: analytics_storage, ad_storage, ad_user_data, ad_personalization
 * Built: 2026-02-26
 *
 * Features:
 * - Israel Privacy Protection Law Amendment 13 (August 2025) compliant
 * - Google Tag Manager Consent Mode v2 integration
 * - 4 languages: Hebrew, Arabic, English, Russian
 * - RTL/LTR support
 * - Keyboard accessible
 * - Mobile responsive
 * - 12-month consent expiry
 */

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, ChevronDown, ChevronUp, Check, Globe, Shield, BarChart3, Target, ExternalLink } from 'lucide-react';
import {
  cookieConsentTranslations,
  mapToSupportedLanguage,
  isRTLLanguage,
  type CookieConsentLanguage,
  type CookieConsentTranslations,
} from '../i18n/cookieConsent';
import {
  loadConsent,
  saveConsent,
  type CookieConsentData,
} from '../utils/cookieConsent';
import { updateConsent } from '../utils/gtmConsent';

// Language options for the switcher
const LANGUAGE_OPTIONS: { code: CookieConsentLanguage; label: string; nativeLabel: string }[] = [
  { code: 'he', label: 'HE', nativeLabel: 'עב' },
  { code: 'ar', label: 'AR', nativeLabel: 'ع' },
  { code: 'en', label: 'EN', nativeLabel: 'EN' },
  { code: 'ru', label: 'RU', nativeLabel: 'РУ' },
];

interface CookieBannerProps {
  privacyPolicyUrl?: string;
  onConsentChange?: (consent: CookieConsentData) => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({
  privacyPolicyUrl = '/privacy-policy',
  onConsentChange,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showLanguageSwitcher, setShowLanguageSwitcher] = useState(false);
  const [language, setLanguage] = useState<CookieConsentLanguage>('he');
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false,
  });

  const bannerRef = useRef<HTMLDivElement>(null);
  const firstButtonRef = useRef<HTMLButtonElement>(null);

  // Get translations for current language
  const t: CookieConsentTranslations = cookieConsentTranslations[language];
  const isRTL = isRTLLanguage(language);
  const direction = isRTL ? 'rtl' : 'ltr';

  // Initialize on mount
  useEffect(() => {
    // Detect browser language
    const browserLang = navigator.language || (navigator as Navigator & { userLanguage?: string }).userLanguage || 'en';
    const detectedLang = mapToSupportedLanguage(browserLang);
    setLanguage(detectedLang);

    // Check for existing consent
    const existingConsent = loadConsent();
    if (existingConsent) {
      // User has already consented - update GTM but don't show banner
      updateConsent(existingConsent.analytics, existingConsent.marketing);
      setPreferences({
        essential: existingConsent.essential,
        analytics: existingConsent.analytics,
        marketing: existingConsent.marketing,
      });
      if (existingConsent.language) {
        setLanguage(existingConsent.language);
      }
      onConsentChange?.(existingConsent);
    } else {
      // No consent found - show banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [onConsentChange]);

  // Focus trap when banner becomes visible
  useEffect(() => {
    if (isVisible && firstButtonRef.current) {
      firstButtonRef.current.focus();
    }
  }, [isVisible]);

  // Handle keyboard navigation
  useEffect(() => {
    if (!isVisible) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showDetails) {
        setShowDetails(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isVisible, showDetails]);

  const handleConsentSave = useCallback(
    (analytics: boolean, marketing: boolean) => {
      const consentData = saveConsent(analytics, marketing, language);

      // Update GTM Consent Mode
      updateConsent(analytics, marketing);

      // Callback
      onConsentChange?.(consentData);

      // Hide banner
      setIsVisible(false);
    },
    [language, onConsentChange]
  );

  const acceptAll = () => {
    setPreferences({ essential: true, analytics: true, marketing: true });
    handleConsentSave(true, true);
  };

  const rejectAll = () => {
    setPreferences({ essential: true, analytics: false, marketing: false });
    handleConsentSave(false, false);
  };

  const savePreferences = () => {
    handleConsentSave(preferences.analytics, preferences.marketing);
  };

  const togglePreference = (key: 'analytics' | 'marketing') => {
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const changeLanguage = (lang: CookieConsentLanguage) => {
    setLanguage(lang);
    setShowLanguageSwitcher(false);
  };

  // Animation variants
  const bannerVariants = {
    hidden: { y: '100%', opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: '100%', opacity: 0 },
  };

  const detailsVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: 'auto', opacity: 1 },
    exit: { height: 0, opacity: 0 },
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          ref={bannerRef}
          variants={bannerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-[9999] p-3 sm:p-4 md:p-6"
          role="dialog"
          aria-label="Cookie consent"
          aria-live="polite"
          dir={direction}
        >
          <div className="max-w-5xl mx-auto bg-white dark:bg-slate-900 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200 dark:border-slate-700 overflow-hidden">
            {/* Header */}
            <div className="p-4 sm:p-6 md:p-8">
              <div className="flex flex-col gap-6">
                {/* Title and Language Switcher */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-accent/10 p-2.5 rounded-full text-accent shrink-0">
                      <Cookie size={24} />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                      {t.title}
                    </h2>
                  </div>

                  {/* Language Switcher */}
                  <div className="relative">
                    <button
                      onClick={() => setShowLanguageSwitcher(!showLanguageSwitcher)}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 dark:border-slate-600 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors text-sm font-medium text-gray-700 dark:text-gray-300"
                      aria-expanded={showLanguageSwitcher}
                      aria-label={t.languageSwitcher}
                    >
                      <Globe size={16} />
                      <span className="hidden sm:inline">{LANGUAGE_OPTIONS.find((l) => l.code === language)?.label}</span>
                      <span className="sm:hidden">{LANGUAGE_OPTIONS.find((l) => l.code === language)?.nativeLabel}</span>
                      <ChevronDown size={14} className={`transition-transform ${showLanguageSwitcher ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                      {showLanguageSwitcher && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className={`absolute top-full mt-2 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-gray-200 dark:border-slate-600 py-1 min-w-[120px] ${isRTL ? 'left-0' : 'right-0'}`}
                        >
                          {LANGUAGE_OPTIONS.map((lang) => (
                            <button
                              key={lang.code}
                              onClick={() => changeLanguage(lang.code)}
                              className={`w-full px-4 py-2 text-left hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors flex items-center justify-between ${
                                language === lang.code ? 'text-accent font-medium' : 'text-gray-700 dark:text-gray-300'
                              }`}
                            >
                              <span>{lang.nativeLabel}</span>
                              <span className="text-xs text-gray-400">{lang.label}</span>
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                  {t.description}
                </p>

                {/* Main Actions */}
                {!showDetails && (
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      ref={firstButtonRef}
                      onClick={() => setShowDetails(true)}
                      className="px-5 py-3 rounded-lg border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors font-medium flex items-center justify-center gap-2 order-3 sm:order-1"
                    >
                      {t.customize}
                      <ChevronDown size={16} />
                    </button>
                    <button
                      onClick={rejectAll}
                      className="px-5 py-3 rounded-lg border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors font-medium order-2"
                    >
                      {t.rejectAll}
                    </button>
                    <button
                      onClick={acceptAll}
                      className="px-6 py-3 rounded-lg bg-accent hover:bg-accent-hover text-white transition-colors font-bold shadow-lg order-1 sm:order-3"
                    >
                      {t.acceptAll}
                    </button>
                  </div>
                )}
              </div>

              {/* Detailed Preferences */}
              <AnimatePresence>
                {showDetails && (
                  <motion.div
                    variants={detailsVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-6 pt-6 border-t border-gray-200 dark:border-slate-700 space-y-4">
                      {/* Essential Cookies */}
                      <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-slate-800/50 border border-gray-100 dark:border-slate-700">
                        <div className="mt-0.5 shrink-0">
                          <div className="w-6 h-6 rounded bg-accent/20 flex items-center justify-center">
                            <Shield size={14} className="text-accent" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-bold text-gray-900 dark:text-white">
                              {t.categories.essential.title}
                            </h4>
                            <span className="text-xs bg-accent/10 text-accent px-2 py-0.5 rounded font-medium">
                              {t.categories.essential.badge}
                            </span>
                          </div>
                          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                            {t.categories.essential.description}
                          </p>
                        </div>
                        <div className="shrink-0">
                          <div className="w-10 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                            <Check size={14} className="text-accent" />
                          </div>
                        </div>
                      </div>

                      {/* Analytics Cookies */}
                      <label className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer border border-transparent hover:border-gray-100 dark:hover:border-slate-700 group">
                        <div className="mt-0.5 shrink-0">
                          <div className="w-6 h-6 rounded bg-gray-100 dark:bg-slate-700 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                            <BarChart3
                              size={14}
                              className={`transition-colors ${preferences.analytics ? 'text-accent' : 'text-gray-400 dark:text-gray-500'}`}
                            />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4
                            className={`font-bold mb-1 transition-colors ${
                              preferences.analytics ? 'text-accent' : 'text-gray-900 dark:text-white'
                            }`}
                          >
                            {t.categories.analytics.title}
                          </h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                            {t.categories.analytics.description}
                          </p>
                        </div>
                        <div className="shrink-0">
                          <div
                            className={`w-10 h-6 rounded-full transition-colors cursor-pointer flex items-center ${
                              preferences.analytics ? 'bg-accent' : 'bg-gray-200 dark:bg-slate-600'
                            }`}
                            onClick={() => togglePreference('analytics')}
                          >
                            <div
                              className={`w-5 h-5 rounded-full bg-white shadow-md transition-transform ${
                                preferences.analytics ? (isRTL ? '-translate-x-4' : 'translate-x-4') : ''
                              }`}
                            />
                          </div>
                        </div>
                      </label>

                      {/* Marketing Cookies */}
                      <label className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer border border-transparent hover:border-gray-100 dark:hover:border-slate-700 group">
                        <div className="mt-0.5 shrink-0">
                          <div className="w-6 h-6 rounded bg-gray-100 dark:bg-slate-700 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                            <Target
                              size={14}
                              className={`transition-colors ${preferences.marketing ? 'text-accent' : 'text-gray-400 dark:text-gray-500'}`}
                            />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4
                            className={`font-bold mb-1 transition-colors ${
                              preferences.marketing ? 'text-accent' : 'text-gray-900 dark:text-white'
                            }`}
                          >
                            {t.categories.marketing.title}
                          </h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                            {t.categories.marketing.description}
                          </p>
                        </div>
                        <div className="shrink-0">
                          <div
                            className={`w-10 h-6 rounded-full transition-colors cursor-pointer flex items-center ${
                              preferences.marketing ? 'bg-accent' : 'bg-gray-200 dark:bg-slate-600'
                            }`}
                            onClick={() => togglePreference('marketing')}
                          >
                            <div
                              className={`w-5 h-5 rounded-full bg-white shadow-md transition-transform ${
                                preferences.marketing ? (isRTL ? '-translate-x-4' : 'translate-x-4') : ''
                              }`}
                            />
                          </div>
                        </div>
                      </label>

                      {/* Footer Actions */}
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-gray-200 dark:border-slate-700">
                        <a
                          href={privacyPolicyUrl}
                          className="text-accent hover:text-accent-hover transition-colors flex items-center gap-1 text-sm font-medium"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {t.privacyPolicyLink}
                          <ExternalLink size={14} />
                        </a>

                        <div className="flex gap-3">
                          <button
                            onClick={() => setShowDetails(false)}
                            className="px-4 py-2 rounded-lg text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-1"
                            aria-label="Close details"
                          >
                            <ChevronUp size={20} />
                          </button>
                          <button
                            onClick={savePreferences}
                            className="px-6 py-2.5 rounded-lg bg-accent hover:bg-accent-hover text-white transition-colors font-bold shadow-lg flex items-center gap-2"
                          >
                            <Check size={18} />
                            {t.savePreferences}
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
