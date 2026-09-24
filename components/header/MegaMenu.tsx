import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { getChrome } from '../../i18n/siteChrome';
import { CATEGORY_IMAGE } from '../../constants';

interface Category {
  id: string;
  label: string;
  title: string;
  description: string;
}
interface ProductItem {
  id: string;
  category: string;
  title: string;
}

/**
 * Desktop category navigation. Each product category is a top-level item;
 * hovering, focusing or clicking opens a full-width panel with that
 * category's products, a link to the filtered catalog and a promo image.
 * Esc closes and returns focus to the trigger.
 */
export const MegaMenu = () => {
  const { content, language } = useLanguage();
  const m = getChrome(language).menu;
  const [open, setOpen] = useState<string | null>(null);
  const closeTimer = useRef<number | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  // Short labels (שערים, גדרות…) for the nav; long title + description for the panel
  const categories: Category[] = content.products.categories
    .filter((c: { id: string }) => c.id !== 'all')
    .map((c: { id: string; label: string }) => {
      const svc = content.servicesList.find((s: { id: string }) => s.id === c.id);
      return { id: c.id, label: c.label, title: svc?.title ?? c.label, description: svc?.description ?? '' };
    });
  const products: ProductItem[] = content.productsList;

  const cancelClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
  };
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = window.setTimeout(() => setOpen(null), 150);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        triggerRefs.current[open]?.focus();
        setOpen(null);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(null);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, [open]);

  const active = categories.find((c) => c.id === open);
  const activeProducts = active ? products.filter((p) => p.category === active.id) : [];

  return (
    <div ref={wrapRef} className="hidden lg:flex flex-1 justify-center self-stretch" onMouseLeave={scheduleClose} onMouseEnter={cancelClose}>
      <nav aria-label={m.productsNav} className="flex items-stretch">
        <ul className="flex items-stretch gap-1 xl:gap-4">
          {categories.map((cat) => {
            const isOpen = open === cat.id;
            return (
              <li key={cat.id} className="flex items-stretch">
                <button
                  ref={(el) => { triggerRefs.current[cat.id] = el; }}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls="mega-panel"
                  onMouseEnter={() => { cancelClose(); setOpen(cat.id); }}
                  onClick={() => setOpen(isOpen ? null : cat.id)}
                  className={`flex items-center gap-1 px-2 whitespace-nowrap text-[15px] xl:text-base font-medium border-b-[3px] transition-colors ${
                    isOpen
                      ? 'border-accent text-accent-hover dark:text-accent'
                      : 'border-transparent text-ink-900 dark:text-ink-100 hover:text-accent-hover dark:hover:text-accent'
                  }`}
                >
                  {cat.label}
                  <ChevronDown size={14} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>
              </li>
            );
          })}
          <li className="flex items-stretch">
            <Link
              to="/products"
              className="flex items-center px-2 whitespace-nowrap text-[15px] xl:text-base font-medium border-b-[3px] border-transparent text-ink-900 dark:text-ink-100 hover:text-accent-hover dark:hover:text-accent"
            >
              {m.fullCatalog}
            </Link>
          </li>
        </ul>
      </nav>

      {active && (
        <div
          id="mega-panel"
          className="absolute inset-x-0 top-full bg-white dark:bg-ink-900 border-y border-ink-300 dark:border-ink-800 shadow-xl"
          onMouseEnter={cancelClose}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex gap-10">
            <div className="flex-1 grid grid-cols-3 gap-x-10 gap-y-2 content-start">
              <Link
                to={`/products?category=${active.id}`}
                onClick={() => setOpen(null)}
                className="col-span-3 mb-2 pb-2 border-b border-ink-300 dark:border-ink-700 font-display text-lg font-bold text-ink-950 dark:text-white hover:text-accent-hover"
              >
                {active.title}
              </Link>
              {activeProducts.map((p) => (
                <Link
                  key={p.id}
                  to={`/products?category=${active.id}`}
                  onClick={() => setOpen(null)}
                  className="py-1.5 text-ink-800 dark:text-ink-300 hover:text-accent-hover dark:hover:text-accent"
                >
                  {p.title}
                </Link>
              ))}
              <Link
                to={`/products?category=${active.id}`}
                onClick={() => setOpen(null)}
                className="col-span-3 mt-3 font-semibold text-accent-hover dark:text-accent underline underline-offset-4"
              >
                {m.allIn}
              </Link>
            </div>
            <div className="w-72 shrink-0 flex flex-col gap-3">
              <img
                src={CATEGORY_IMAGE[active.id as keyof typeof CATEGORY_IMAGE]}
                alt=""
                className="h-44 w-full object-cover rounded-lg"
                loading="lazy"
              />
              <p className="text-sm text-ink-700 dark:text-ink-300 line-clamp-3">{active.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
