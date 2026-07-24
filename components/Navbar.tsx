import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CONTACT_CONFIG } from '../constants';
import {
  Logo,
  DesktopMenu,
  MobileMenu,
  MobileMenuButton,
} from './nav';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { content, language, setLanguage } = useLanguage();

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  // Always solid background. The "transparent on hero" look caused white
  // navbar text to disappear on inner pages that don't have a dark hero.
  const navClasses = `fixed w-full z-40 transition-all duration-300 ${
    scrolled
      ? 'bg-white/95 dark:bg-ink-950/90 backdrop-blur-md border-b border-ink-200 dark:border-ink-800 py-2 shadow-sm'
      : 'bg-white/95 dark:bg-ink-950/90 backdrop-blur-sm py-4'
  }`;

  const spaceClass = language === 'he' ? 'space-x-reverse' : '';

  return (
    <nav className={navClasses}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo
            companyName={content.companyName}
            scrolled={scrolled}
            spaceClass={spaceClass}
            onClick={closeMenu}
          />

          <DesktopMenu
            navItems={content.nav}
            scrolled={scrolled}
            language={language}
            onLanguageChange={setLanguage}
            callNowLabel={content.buttons.callNow}
            phoneNumber={CONTACT_CONFIG.phone}
            spaceClass={spaceClass}
          />

          <MobileMenuButton
            isOpen={isOpen}
            scrolled={scrolled}
            language={language}
            onLanguageChange={setLanguage}
            onToggle={() => setIsOpen(!isOpen)}
            buttonRef={buttonRef}
          />
        </div>
      </div>

      <MobileMenu
        isOpen={isOpen}
        navItems={content.nav}
        onClose={closeMenu}
        menuRef={menuRef}
        callNowLabel={content.buttons.callNow}
        phoneNumber={CONTACT_CONFIG.phone}
      />
    </nav>
  );
};
