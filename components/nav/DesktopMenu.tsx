import { ThemeToggle } from '../ThemeToggle';
import { LanguageSwitcher } from '../LanguageSwitcher';
import { NavLink } from './NavLink';
import { CallButton } from './CallButton';
import { Language } from '../../i18n/languages';

interface NavItem {
  path: string;
  label: string;
}

interface DesktopMenuProps {
  navItems: NavItem[];
  scrolled: boolean;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  callNowLabel: string;
  phoneNumber: string;
  spaceClass: string;
}

export const DesktopMenu = ({
  navItems,
  scrolled,
  language,
  onLanguageChange,
  callNowLabel,
  phoneNumber,
  spaceClass,
}: DesktopMenuProps) => {
  return (
    <div className={`hidden lg:flex items-center space-x-8 ${spaceClass}`}>
      {navItems.map((link) => (
        <NavLink
          key={link.path}
          path={link.path}
          label={link.label}
          scrolled={scrolled}
        />
      ))}

      <LanguageSwitcher
        currentLanguage={language}
        onLanguageChange={onLanguageChange}
        scrolled={scrolled}
      />

      <ThemeToggle />

      <CallButton label={callNowLabel} phoneNumber={phoneNumber} />
    </div>
  );
};
