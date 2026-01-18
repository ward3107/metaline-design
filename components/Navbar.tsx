import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSwitcher } from './LanguageSwitcher';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const { content, language, setLanguage } = useLanguage();
  
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
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
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navClasses = `fixed w-full z-40 transition-all duration-300 ${
    scrolled 
      ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-md py-2' 
      : 'bg-transparent py-4'
  }`;

  const linkClasses = (path: string) => `
    text-lg font-medium transition-colors duration-200
    ${location.pathname === path 
      ? 'text-accent' 
      : scrolled 
        ? 'text-gray-800 dark:text-gray-200 hover:text-accent' 
        : 'text-gray-800 lg:text-white hover:text-accent'}
  `;

  // Handle spacing based on direction
  const spaceClass = language === 'he' ? 'space-x-reverse' : '';

  return (
    <nav className={navClasses}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link to="/" className={`flex items-center space-x-2 ${spaceClass}`} onClick={() => setIsOpen(false)}>
             <div className="w-10 h-10 bg-accent rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
             </div>
             <span className={`text-2xl font-bold tracking-tight ${scrolled ? 'text-gray-900 dark:text-white' : 'text-gray-900 lg:text-white'}`}>
               {content.companyName}
             </span>
          </Link>

          {/* Desktop Menu */}
          <div className={`hidden lg:flex items-center space-x-8 ${spaceClass}`}>
            {content.nav.map((link: { path: string; label: string }) => (
              <Link
                key={link.path}
                to={link.path}
                className={linkClasses(link.path)}
              >
                {link.label}
              </Link>
            ))}

            {/* Language Switcher */}
            <LanguageSwitcher
              currentLanguage={language}
              onLanguageChange={setLanguage}
              scrolled={scrolled}
            />

            {/* Theme Toggle */}
            <ThemeToggle />

            <a 
              href="tel:*5555" 
              className="bg-accent hover:bg-accent-hover text-white px-6 py-2 rounded-full font-medium transition-colors flex items-center gap-2"
            >
              <Phone size={18} />
              <span>{content.buttons.callNow}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <LanguageSwitcher
              currentLanguage={language}
              onLanguageChange={setLanguage}
              scrolled={scrolled}
            />

            <button
              ref={buttonRef}
              onClick={toggleMenu}
              className={`p-2 rounded-md ${scrolled ? 'text-gray-900 dark:text-white' : 'text-gray-900 lg:text-white'}`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-slate-800 border-t border-gray-100 dark:border-slate-700 shadow-xl overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {content.nav.map((link: { path: string; label: string }) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-4 text-base font-medium border-b border-gray-50 dark:border-slate-700 ${
                    location.pathname === link.path
                      ? 'text-accent bg-gray-50 dark:bg-slate-700/50'
                      : 'text-gray-600 dark:text-gray-300 hover:text-accent hover:bg-gray-50 dark:hover:bg-slate-700'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4">
                 <a 
                  href="tel:*5555" 
                  className="w-full bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                >
                  <Phone size={20} />
                  <span>{content.buttons.callNow}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};