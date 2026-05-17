import { useEffect, useState } from 'react';
import { CONTACT_CONFIG, GALLERY_ITEMS, PRODUCTS, SERVICES, WHATSAPP_NUMBER } from '../constants';
import {
  PLACEHOLDER_EMAIL,
  PLACEHOLDER_PHONE,
  PLACEHOLDER_WHATSAPP,
  isPlaceholderImage,
} from '../utils/placeholders';

// Dev-only banner: surfaces every TODO that would embarrass us at launch.
// Renders nothing in production builds.
export const PlaceholderBanner = () => {
  const [collapsed, setCollapsed] = useState(false);

  const issues: string[] = [];
  if (import.meta.env.DEV) {
    if (CONTACT_CONFIG.phone === PLACEHOLDER_PHONE) issues.push('phone');
    if (CONTACT_CONFIG.email === PLACEHOLDER_EMAIL) issues.push('email');
    if (WHATSAPP_NUMBER === PLACEHOLDER_WHATSAPP) issues.push('WhatsApp number');

    const placeholderImageCount = [
      ...SERVICES.map((s) => s.image),
      ...PRODUCTS.map((p) => p.image),
      ...GALLERY_ITEMS.map((g) => g.image),
    ].filter(isPlaceholderImage).length;
    if (placeholderImageCount > 0) issues.push(`${placeholderImageCount} placeholder images`);

    if (
      typeof window !== 'undefined' &&
      (window as { __CONTACT_FORM_BACKEND__?: string }).__CONTACT_FORM_BACKEND__ !== 'configured'
    ) {
      issues.push('contact form has no backend');
    }
  }

  useEffect(() => {
    if (!import.meta.env.DEV || issues.length === 0) return;
    // eslint-disable-next-line no-console
    console.warn('[metaline-design] Pre-launch TODOs:', issues);
  }, [issues.length]);

  if (!import.meta.env.DEV || issues.length === 0) return null;

  return (
    <div
      style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 9999 }}
      className="bg-amber-500 text-black text-xs sm:text-sm font-mono shadow-lg"
      role="status"
      aria-label="Development placeholder banner"
    >
      <div className="container mx-auto px-4 py-2 flex items-center justify-between gap-3">
        <span dir="ltr" className="truncate">
          ⚠ DEV: replace before launch — {collapsed ? `${issues.length} TODOs` : issues.join(' · ')}
        </span>
        <button
          onClick={() => setCollapsed((c) => !c)}
          className="shrink-0 px-2 py-0.5 bg-black/10 hover:bg-black/20 rounded"
          aria-label={collapsed ? 'Expand placeholder list' : 'Collapse placeholder list'}
        >
          {collapsed ? '▲' : '▼'}
        </button>
      </div>
    </div>
  );
};
