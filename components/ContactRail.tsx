import { Link } from 'react-router-dom';
import { Phone, Mail, CalendarDays } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getChrome } from '../i18n/siteChrome';
import { CONTACT_CONFIG, WHATSAPP_NUMBER } from '../constants';

const WhatsAppIcon = ({ size = 22 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
    <path d="M17.5 14.4c-.3-.2-1.8-.9-2-1-.3-.1-.5-.2-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5 2.5 1 3 .8 3.6.8.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.4zM12 21.8a9.9 9.9 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.9 9.9 0 1 1 12 21.8zM20.5 3.5A11.8 11.8 0 0 0 1.9 17.8L.2 24l6.4-1.7A11.8 11.8 0 0 0 24 12c0-3.2-1.2-6.2-3.5-8.5z" />
  </svg>
);

/**
 * Persistent contact affordances.
 * - Desktop: vertical rail pinned to the left edge (call / WhatsApp / details).
 * - Mobile: sticky bottom bar (book meeting / leave details / WhatsApp / call).
 * Replaces the old single WhatsApp bubble.
 */
export const ContactRail = () => {
  const { language } = useLanguage();
  const r = getChrome(language).rail;
  const wa = `https://wa.me/${WHATSAPP_NUMBER}`;

  const railBtn =
    'w-12 h-12 rounded-full flex items-center justify-center shadow-lg ring-1 ring-black/10 transition-transform hover:scale-105';

  return (
    <>
      {/* Desktop rail */}
      <div className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-30 flex-col gap-3">
        <a href={`tel:${CONTACT_CONFIG.phone}`} aria-label={r.callLabel} title={r.call} className={`${railBtn} bg-white dark:bg-ink-800 text-ink-950 dark:text-white`}>
          <Phone size={20} />
        </a>
        <a href={wa} target="_blank" rel="noopener noreferrer" aria-label={r.whatsappLabel} title={r.whatsapp} className={`${railBtn} bg-[#1E7A4C] text-white`}>
          <WhatsAppIcon />
        </a>
        <Link to="/contact" aria-label={r.leaveDetails} title={r.leaveDetails} className={`${railBtn} bg-accent-hover text-white`}>
          <Mail size={20} />
        </Link>
      </div>

      {/* Mobile sticky bottom bar */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-30 bg-white/95 dark:bg-ink-950/95 backdrop-blur border-t border-ink-300 dark:border-ink-800 px-3 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] flex items-center gap-2">
        <Link to="/contact" className="flex-1 h-12 rounded-full bg-accent-hover text-white font-bold flex items-center justify-center gap-1.5 text-sm whitespace-nowrap">
          <CalendarDays size={16} aria-hidden="true" className="hidden min-[400px]:block" />
          {r.bookMeeting}
        </Link>
        <Link to="/contact#form" className="flex-1 h-12 rounded-full border-2 border-ink-950 dark:border-white text-ink-950 dark:text-white font-bold flex items-center justify-center text-sm whitespace-nowrap">
          {r.leaveDetails}
        </Link>
        <a href={wa} target="_blank" rel="noopener noreferrer" aria-label={r.whatsappLabel} className="w-12 h-12 shrink-0 rounded-full bg-[#1E7A4C] text-white flex items-center justify-center">
          <WhatsAppIcon size={20} />
        </a>
        <a href={`tel:${CONTACT_CONFIG.phone}`} aria-label={r.callLabel} className="w-12 h-12 shrink-0 rounded-full border-2 border-ink-950 dark:border-white text-ink-950 dark:text-white flex items-center justify-center">
          <Phone size={18} />
        </a>
      </div>
    </>
  );
};
