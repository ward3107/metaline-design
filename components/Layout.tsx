import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ArrowUp } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { WhatsAppWidget } from './WhatsAppWidget';
import { AccessibilityWidget } from './AccessibilityWidget';
import { useLanguage } from '../context/LanguageContext';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [showTopBtn, setShowTopBtn] = React.useState(false);
  const { scrollYProgress } = useScroll();
  const { direction, language } = useLanguage();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const btnPositionClass = language === 'he' ? 'left-8' : 'right-8';

  return (
    <div className="flex flex-col min-h-screen relative" dir={direction}>
       <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:p-4 focus:bg-white focus:text-black focus:top-0 focus:right-0">
          {language === 'he' ? 'דלג לתוכן המרכזי' : 'Skip to main content'}
       </a>
       
       {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-50 origin-left rtl:origin-right"
        style={{ scaleX }}
      />
      
      <Navbar />
      <main id="main-content" className="flex-grow pt-16">
        {children}
      </main>
      <Footer />
      
      <WhatsAppWidget />
      <AccessibilityWidget />

      {showTopBtn && (
        <button
          onClick={goToTop}
          className={`fixed bottom-8 ${btnPositionClass} p-3 rounded-full bg-accent text-white shadow-lg hover:bg-accent-hover transition-all duration-300 z-50 animate-bounce`}
          aria-label="Back to top"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
};