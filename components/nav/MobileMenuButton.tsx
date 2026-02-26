import { RefObject } from 'react';
import { Menu, X } from 'lucide-react';
import { LanguageSwitcher } from '../LanguageSwitcher';
import { Language } from '../../i18n/languages';

interface MobileMenuButtonProps {
  isOpen: boolean;
  scrolled: boolean;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onToggle: () => void;
  buttonRef: RefObject<HTMLButtonElement | null>;
}

export const MobileMenuButton = ({
  isOpen,
  scrolled,
  language,
  onLanguageChange,
  onToggle,
  buttonRef,
}: MobileMenuButtonProps) => {
  return (
    <div className="lg:hidden flex items-center gap-4">
      <LanguageSwitcher
        currentLanguage={language}
        onLanguageChange={onLanguageChange}
        scrolled={scrolled}
      />

      <button
        ref={buttonRef}
        onClick={onToggle}
        className={`p-2 rounded-md ${scrolled ? 'text-gray-900 dark:text-white' : 'text-gray-900 lg:text-white'}`}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
    </div>
  );
};
