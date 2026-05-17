import { Home, Grid, Image, Info, Phone, Shield, Building, Warehouse, Lock, Sun, Ruler } from 'lucide-react';
import { Service, Product, GalleryItem, NavLink } from './types';

// Company Configuration
export const COMPANY_NAME = "אנטון";
export const COMPANY_TAGLINE = "מסגריה אומנותית · שערים, גדרות, מעקות, פרגולות וסורגים";

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

// Curated metalwork photos from Unsplash, keyed by category. These stand
// in for real project photos until the user uploads their own work.
// TODO(launch): replace with the shop's actual project photography.
const UNSPLASH = 'https://images.unsplash.com/photo-';
const Q = '?q=80&w=1200&auto=format&fit=crop';
export const HERO_IMAGE = `${UNSPLASH}1746155885811-ace3b5afd12d?q=80&w=2400&auto=format&fit=crop`;
const CATEGORY_IMAGE = {
  gates: `${UNSPLASH}1759355787286-f1c5fd456a0d${Q}`,
  fences: `${UNSPLASH}1769697694226-dcd646ca50c1${Q}`,
  pergolas: `${UNSPLASH}1775903961716-7c2cd1b932d8${Q}`,
  railings: `${UNSPLASH}1766156181041-0dc63ec093ff${Q}`,
  cladding: `${UNSPLASH}1598638567141-696be94b464a${Q}`,
  bars: `${UNSPLASH}1761542928043-503ab1870832${Q}`,
} as const;
const PROJECT_IMAGE = {
  villaGate: `${UNSPLASH}1761347604632-944c4400093a${Q}`,
  techOffice: `${UNSPLASH}1623051786552-e46ef84e6c07${Q}`,
  penthouseBalcony: `${UNSPLASH}1776363116182-51694a04a1d5${Q}`,
  gardenPergola: `${UNSPLASH}1696846911635-83b97e53fb65${Q}`,
} as const;

export const SERVICES: Service[] = [
  {
    id: 'gates',
    title: 'שערים חשמליים',
    description: 'שערים מאלומיניום ופלדה, חשמליים או ידניים, המשלבים בטיחות מקסימלית עם עיצוב מודרני ויוקרתי לבית ולעסק.',
    icon: Shield,
    image: CATEGORY_IMAGE.gates,
  },
  {
    id: 'fences',
    title: 'גדרות מעוצבות',
    description: 'פתרונות גידור היקפיים השומרים על הפרטיות שלכם, בקווים נקיים ואסתטיים — גדרות רפפות, פלדה מודרנית ועיצובים מותאמים.',
    icon: Ruler,
    image: CATEGORY_IMAGE.fences,
  },
  {
    id: 'pergolas',
    title: 'פרגולות אלומיניום',
    description: 'פרגולות מתקדמות, חשמליות או קבועות, עמידות בכל מזג אוויר ואינן דורשות תחזוקה. ללא חלודה, ללא צבע מתקלף.',
    icon: Sun,
    image: CATEGORY_IMAGE.pergolas,
  },
  {
    id: 'railings',
    title: 'מעקות בטיחות',
    description: 'מעקות זכוכית, אלומיניום ופלדה למרפסות ולמדרגות. שקיפות, בטיחות ועמידה בתקני בטיחות מחמירים.',
    icon: Home,
    image: CATEGORY_IMAGE.railings,
  },
  {
    id: 'cladding',
    title: 'חיפויי אלומיניום',
    description: 'חיפויי קיר חיצוניים המעניקים למבנה מראה חדשני, בידוד תרמי והגנה לאורך עשרות שנים.',
    icon: Building,
    image: CATEGORY_IMAGE.cladding,
  },
  {
    id: 'bars',
    title: 'סורגים דקורטיביים',
    description: 'סורגי בטיחות מעוצבים שאינם פוגעים בנוף — הגנה מקסימלית עם קווים נקיים שמשתלבים בעיצוב הבית.',
    icon: Lock,
    image: CATEGORY_IMAGE.bars,
  },
];

export const PRODUCTS: Product[] = [
  { id: '1', category: 'gates', title: 'שער כניסה הייטק', description: 'שער אלומיניום דגם הייטק עם מנוע נסתר', image: CATEGORY_IMAGE.gates },
  { id: '2', category: 'gates', title: 'שער כנף קלאסי', description: 'שער כנף בעיצוב קלאסי עם פיתוחים', image: PROJECT_IMAGE.villaGate },
  { id: '3', category: 'fences', title: 'גדר רפפות', description: 'גדר אלומיניום דגם רפפות לפרטיות מלאה', image: CATEGORY_IMAGE.fences },
  { id: '4', category: 'fences', title: 'גדר הייטק', description: 'גדר בקווים ישרים ונקיים', image: CATEGORY_IMAGE.fences },
  { id: '5', category: 'pergolas', title: 'פרגולה תלויה', description: 'פרגולה ללא עמודים בעיצוב מרחף', image: CATEGORY_IMAGE.pergolas },
  { id: '6', category: 'pergolas', title: 'פרגולה חשמלית', description: 'פרגולה נאספת עם שלט רחוק', image: PROJECT_IMAGE.gardenPergola },
  { id: '7', category: 'railings', title: 'מעקה זכוכית', description: 'מעקה זכוכית שתולה ללא עמודים', image: CATEGORY_IMAGE.railings },
  { id: '8', category: 'cladding', title: 'חיפוי דמוי עץ', description: 'חיפוי אלומיניום בגמר דמוי עץ איכותי', image: CATEGORY_IMAGE.cladding },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: '1', category: 'residential', title: 'וילה בסביון', image: PROJECT_IMAGE.villaGate },
  { id: '2', category: 'commercial', title: 'משרדי הייטק הרצליה', image: PROJECT_IMAGE.techOffice },
  { id: '3', category: 'residential', title: 'בית פרטי בקיסריה', image: CATEGORY_IMAGE.gates },
  { id: '4', category: 'outdoor', title: 'גינה מעוצבת רמת השרון', image: PROJECT_IMAGE.gardenPergola },
  { id: '5', category: 'residential', title: 'פנטהאוז תל אביב', image: PROJECT_IMAGE.penthouseBalcony },
  { id: '6', category: 'commercial', title: 'קניון עזריאלי', image: CATEGORY_IMAGE.cladding },
];

export const CATEGORIES = [
  { id: 'all', label: 'הכל' },
  { id: 'gates', label: 'שערים' },
  { id: 'fences', label: 'גדרות' },
  { id: 'pergolas', label: 'פרגולות' },
  { id: 'railings', label: 'מעקות' },
  { id: 'cladding', label: 'חיפויים' },
];