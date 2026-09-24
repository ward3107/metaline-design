import { CATEGORY_IMAGE, PROJECT_IMAGE } from '../constants';

/**
 * Magazine articles.
 *
 * Structure mirrors the article-page skeleton: bold lead, H2/H3 sections,
 * bullet lists, an in-body square image and a closing 2-image gallery.
 *
 * TODO(content): these three are starter articles written for the shop.
 * Replace author/dates/photos with real ones and add EN/AR versions when
 * the client supplies them (the page marks article text as lang="he").
 */
export type ArticleBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'img'; src: string; alt: string; caption?: string };

export interface Article {
  slug: string;
  title: string;
  lead: string;
  excerpt: string;
  author: string;
  date: string; // ISO yyyy-mm-dd
  readMinutes: number;
  category: 'gates' | 'fences' | 'pergolas' | 'railings' | 'cladding' | 'bars';
  cover: string;
  body: ArticleBlock[];
  gallery: { src: string; alt: string }[];
}

export const ARTICLES: Article[] = [
  {
    slug: 'choosing-electric-gate',
    title: 'איך בוחרים שער חשמלי לבית פרטי',
    lead: 'שער חשמלי הוא הדבר הראשון שרואים כשמגיעים לבית, והוא עובד עשרות פעמים ביום. כך מתאימים את סוג השער, המנוע והגמר למגרש ולשגרה שלכם.',
    excerpt: 'נגרר, כנף או הרמה? מה לבדוק במגרש, איזה מנוע מתאים ואילו תוספות באמת שווה להוסיף.',
    author: 'צוות אנטון',
    date: '2026-09-01',
    readMinutes: 4,
    category: 'gates',
    cover: CATEGORY_IMAGE.gates,
    body: [
      { type: 'p', text: 'לפני שבוחרים עיצוב, כדאי להתחיל מהמגרש עצמו: כמה מקום יש בצד הכניסה, האם השביל עולה או יורד, וכמה פעמים ביום השער ייפתח. התשובות לשאלות האלה קובעות את סוג השער הרבה לפני שמדברים על צבע ודגם.' },
      { type: 'h2', text: 'נגרר, כנף או הרמה' },
      { type: 'p', text: 'לכל סוג שער יש תנאי שטח שבהם הוא עובד הכי טוב:' },
      { type: 'ul', items: [
        'שער נגרר מתאים כשיש לאורך הגדר מקום פנוי ברוחב השער, והוא לא תופס שטח בחניה.',
        'שער כנף מתאים לכניסה מישורית עם מרחב פתיחה פנוי מאחורי השער.',
        'שער הרמה מתאים לחניות סגורות ולכניסות צרות שבהן אין מקום לגרירה או לפתיחה.',
        'בשביל משופע כדאי לתכנן מראש את כיוון הפתיחה כדי שהשער לא ייגע בקרקע.',
      ] },
      { type: 'img', src: PROJECT_IMAGE.villaGate, alt: 'שער כניסה מאלומיניום לבית פרטי', caption: 'שער כנף מאלומיניום בכניסה לבית פרטי' },
      { type: 'h2', text: 'המנוע והבטיחות' },
      { type: 'p', text: 'גודל ומשקל השער קובעים את המנוע. שער כבד עם מנוע חלש יישחק מהר ויעבוד לאט. בכל שער חשמלי חשוב לכלול עיניים פוטואלקטריות שעוצרות את התנועה כשיש מכשול, ואפשרות פתיחה ידנית בהפסקת חשמל.' },
      { type: 'h3', text: 'תוספות ששוות את זה' },
      { type: 'p', text: 'אינטרקום עם מצלמה, שלטים נוספים לכל בני הבית ופתיחה מהטלפון הם תוספות קטנות שמשנות את השימוש היומיומי. כדאי להחליט עליהן לפני ההתקנה כדי להעביר תשתית חשמל ותקשורת מראש.' },
      { type: 'h3', text: 'גמר שמחזיק לאורך שנים' },
      { type: 'p', text: 'אלומיניום לא מחליד, וצביעה בתנור נותנת גמר אחיד שעמיד לשמש. בגוונים כהים כדאי לשאול על עמידות הצבע לקרינת UV, כי שער שעומד בשמש מלאה מקבל את מלוא העומס.' },
    ],
    gallery: [
      { src: CATEGORY_IMAGE.gates, alt: 'שער נגרר מאלומיניום' },
      { src: CATEGORY_IMAGE.fences, alt: 'שער וגדר באותו קו עיצובי' },
    ],
  },
  {
    slug: 'fixed-or-electric-pergola',
    title: 'פרגולת אלומיניום: קבועה או חשמלית?',
    lead: 'פרגולה משנה את האופן שבו משתמשים בחצר או במרפסת. ההחלטה בין פרגולה קבועה לחשמלית תלויה בכמה אור אתם רוצים, מתי תשבו בחוץ ומה נמצא מתחת.',
    excerpt: 'השוואה בין פרגולה קבועה לחשמלית, סוגי קירוי, ומה לבדוק לפני שמתכננים הצללה לחצר או למרפסת.',
    author: 'צוות אנטון',
    date: '2026-08-18',
    readMinutes: 3,
    category: 'pergolas',
    cover: PROJECT_IMAGE.gardenPergola,
    body: [
      { type: 'p', text: 'פרגולה קבועה נותנת הצללה אחידה כל השנה. פרגולה חשמלית עם רפפות מסתובבות מאפשרת לבחור בכל רגע בין צל מלא, אור מסונן ושמיים פתוחים. שתיהן טובות — השאלה היא איך אתם משתמשים במרחב.' },
      { type: 'h2', text: 'מתי פרגולה קבועה מספיקה' },
      { type: 'ul', items: [
        'כשהמטרה העיקרית היא צל בקיץ ואין צורך לפתוח את הגג.',
        'מעל חניה או שביל כניסה, שם עמידות חשובה יותר מגמישות.',
        'כשרוצים לשלב קירוי שקוף או מבודד ולא לגעת בו שוב.',
      ] },
      { type: 'img', src: CATEGORY_IMAGE.pergolas, alt: 'פרגולת אלומיניום מעל פינת ישיבה', caption: 'פרגולת רפפות מעל פינת ישיבה בחצר' },
      { type: 'h2', text: 'מתי שווה ללכת על חשמלית' },
      { type: 'p', text: 'כשהפרגולה צמודה לסלון או למטבח, שליטה באור חשובה במיוחד: בחורף רוצים להכניס שמש לבית, ובקיץ לחסום אותה. פרגולה חשמלית נותנת את השליטה הזו בלחיצת כפתור, וברוב הדגמים הרפפות נסגרות גם בגשם.' },
      { type: 'h3', text: 'מה לבדוק לפני התכנון' },
      { type: 'p', text: 'כיוון השמש, הקרבה לחלונות, ניקוז מי הגשם ומיקום נקודת החשמל. אם יש שכנים או תקנון בניין, כדאי לבדוק מראש אם נדרש אישור.' },
    ],
    gallery: [
      { src: PROJECT_IMAGE.gardenPergola, alt: 'פרגולה בגינה מעוצבת' },
      { src: CATEGORY_IMAGE.pergolas, alt: 'פרט רפפות בפרגולה' },
    ],
  },
  {
    slug: 'balcony-railing-checklist',
    title: 'מעקה למרפסת: מה חשוב לבדוק לפני שמזמינים',
    lead: 'מעקה נראה כמו פרט פשוט, אבל הוא אחראי על הבטיחות של כל מי שעומד במרפסת. אלה הדברים שכדאי לבדוק כבר בשלב ההצעה.',
    excerpt: 'גובה, מרווחים, סוג זכוכית ואופן העיגון — רשימת בדיקה קצרה לפני שמזמינים מעקה.',
    author: 'צוות אנטון',
    date: '2026-07-30',
    readMinutes: 3,
    category: 'railings',
    cover: PROJECT_IMAGE.penthouseBalcony,
    body: [
      { type: 'p', text: 'מעקה טוב נראה נקי ביום ההתקנה ונשאר יציב גם אחרי שנים של שמש, רוח וילדים שנשענים עליו. ההבדל בין מעקה לא טוב לטוב נמצא בפרטים שלא תמיד רואים בתמונה.' },
      { type: 'h2', text: 'רשימת בדיקה' },
      { type: 'ul', items: [
        'גובה ומרווחים לפי התקן הישראלי — בקשו שההצעה תציין זאת במפורש.',
        'במעקה זכוכית: זכוכית בטיחותית מחוסמת ומשולבת, לא זכוכית רגילה.',
        'עיגון לרצפה או לקיר שמתאים לסוג הבנייה, עם ברגים ואביזרים עמידים לחלודה.',
        'אין אלמנטים אופקיים שמאפשרים לטפס על המעקה.',
      ] },
      { type: 'img', src: CATEGORY_IMAGE.railings, alt: 'מעקה זכוכית במרפסת', caption: 'מעקה זכוכית במרפסת עם נוף פתוח' },
      { type: 'h2', text: 'זכוכית או אלומיניום' },
      { type: 'p', text: 'זכוכית שומרת על הנוף ומתאימה למרפסות פתוחות. אלומיניום מתאים כשרוצים יותר פרטיות או פחות ניקיון. אפשר גם לשלב — מסגרת אלומיניום עם מילוי זכוכית.' },
      { type: 'h3', text: 'תחזוקה' },
      { type: 'p', text: 'שטיפה במים וסבון עדין מספיקה לרוב. כדאי לבדוק פעם בשנה שהברגים מהודקים ושאין סדקים בזכוכית.' },
    ],
    gallery: [
      { src: PROJECT_IMAGE.penthouseBalcony, alt: 'מרפסת פנטהאוז עם מעקה' },
      { src: CATEGORY_IMAGE.railings, alt: 'פרט עיגון מעקה' },
    ],
  },
];

export const getArticle = (slug: string) => ARTICLES.find((a) => a.slug === slug);
