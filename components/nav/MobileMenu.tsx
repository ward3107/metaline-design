import { RefObject, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { getChrome } from '../../i18n/siteChrome';
import { ThemeToggle } from '../ThemeToggle';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  menuRef: RefObject<HTMLDivElement | null>;
}

/**
 * Mobile drawer: product categories as accordions (each lists its products
 * and links to the filtered catalog), then the company pages.
 */
export const MobileMenu = ({ isOpen, onClose, menuRef }: MobileMenuProps) => {
  const { content, language } = useLanguage();
  const chrome = getChrome(language);
  const [expanded, setExpanded] = useState<string | null>(null);

  const pages = [
    { to: '/', label: chrome.utility.home },
    { to: '/about', label: chrome.utility.about },
    { to: '/gallery', label: chrome.utility.gallery },
    { to: '/magazine', label: chrome.utility.magazine },
    { to: '/contact', label: chrome.utility.contact },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={menuRef}
          id="mobile-menu"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-white dark:bg-ink-900 border-t border-ink-300 dark:border-ink-800 shadow-xl overflow-y-auto max-h-[calc(100dvh-64px)]"
        >
          <nav aria-label={chrome.menu.products} className="px-4 pt-2">
            <ul>
              {content.servicesList.map((cat: { id: string; title: string }) => {
                const open = expanded === cat.id;
                const items = content.productsList.filter((p: { category: string }) => p.category === cat.id);
                return (
                  <li key={cat.id} className="border-b border-ink-100 dark:border-ink-800">
                    <button
                      type="button"
                      aria-expanded={open}
                      onClick={() => setExpanded(open ? null : cat.id)}
                      className="w-full flex items-center justify-between py-4 text-base font-semibold text-ink-950 dark:text-ink-50"
                    >
                      {cat.title}
                      <ChevronDown size={18} className={`transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
                    </button>
                    {open && (
                      <ul className="pb-3 ps-3 flex flex-col gap-1">
                        {items.map((p: { id: string; title: string }) => (
                          <li key={p.id}>
                            <Link to={`/products?category=${cat.id}`} onClick={onClose} className="block py-2 text-ink-700 dark:text-ink-300">
                              {p.title}
                            </Link>
                          </li>
                        ))}
                        <li>
                          <Link to={`/products?category=${cat.id}`} onClick={onClose} className="block py-2 font-semibold text-accent-hover dark:text-accent underline underline-offset-4">
                            {chrome.menu.allIn}
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>
                );
              })}
              <li className="border-b border-ink-100 dark:border-ink-800">
                <Link to="/products" onClick={onClose} className="block py-4 text-base font-semibold text-ink-950 dark:text-ink-50">
                  {chrome.menu.fullCatalog}
                </Link>
              </li>
            </ul>
          </nav>
          <nav aria-label={chrome.menu.pages} className="px-4 py-4 bg-ink-50 dark:bg-ink-950">
            <ul className="grid grid-cols-2 gap-x-4">
              {pages.map((p) => (
                <li key={p.to}>
                  <Link to={p.to} onClick={onClose} className="block py-3 text-ink-800 dark:text-ink-300">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="pt-2"><ThemeToggle /></div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
