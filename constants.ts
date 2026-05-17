import { Home, Grid, Image, Info, Phone, Shield, Building, Warehouse, Lock, Sun, Ruler } from 'lucide-react';
import { Service, Product, GalleryItem, NavLink } from './types';

// Company Configuration
export const COMPANY_NAME = "אנטון";
export const COMPANY_TAGLINE = "פתרונות אלומיניום ופלדה מתקדמים";

// Contact Information
// TODO(launch): Replace placeholder values before going live. The sentinels
// (phone "*5555", email "info@anton-aluminum.com") are detected by the
// dev-mode PlaceholderBanner; do not change them to other fakes — replace
// with real values.
export const CONTACT_CONFIG = {
  phone: '*5555',
  email: 'info@anton-aluminum.com',
  address: {
    street: 'המלאכה 12',
    city: 'חולון',
    country: 'ישראל',
    streetEn: '12 HaMelacha St.',
    cityEn: 'Holon',
    countryEn: 'Israel',
  },
  workingHours: {
    days: 'ראשון - חמישי',
    daysEn: 'Sunday - Thursday',
    hours: '08:00 - 18:00',
  },
  wazeUrl: 'https://ul.waze.com/ul?navigate=yes&q=HaMelacha+12+Holon+Israel',
} as const;

// WhatsApp click-to-chat number in international E.164 format without "+".
// TODO(launch): replace with the real number (e.g. '972501234567').
export const WHATSAPP_NUMBER = '972555555555';

// Social Links (add actual links when available)
export const SOCIAL_LINKS = {
  facebook: '#',
  instagram: '#',
  whatsapp: WHATSAPP_NUMBER,
} as const;

export const NAV_LINKS: NavLink[] = [
  { path: '/', label: 'בית' },
  { path: '/products', label: 'מוצרים' },
  { path: '/gallery', label: 'גלריה' },
  { path: '/about', label: 'אודות' },
  { path: '/contact', label: 'צור קשר' },
];

export const SERVICES: Service[] = [
  {
    id: 'gates',
    title: 'שערים חשמליים',
    description: 'שערים מעוצבים מאלומיניום ופלדה, המשלבים בטיחות מקסימלית עם עיצוב מודרני ויוקרתי לבית ולעסק.',
    icon: Shield,
    image: 'https://picsum.photos/800/600?random=1'
  },
  {
    id: 'fences',
    title: 'גדרות מעוצבות',
    description: 'פתרונות גידור היקפיים השומרים על הפרטיות שלכם תוך שמירה על קו עיצובי נקי ואסתטי.',
    icon: Ruler,
    image: 'https://picsum.photos/800/600?random=2'
  },
  {
    id: 'pergolas',
    title: 'פרגולות הצללה',
    description: 'פרגולות אלומיניום מתקדמות, חשמליות או קבועות, העמידות בכל מזג אוויר ואינן דורשות תחזוקה.',
    icon: Sun,
    image: 'https://picsum.photos/800/600?random=3'
  },
  {
    id: 'railings',
    title: 'מעקות בטיחות',
    description: 'מעקות זכוכית ואלומיניום למרפסות ומדרגות, המשלבים שקיפות ובטיחות בתקנים המחמירים ביותר.',
    icon: Home,
    image: 'https://picsum.photos/800/600?random=4'
  },
  {
    id: 'cladding',
    title: 'חיפויי אלומיניום',
    description: 'חיפויי קיר מתקדמים המעניקים למבנה מראה חדשני, בידוד תרמי והגנה לאורך שנים.',
    icon: Building,
    image: 'https://picsum.photos/800/600?random=5'
  },
  {
    id: 'bars',
    title: 'סורגים',
    description: 'סורגים דקורטיביים שאינם פוגעים בנוף, מספקים הגנה מקסימלית ושקט נפשי.',
    icon: Lock,
    image: 'https://picsum.photos/800/600?random=6'
  }
];

export const PRODUCTS: Product[] = [
  { id: '1', category: 'gates', title: 'שער כניסה הייטק', description: 'שער אלומיניום דגם הייטק עם מנוע נסתר', image: 'https://picsum.photos/600/400?random=10' },
  { id: '2', category: 'gates', title: 'שער כנף קלאסי', description: 'שער כנף בעיצוב קלאסי עם פיתוחים', image: 'https://picsum.photos/600/400?random=11' },
  { id: '3', category: 'fences', title: 'גדר רפפות', description: 'גדר אלומיניום דגם רפפות לפרטיות מלאה', image: 'https://picsum.photos/600/400?random=12' },
  { id: '4', category: 'fences', title: 'גדר הייטק', description: 'גדר בקווים ישרים ונקיים', image: 'https://picsum.photos/600/400?random=13' },
  { id: '5', category: 'pergolas', title: 'פרגולה תלויה', description: 'פרגולה ללא עמודים בעיצוב מרחף', image: 'https://picsum.photos/600/400?random=14' },
  { id: '6', category: 'pergolas', title: 'פרגולה חשמלית', description: 'פרגולה נאספת עם שלט רחוק', image: 'https://picsum.photos/600/400?random=15' },
  { id: '7', category: 'railings', title: 'מעקה זכוכית', description: 'מעקה זכוכית שתולה ללא עמודים', image: 'https://picsum.photos/600/400?random=16' },
  { id: '8', category: 'cladding', title: 'חיפוי דמוי עץ', description: 'חיפוי אלומיניום בגמר דמוי עץ איכותי', image: 'https://picsum.photos/600/400?random=17' },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: '1', category: 'residential', title: 'וילה בסביון', image: 'https://picsum.photos/800/800?random=20' },
  { id: '2', category: 'commercial', title: 'משרדי הייטק הרצליה', image: 'https://picsum.photos/800/600?random=21' },
  { id: '3', category: 'residential', title: 'בית פרטי בקיסריה', image: 'https://picsum.photos/600/800?random=22' },
  { id: '4', category: 'outdoor', title: 'גינה מעוצבת רמת השרון', image: 'https://picsum.photos/800/600?random=23' },
  { id: '5', category: 'residential', title: 'פנטהאוז תל אביב', image: 'https://picsum.photos/800/800?random=24' },
  { id: '6', category: 'commercial', title: 'קניון עזריאלי', image: 'https://picsum.photos/600/600?random=25' },
];

export const CATEGORIES = [
  { id: 'all', label: 'הכל' },
  { id: 'gates', label: 'שערים' },
  { id: 'fences', label: 'גדרות' },
  { id: 'pergolas', label: 'פרגולות' },
  { id: 'railings', label: 'מעקות' },
  { id: 'cladding', label: 'חיפויים' },
];