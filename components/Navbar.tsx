import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { CONTACT_CONFIG } from '../constants';
import { Logo, MobileMenu, MobileMenuButton, CallButton } from './nav';
import { UtilityBar } from './header/UtilityBar';
import { MegaMenu } from './header/MegaMenu';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeToggle } from './ThemeToggle';

/**
 * Site header: dark utility bar (desktop) + main bar with logo, product
 * category mega menu, language/theme and call CTA. Sticky, so pages no
 * longer need to offset content for a fixed header.
 */
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { content, language, setLanguage } = useLanguage();
  const { pathname } = useLocation();

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close the mobile drawer on navigation
  useEffect(() => setIsOpen(false), [pathname]);

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
  const spaceClass = language === 'he' ? 'space-x-reverse' : '';

  return (
    <header className={`sticky top-0 z-40 w-full transition-shadow ${scrolled ? 'shadow-md' : ''}`}>
      <UtilityBar />
      <div className="relative bg-white/95 dark:bg-ink-950/95 backdrop-blur-md border-b border-ink-300 dark:border-ink-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-stretch h-16 lg:h-[72px] gap-6">
            <div className="flex items-center">
              <Logo companyName={content.companyName} scrolled={scrolled} spaceClass={spaceClass} onClick={closeMenu} />
            </div>

            <MegaMenu />

            <div className="hidden lg:flex items-center gap-2">
              <LanguageSwitcher currentLanguage={language} onLanguageChange={setLanguage} scrolled={scrolled} />
              <ThemeToggle />
              <CallButton label={content.buttons.callNow} phoneNumber={CONTACT_CONFIG.phone} />
            </div>

            <div className="flex items-center lg:hidden">
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
        </div>

        <MobileMenu isOpen={isOpen} onClose={closeMenu} menuRef={menuRef} />
      </div>
    </header>
  );
};
