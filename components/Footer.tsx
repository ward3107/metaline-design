import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getChrome } from '../i18n/siteChrome';
import { CONTACT_CONFIG, SOCIAL_LINKS } from '../constants';
import { ARTICLES } from '../data/articles';

const legalLinksByLang: Record<string, { terms: string; refund: string; disclaimer: string; accessibility: string; privacy: string }> = {
  he: { terms: 'תנאי שימוש', refund: 'מדיניות ביטולים', disclaimer: 'הצהרת אחריות', accessibility: 'הצהרת נגישות', privacy: 'מדיניות פרטיות' },
  ar: { terms: 'شروط الاستخدام', refund: 'سياسة الإلغاء', disclaimer: 'إخلاء المسؤولية', accessibility: 'بيان الوصول', privacy: 'سياسة الخصوصية' },
  en: { terms: 'Terms of Use', refund: 'Refund Policy', disclaimer: 'Disclaimer', accessibility: 'Accessibility', privacy: 'Privacy Policy' },
};

const colTitle = 'font-display text-white text-base font-bold mb-4';
const linkCls = 'text-ink-300 hover:text-white transition-colors';

/**
 * Multi-column footer: brand + socials row, then contact / products /
 * magazine / company / legal / professionals columns, then credits.
 */
export const Footer: React.FC = () => {
  const { content, language } = useLanguage();
  const chrome = getChrome(language);
  const f = chrome.footer;
  const legal = legalLinksByLang[language] || legalLinksByLang.en;
  const topArticles = [...ARTICLES].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);
  const address = language === 'he' || language === 'ar'
    ? `${CONTACT_CONFIG.address.street}, ${CONTACT_CONFIG.address.city}`
    : `${CONTACT_CONFIG.address.streetEn}, ${CONTACT_CONFIG.address.cityEn}`;
  const days = language === 'en' ? CONTACT_CONFIG.workingHours.daysEn : CONTACT_CONFIG.workingHours.days;

  return (
    <footer className="bg-ink-950 text-ink-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-28 lg:pb-8">
        {/* Brand row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-10 border-b border-ink-800">
          <div className="flex flex-col gap-3 max-w-md">
            <Link to="/" className="flex items-center gap-2">
              <span className="w-9 h-9 bg-accent-hover rounded-sm flex items-center justify-center text-white font-bold text-lg" aria-hidden="true">A</span>
              <span className="text-2xl font-bold text-white">{content.companyName}</span>
            </Link>
            <p className="text-ink-400 leading-relaxed">{content.footer.about}</p>
          </div>
          <div className="flex gap-3">
            <a href={SOCIAL_LINKS.facebook} aria-label="Facebook" className="w-11 h-11 rounded-full border border-ink-700 flex items-center justify-center hover:bg-ink-800 text-white"><Facebook size={20} /></a>
            <a href={SOCIAL_LINKS.instagram} aria-label="Instagram" className="w-11 h-11 rounded-full border border-ink-700 flex items-center justify-center hover:bg-ink-800 text-white"><Instagram size={20} /></a>
            <a href="#" aria-label="LinkedIn" className="w-11 h-11 rounded-full border border-ink-700 flex items-center justify-center hover:bg-ink-800 text-white"><Linkedin size={20} /></a>
          </div>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10 py-12">
          <div className="lg:col-span-2">
            <h2 className={colTitle}>{f.contactTitle}</h2>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3"><MapPin size={18} className="text-accent shrink-0 mt-0.5" aria-hidden="true" /><span>{address}</span></li>
              <li className="flex items-center gap-3"><Phone size={18} className="text-accent shrink-0" aria-hidden="true" /><a href={`tel:${CONTACT_CONFIG.phone}`} dir="ltr" className={linkCls}>{CONTACT_CONFIG.phone}</a></li>
              <li className="flex items-center gap-3"><Mail size={18} className="text-accent shrink-0" aria-hidden="true" /><a href={`mailto:${CONTACT_CONFIG.email}`} className={linkCls}>{CONTACT_CONFIG.email}</a></li>
              <li className="flex items-start gap-3"><Clock size={18} className="text-accent shrink-0 mt-0.5" aria-hidden="true" /><span>{f.hours}: {days}, <span dir="ltr">{CONTACT_CONFIG.workingHours.hours}</span></span></li>
            </ul>
          </div>

          <nav aria-label={f.productsTitle}>
            <h2 className={colTitle}>{f.productsTitle}</h2>
            <ul className="flex flex-col gap-2.5">
              {content.servicesList.map((s: { id: string; title: string }) => (
                <li key={s.id}><Link to={`/products?category=${s.id}`} className={linkCls}>{s.title}</Link></li>
              ))}
            </ul>
          </nav>

          <nav aria-label={f.magazineTitle}>
            <h2 className={colTitle}>{f.magazineTitle}</h2>
            <ul className="flex flex-col gap-2.5">
              {topArticles.map((a) => (
                <li key={a.slug}><Link to={`/magazine/${a.slug}`} lang="he" className={linkCls}>{a.title}</Link></li>
              ))}
              <li><Link to="/magazine" className="text-white font-semibold hover:underline">{chrome.magazine.allArticles}</Link></li>
            </ul>
          </nav>

          <nav aria-label={f.aboutTitle}>
            <h2 className={colTitle}>{f.aboutTitle}</h2>
            <ul className="flex flex-col gap-2.5">
              <li><Link to="/about" className={linkCls}>{chrome.utility.about}</Link></li>
              <li><Link to="/gallery" className={linkCls}>{chrome.utility.gallery}</Link></li>
              <li><Link to="/contact" className={linkCls}>{chrome.utility.contact}</Link></li>
              <li className="pt-3"><span className="text-white font-bold">{f.prosTitle}</span></li>
              <li><Link to="/magazine#pros" className={linkCls}>{f.architects}</Link></li>
              <li><Link to="/magazine#pros" className={linkCls}>{f.contractors}</Link></li>
            </ul>
          </nav>

          <nav aria-label={f.legalTitle}>
            <h2 className={colTitle}>{f.legalTitle}</h2>
            <ul className="flex flex-col gap-2.5">
              <li><Link to="/privacy-policy" className={linkCls}>{legal.privacy}</Link></li>
              <li><Link to="/terms" className={linkCls}>{legal.terms}</Link></li>
              <li><Link to="/accessibility" className={linkCls}>{legal.accessibility}</Link></li>
              <li><Link to="/refund-policy" className={linkCls}>{legal.refund}</Link></li>
              <li><Link to="/disclaimer" className={linkCls}>{legal.disclaimer}</Link></li>
            </ul>
          </nav>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between gap-3 border-t border-ink-800 pt-6 text-sm text-ink-400">
          <p>&copy; {new Date().getFullYear()} {content.companyName}. {content.footer.rights}</p>
          <p>{f.credits}</p>
        </div>
      </div>
    </footer>
  );
};
