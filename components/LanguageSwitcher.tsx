import React, { useState, useRef, useEffect } from 'react';
import { Languages, Check } from 'lucide-react';
import { Language, LANGUAGE_NAMES, LANGUAGE_SHORT_CODES } from '../i18n';

interface LanguageSwitcherProps {
  currentLanguage: Language;
  onLanguageChange: (language: Language) => void;
  scrolled?: boolean;
}

/**
 * LanguageSwitcher Component
 *
 * A dropdown component for selecting between EN, HE, and AR languages.
 * Fully keyboard accessible with proper ARIA attributes.
 */
export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  currentLanguage,
  onLanguageChange,
  scrolled = false
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Available languages
  const languages: Language[] = [Language.EN, Language.HE, Language.AR];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
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
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsOpen(false);
      buttonRef.current?.focus();
    } else if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setIsOpen(!isOpen);
    }
  };

  const handleLanguageSelect = (language: Language) => {
    onLanguageChange(language);
    setIsOpen(false);
    buttonRef.current?.focus();
  };

  const baseClasses = scrolled
    ? 'text-gray-800 dark:text-gray-200'
    : 'text-white';

  const dropdownClasses = `
    absolute top-full mt-2 right-0
    bg-white dark:bg-slate-800
    border border-gray-200 dark:border-slate-700
    rounded-lg shadow-lg
    overflow-hidden
    z-50
    min-w-[140px]
    ${isOpen ? 'block' : 'hidden'}
  `;

  return (
    <div className="relative">
      {/* Language Button */}
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        className={`
          flex items-center gap-1.5 font-medium transition-colors
          ${baseClasses} hover:text-accent
          focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2
          px-2 py-1 rounded
        `}
        aria-label={`Select language. Current: ${LANGUAGE_NAMES[currentLanguage]}`}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <Languages size={18} />
        <span className="text-sm font-bold">
          {LANGUAGE_SHORT_CODES[currentLanguage]}
        </span>
      </button>

      {/* Dropdown Menu */}
      <div
        ref={dropdownRef}
        className={dropdownClasses}
        role="listbox"
        aria-label="Select language"
      >
        {languages.map((lang) => (
          <button
            key={lang}
            onClick={() => handleLanguageSelect(lang)}
            className={`
              w-full flex items-center justify-between gap-2
              px-4 py-2.5 text-sm font-medium
              transition-colors
              hover:bg-gray-100 dark:hover:bg-slate-700
              focus:outline-none focus:bg-gray-100 dark:focus:bg-slate-700
              ${lang === currentLanguage
                ? 'text-accent bg-gray-50 dark:bg-slate-700/50'
                : 'text-gray-700 dark:text-gray-300'
              }
            `}
            role="option"
            aria-selected={lang === currentLanguage}
          >
            <span>{LANGUAGE_NAMES[lang]}</span>
            {lang === currentLanguage && (
              <Check size={16} className="text-accent" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
