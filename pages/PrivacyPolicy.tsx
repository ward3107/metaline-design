/**
 * Privacy Policy Page
 * Compliant with PPL Section 11 + Amendment 13 + PPA 2022 guidelines
 * Supports: Hebrew (he), Arabic (ar), English (en), Russian (ru)
 */

import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Globe,
  Clock,
  Calendar,
  ChevronDown,
  ChevronUp,
  Shield,
  Mail,
  MapPin,
  Globe2,
  ExternalLink,
  Cookie,
  Lock,
  AlertTriangle,
  FileText,
  Scale,
  Send,
} from 'lucide-react';
import { privacyPolicyHE, privacyPolicyEN, type PrivacyPolicyLanguage, type PrivacyPolicyTranslations } from '../i18n/privacyPolicy';
import { Reveal } from '../components/Reveal';

// Language options
const LANGUAGE_OPTIONS: { code: PrivacyPolicyLanguage; label: string; nativeLabel: string }[] = [
  { code: 'he', label: 'עברית', nativeLabel: 'עב' },
  { code: 'en', label: 'English', nativeLabel: 'EN' },
  { code: 'ar', label: 'العربية', nativeLabel: 'ع' },
  { code: 'ru', label: 'Русский', nativeLabel: 'РУ' },
];

// Get translations based on language
function getTranslations(lang: PrivacyPolicyLanguage): PrivacyPolicyTranslations {
  switch (lang) {
    case 'he':
      return privacyPolicyHE;
    case 'en':
      return privacyPolicyEN;
    case 'ar':
    case 'ru':
      // For now, fall back to Hebrew for Arabic and Russian
      // In production, these would have full translations
      return privacyPolicyHE;
    default:
      return privacyPolicyHE;
  }
}

// Check if language is RTL
function isRTL(lang: PrivacyPolicyLanguage): boolean {
  return lang === 'he' || lang === 'ar';
}

