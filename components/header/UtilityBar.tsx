import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { getChrome } from '../../i18n/siteChrome';

/**
 * Thin dark bar above the main header (desktop only): company pages on one
 * side, quote CTA + search on the other.
 */
export const UtilityBar = () => {
  const { language } = useLanguage();
  const u = getChrome(language).utility;

  const links = [
    { to: '/', label: u.home },
    { to: '/about', label: u.about },
    { to: '/gallery', label: u.gallery },
    { to: '/magazine', label: u.magazine },
    { to: '/magazine#pros', label: u.professionals },
    { to: '/contact', label: u.contact },
  ];

  return (
    <div className="hidden lg:block bg-ink-950 text-ink-100 text-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-between">
        <nav aria-label={u.utilityNav}>
          <ul className="flex items-center gap-6">
            {links.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-white hover:underline underline-offset-4">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="rounded-full bg-accent hover:bg-accent-hover text-white font-semibold px-4 py-1"
          >
            {u.getQuote}
          </Link>
          <Link
            to="/products"
            aria-label={language === 'he' ? 'חיפוש מוצרים' : language === 'ar' ? 'بحث عن منتجات' : 'Search products'}
            className="p-1.5 rounded-full hover:bg-ink-800"
          >
            <Search size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};
