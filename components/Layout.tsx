import { useState, useEffect, ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ArrowUp } from 'lucide-react';
import { WhatsAppWidget } from './WhatsAppWidget';
// AccessibilityWidget is now loaded via standalone JS (accessibility-widget.js)
// for IS 5568 / WCAG 2.0 AA compliance
import { CookieBanner } from './CookieBanner';
import { PlaceholderBanner } from './PlaceholderBanner';
import { useLanguage } from '../context/LanguageContext';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const { direction, language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen relative" dir={direction}>
       <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:p-4 focus:bg-white focus:text-black focus:top-0 focus:right-0">
          {language === 'he' ? 'דלג לתוכן המרכזי' : 'Skip to main content'}
       </a>

      <Navbar />
      <main id="main-content" className="flex-grow pt-16">
        {children}
      </main>
      <Footer />

      <WhatsAppWidget />
      {/* Accessibility Widget loaded via standalone JS in index.html */}
      <CookieBanner privacyPolicyUrl="/privacy-policy" />
      <PlaceholderBanner />

      {showTopBtn && (
        <button
          onClick={goToTop}
          className="fixed bottom-44 left-4 md:bottom-44 md:left-6 p-3 rounded-full bg-white/95 dark:bg-ink-800 dark:text-white text-black ring-1 ring-black/10 dark:ring-white/10 shadow-lg hover:shadow-xl transition-shadow z-50"
          aria-label="Back to top"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
};