export const PrivacyPolicy: React.FC = () => {
  const [language, setLanguage] = useState<PrivacyPolicyLanguage>('he');
  const [showTocMobile, setShowTocMobile] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const contentRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const t = getTranslations(language);
  const rtl = isRTL(language);
  const dir = rtl ? 'rtl' : 'ltr';

  // Intersection observer for active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px' }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [language]);

  // Scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = sectionRefs.current[sectionId];
    if (element) {
      const offset = 100;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setShowTocMobile(false);
  };

  // Register section ref
  const registerRef = (id: string) => (el: HTMLElement | null) => {
    sectionRefs.current[id] = el;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900" dir={dir}>
      {/* Header */}
      <div className="bg-primary dark:bg-black text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="text-accent" size={32} />
                  <h1 className="text-3xl md:text-5xl font-bold">{t.meta.title}</h1>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-gray-300 text-sm md:text-base">
                  <span className="flex items-center gap-2">
                    <Clock size={16} />
                    {t.meta.readingTime}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar size={16} />
                    {t.meta.lastUpdated}
                  </span>
                </div>
              </div>

              {/* Language Switcher */}
              <div className="flex items-center gap-2 bg-white/10 rounded-lg p-1">
                <Globe size={20} className="text-gray-300 ml-2 mr-2" />
                {LANGUAGE_OPTIONS.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                      language === lang.code
                        ? 'bg-accent text-white'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {lang.nativeLabel}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Table of Contents - Sidebar (Desktop) */}
          <aside className="hidden lg:block w-72 shrink-0">
            <div className="sticky top-24 bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-slate-700">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <FileText size={20} className="text-accent" />
                {t.toc.title}
              </h2>
              <nav className="space-y-1">
                {t.toc.sections.map((section, index) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-right text-sm py-2 px-3 rounded-lg transition-colors flex items-center gap-2 ${
                      activeSection === section.id
                        ? 'bg-accent/10 text-accent font-medium'
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-700'
                    }`}
                  >
                    <span className="w-6 h-6 rounded-full bg-gray-100 dark:bg-slate-600 text-xs flex items-center justify-center shrink-0">
                      {index + 1}
                    </span>
                    <span className="line-clamp-2">{section.title}</span>
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Mobile TOC Dropdown */}
          <div className="lg:hidden mb-6">
            <button
              onClick={() => setShowTocMobile(!showTocMobile)}
              className="w-full bg-white dark:bg-slate-800 rounded-xl shadow-lg p-4 border border-gray-100 dark:border-slate-700 flex items-center justify-between"
            >
              <span className="font-medium text-gray-900 dark:text-white flex items-center gap-2">
                <FileText size={20} className="text-accent" />
                {t.toc.title}
              </span>
              {showTocMobile ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>

            <AnimatePresence>
              {showTocMobile && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="bg-white dark:bg-slate-800 rounded-b-xl shadow-lg border border-t-0 border-gray-100 dark:border-slate-700 p-4 mt-1">
                    <nav className="space-y-1">
                      {t.toc.sections.map((section, index) => (
                        <button
                          key={section.id}
                          onClick={() => scrollToSection(section.id)}
                          className={`w-full text-right py-2 px-3 rounded-lg transition-colors flex items-center gap-2 ${
                            activeSection === section.id
                              ? 'bg-accent/10 text-accent font-medium'
                              : 'text-gray-600 dark:text-gray-400'
                          }`}
                        >
                          <span className="w-6 h-6 rounded-full bg-gray-100 dark:bg-slate-600 text-xs flex items-center justify-center shrink-0">
                            {index + 1}
                          </span>
                          {section.title}
                        </button>
                      ))}
                    </nav>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Main Content */}
          <main ref={contentRef} className="flex-1 min-w-0">
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-gray-100 dark:border-slate-700 overflow-hidden">
              <div className="p-6 md:p-10 lg:p-12 space-y-12">

                {/* Section 1: Introduction */}
                <section id="section-1" ref={registerRef('section-1')} className="scroll-mt-24">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b-2 border-accent flex items-center gap-3">
                    <Shield className="text-accent" size={28} />
                    {t.sections.intro.title}
                  </h2>

                  <div className="bg-accent/5 rounded-xl p-6 mb-6 border border-accent/20">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-4">{t.sections.intro.controller.title}</h3>
                    <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start gap-3">
                        <MapPin size={18} className="text-accent mt-0.5 shrink-0" />
                        <span>{t.sections.intro.controller.businessName}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <MapPin size={18} className="text-accent mt-0.5 shrink-0" />
                        <span>{t.sections.intro.controller.owner}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <MapPin size={18} className="text-accent mt-0.5 shrink-0" />
                        <span>{t.sections.intro.controller.address}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Mail size={18} className="text-accent mt-0.5 shrink-0" />
                        <a href="mailto:info@anton-aluminum.com" className="text-accent hover:underline">
                          {t.sections.intro.controller.email}
                        </a>
                      </li>
                      <li className="flex items-start gap-3">
                        <Globe2 size={18} className="text-accent mt-0.5 shrink-0" />
                        <a href="https://anton-aluminum.co.il" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                          {t.sections.intro.controller.website}
                        </a>
                      </li>
                    </ul>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border-l-4 border-accent">
                    {t.sections.intro.legalBasis}
                  </p>
                </section>

                {/* Section 2: Data Collected */}
                <section id="section-2" ref={registerRef('section-2')} className="scroll-mt-24">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b-2 border-accent">
                    {t.sections.dataCollected.title}
                  </h2>

                  {/* Direct Data */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <Send className="text-accent" size={20} />
                      {t.sections.dataCollected.directData.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {t.sections.dataCollected.directData.description}
                    </p>
                    <ul className="space-y-2">
                      {t.sections.dataCollected.directData.items.map((item, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                          <span className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Auto Data */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      {t.sections.dataCollected.autoData.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {t.sections.dataCollected.autoData.description}
                    </p>
                    <ul className="space-y-2 mb-4">
                      {t.sections.dataCollected.autoData.items.map((item, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                          <span className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border border-yellow-200 dark:border-yellow-800">
                      <p className="text-yellow-800 dark:text-yellow-200 text-sm flex items-start gap-2">
                        <AlertTriangle size={18} className="shrink-0 mt-0.5" />
                        {t.sections.dataCollected.autoData.ipNote}
                      </p>
                    </div>
                  </div>

                  {/* Third Party Data */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      {t.sections.dataCollected.thirdPartyData.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {t.sections.dataCollected.thirdPartyData.description}
                    </p>
                    <div className="space-y-3">
                      {t.sections.dataCollected.thirdPartyData.tools.map((tool, index) => (
                        <div key={index} className="bg-gray-50 dark:bg-slate-700 rounded-lg p-4">
                          <h4 className="font-bold text-gray-900 dark:text-white">{tool.name}</h4>
                          <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{tool.data}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Section 3: Purposes */}
                <section id="section-3" ref={registerRef('section-3')} className="scroll-mt-24">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b-2 border-accent">
                    {t.sections.purposes.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">{t.sections.purposes.intro}</p>

                  <div className="space-y-3">
                    {t.sections.purposes.items.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start justify-between gap-4 p-4 bg-gray-50 dark:bg-slate-700 rounded-lg"
                      >
                        <span className="text-gray-700 dark:text-gray-300">{item.purpose}</span>
                        <span
                          className={`shrink-0 px-3 py-1 rounded-full text-xs font-medium ${
                            item.basisType === 'consent'
                              ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                              : 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                          }`}
                        >
                          {item.basis}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Section 4: Recipients */}
                <section id="section-4" ref={registerRef('section-4')} className="scroll-mt-24">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b-2 border-accent">
                    {t.sections.recipients.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">{t.sections.recipients.intro}</p>

                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-100 dark:bg-slate-700">
                          <th className="p-3 text-right text-sm font-semibold text-gray-900 dark:text-white">Recipient</th>
                          <th className="p-3 text-right text-sm font-semibold text-gray-900 dark:text-white">Country</th>
                          <th className="p-3 text-right text-sm font-semibold text-gray-900 dark:text-white">Purpose</th>
                        </tr>
                      </thead>
                      <tbody>
                        {t.sections.recipients.recipients.map((recipient, index) => (
                          <tr key={index} className="border-b border-gray-100 dark:border-slate-600">
                            <td className="p-3 text-gray-700 dark:text-gray-300">{recipient.name}</td>
                            <td className="p-3 text-gray-700 dark:text-gray-300">{recipient.country}</td>
                            <td className="p-3 text-gray-600 dark:text-gray-400 text-sm">{recipient.purpose}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 border border-red-200 dark:border-red-800">
                    <p className="text-red-800 dark:text-red-200 font-medium flex items-center gap-2">
                      <Lock size={18} />
                      {t.sections.recipients.noSelling}
                    </p>
                  </div>
                </section>

                {/* Section 5: Transfers */}
                <section id="section-5" ref={registerRef('section-5')} className="scroll-mt-24">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b-2 border-accent">
                    {t.sections.transfers.title}
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{t.sections.transfers.intro}</p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{t.sections.transfers.usaNote}</p>
                  <p className="text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-slate-700 rounded-lg p-4">
                    {t.sections.transfers.safeguards}
                  </p>
                </section>

                {/* Section 6: Retention */}
                <section id="section-6" ref={registerRef('section-6')} className="scroll-mt-24">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b-2 border-accent">
                    {t.sections.retention.title}
                  </h2>

                  <div className="space-y-3">
                    {t.sections.retention.items.map((item, index) => (
                      <div
                        key={index}
                        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-4 bg-gray-50 dark:bg-slate-700 rounded-lg"
                      >
                        <span className="font-medium text-gray-900 dark:text-white">{item.type}</span>
                        <span className="text-gray-600 dark:text-gray-400">{item.period}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Section 7: Consequences */}
                <section id="section-7" ref={registerRef('section-7')} className="scroll-mt-24">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b-2 border-accent">
                    {t.sections.consequences.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">{t.sections.consequences.intro}</p>

                  <div className="space-y-4">
                    <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4 border border-orange-200 dark:border-orange-800">
                      <p className="text-orange-800 dark:text-orange-200">
                        <strong>• {t.sections.consequences.contactForm}</strong>
                      </p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
                      <p className="text-green-800 dark:text-green-200">
                        <strong>• {t.sections.consequences.cookies}</strong>
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 8: Rights */}
                <section id="section-8" ref={registerRef('section-8')} className="scroll-mt-24">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b-2 border-accent">
                    {t.sections.rights.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">{t.sections.rights.intro}</p>

                  <div className="grid gap-4 mb-6">
                    {t.sections.rights.items.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-slate-700 rounded-lg"
                      >
                        <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                          <Scale size={16} className="text-accent" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 dark:text-white">{item.right}</h4>
                          <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-accent/5 rounded-xl p-6 border border-accent/20">
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      <strong>{t.sections.rights.howToExercise}</strong>
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">{t.sections.rights.responseTime}</p>
                  </div>
                </section>

                {/* Section 9: Complaint */}
                <section id="section-9" ref={registerRef('section-9')} className="scroll-mt-24">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b-2 border-accent">
                    {t.sections.complaint.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">{t.sections.complaint.intro}</p>

                  <div className="bg-gray-50 dark:bg-slate-700 rounded-xl p-6">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-4">
                      {t.sections.complaint.authority.name}
                    </h4>
                    <div className="space-y-3 text-gray-700 dark:text-gray-300">
                      <p className="flex items-center gap-2">
                        <MapPin size={18} className="text-accent" />
                        {t.sections.complaint.authority.address}
                      </p>
                      <p className="flex items-center gap-2">
                        <Globe2 size={18} className="text-accent" />
                        {t.sections.complaint.authority.website}
                        <a
                          href={`https://${t.sections.complaint.authority.websiteUrl}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent hover:underline flex items-center gap-1"
                        >
                          {t.sections.complaint.authority.websiteUrl}
                          <ExternalLink size={14} />
                        </a>
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 10: Cookies */}
                <section id="section-10" ref={registerRef('section-10')} className="scroll-mt-24">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b-2 border-accent flex items-center gap-3">
                    <Cookie className="text-accent" size={28} />
                    {t.sections.cookies.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">{t.sections.cookies.intro}</p>

                  <div className="space-y-4 mb-6">
                    {t.sections.cookies.categories.map((category, index) => (
                      <div
                        key={index}
                        className="p-4 bg-gray-50 dark:bg-slate-700 rounded-lg border border-gray-100 dark:border-slate-600"
                      >
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <h4 className="font-bold text-gray-900 dark:text-white">{category.name}</h4>
                          <span
                            className={`shrink-0 px-2 py-0.5 rounded text-xs font-medium ${
                              category.canDisable.includes('לא') || category.canDisable.includes('Cannot')
                                ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
                                : 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                            }`}
                          >
                            {category.canDisable}
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">{category.description}</p>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/#cookie-preferences"
                    className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-medium"
                  >
                    {t.sections.cookies.manageLink}
                    <ExternalLink size={16} />
                  </Link>
                </section>

                {/* Section 11: AI */}
                <section id="section-11" ref={registerRef('section-11')} className="scroll-mt-24">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b-2 border-accent">
                    {t.sections.ai.title}
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-slate-700 rounded-lg p-4">
                    {t.sections.ai.statement}
                  </p>
                </section>

                {/* Section 12: Security */}
                <section id="section-12" ref={registerRef('section-12')} className="scroll-mt-24">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b-2 border-accent flex items-center gap-3">
                    <Lock className="text-accent" size={28} />
                    {t.sections.security.title}
                  </h2>

                  <ul className="space-y-3 mb-6">
                    {t.sections.security.measures.map((measure, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                        <Shield size={18} className="text-accent mt-0.5 shrink-0" />
                        {measure}
                      </li>
                    ))}
                  </ul>

                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                    <p className="text-blue-800 dark:text-blue-200">
                      <strong>{t.sections.security.breachProcedure}</strong>
                    </p>
                  </div>
                </section>

                {/* Section 13: Updates */}
                <section id="section-13" ref={registerRef('section-13')} className="scroll-mt-24">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b-2 border-accent">
                    {t.sections.updates.title}
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{t.sections.updates.statement}</p>
                  <p className="text-gray-600 dark:text-gray-400">{t.sections.updates.notificationMethod}</p>
                </section>

              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
