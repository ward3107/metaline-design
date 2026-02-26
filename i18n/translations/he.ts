import { Home, Shield, Building, Warehouse, Lock, Sun, Ruler } from 'lucide-react';

export const he = {
  direction: 'rtl',
  companyName: "אנטון",
  tagline: "פתרונות אלומיניום ופלדה מתקדמים",
  nav: [
    { path: '/', label: 'בית' },
    { path: '/products', label: 'מוצרים' },
    { path: '/gallery', label: 'גלריה' },
    { path: '/about', label: 'אודות' },
    { path: '/contact', label: 'צור קשר' },
  ],
  buttons: {
    callNow: 'חייג עכשיו',
    products: 'למוצרים שלנו',
    contact: 'צור קשר',
    learnMore: 'למידע נוסף',
    scroll: 'גלול',
    viewDetails: 'צפה בפרטים',
    sendMessage: 'שלח הודעה',
    sending: 'שולח...',
    success: 'ההודעה נשלחה בהצלחה!',
    backToTop: 'חזור למעלה'
  },
  cookies: {
    title: 'הגדרות עוגיות',
    text: 'אנו משתמשים בעוגיות כדי לשפר את חווית הגלישה שלך, להציג תוכן מותאם אישית ולנתח את התנועה באתר.',
    acceptAll: 'קבל הכל',
    rejectAll: 'דחה הכל',
    customize: 'התאמה אישית',
    save: 'שמור העדפות',
    categories: {
      essential: {
        title: 'הכרחיות',
        desc: 'עוגיות אלו חיוניות לתפקוד האתר ולא ניתן לבטלן.'
      },
      analytics: {
        title: 'אנליטיקה',
        desc: 'עוזרות לנו להבין כיצד מבקרים משתמשים באתר.'
      },
      marketing: {
        title: 'שיווק',
        desc: 'משמשות להצגת פרסומות רלוונטיות ומותאמות אישית.'
      }
    }
  },
  home: {
    heroTitle: 'עיצוב ובטיחות',
    heroHighlight: 'ללא פשרות',
    heroDesc: 'אנו מתמחים בתכנון, ייצור והתקנה של שערים, גדרות ופתרונות הצללה ברמה הגבוהה ביותר.',
    servicesTitle: 'הפתרונות שלנו',
    servicesDesc: 'מגוון רחב של מוצרי איכות המותאמים אישית לצרכים שלכם. גררו כדי לגלות את כל השירותים.',
    ctaTitle: 'מוכנים לשדרג את הנכס שלכם?',
    ctaDesc: 'הצוות המקצועי שלנו זמין לייעוץ ראשוני ללא התחייבות. בואו נתכנן יחד את הפרויקט הבא שלכם.',
    ctaButton: 'דברו איתנו עוד היום',
    features: {
      warranty: { title: 'אחריות מלאה', desc: 'כל המוצרים שלנו מגיעים עם אחריות מקיפה לשקט הנפשי שלך.' },
      design: { title: 'עיצוב אישי', desc: 'התאמה מלאה של העיצוב, המידות והצבעים לדרישות הפרויקט.' },
      safety: { title: 'תקני בטיחות', desc: 'עמידה בכל התקנים המחמירים ביותר לבטיחות ואיכות.' },
      schedule: { title: 'עמידה בלו"ז', desc: 'התחייבות לזמני אספקה והתקנה מהירים ללא עיכובים.' }
    }
  },
  products: {
    title: 'המוצרים שלנו',
    subtitle: 'קטלוג המוצרים המקיף שלנו. כל מוצר מיוצר בקפידה מחומרי גלם איכותיים ובעיצוב מודרני.',
    noResults: 'לא נמצאו מוצרים בקטגוריה זו.',
    categories: [
      { id: 'all', label: 'הכל' },
      { id: 'gates', label: 'שערים' },
      { id: 'fences', label: 'גדרות' },
      { id: 'pergolas', label: 'פרגולות' },
      { id: 'railings', label: 'מעקות' },
      { id: 'cladding', label: 'חיפויים' },
    ]
  },
  gallery: {
    title: 'גלריית פרויקטים',
    subtitle: 'הצצה לחלק מהפרויקטים שביצענו עבור לקוחותינו. איכות ללא פשרות בכל פרט ופרט.',
    types: {
      residential: 'מגורים',
      commercial: 'מסחרי',
      outdoor: 'חוץ'
    }
  },
  about: {
    title: 'אודות אנטון',
    subtitle: 'מאז 2005, אנחנו מובילים את ענף האלומיניום והפלדה בישראל עם סטנדרטים חדשים של איכות, שירות וחדשנות.',
    storyTitle: 'הסיפור שלנו',
    storyP1: 'חברת "אנטון" הוקמה מתוך תשוקה לאסתטיקה ופרקטיקה בעולם הבנייה. מה שהתחיל כבית מלאכה קטן, צמח להיות אחת החברות המובילות בתחום פתרונות האלומיניום והפלדה למגורים ולתעשייה.',
    storyP2: 'אנו מאמינים כי הבית הוא המבצר של האדם, ולכן כל מוצר היוצא ממפעלנו עובר בקרת איכות קפדנית. השערים, הגדרות והפרגולות שלנו הם לא רק מוצרי בטיחות והצללה - הם חלק בלתי נפרד מעיצוב הבית.',
    storyP3: 'הצוות שלנו מורכב ממהנדסים, מעצבים ומתקינים מוסמכים בעלי ניסיון של עשרות שנים, המחוייבים להעניק לכל לקוח את הפתרון המדויק ביותר לצרכיו.',
    valuesTitle: 'הערכים שלנו',
    values: [
      { title: 'מצוינות', text: 'שואפים לשלמות בכל ריתוך ובכל בורג.' },
      { title: 'שירות אישי', text: 'ליווי צמוד משלב התכנון ועד גמר ההתקנה.' },
      { title: 'מקצועיות', text: 'שימוש בטכנולוגיות ייצור מתקדמות ביותר.' },
      { title: 'אמינות', text: 'שקיפות מלאה ועמידה קפדנית בלוחות זמנים.' },
    ]
  },
  contact: {
    title: 'צור קשר',
    subtitle: 'יש לכם שאלה? רוצים לקבל הצעת מחיר? השאירו פרטים ונחזור אליכם בהקדם.',
    infoTitle: 'פרטי התקשרות',
    phone: 'טלפון',
    phoneNote: 'ראשון - חמישי, 08:00 - 18:00',
    email: 'דוא"ל',
    address: 'כתובת',
    addressVal: 'רחוב המלאכה 12, אזור תעשייה חולון',
    formTitle: 'שלחו לנו הודעה',
    formSubtitle: 'מלאו את הטופס ונציג שלנו יחזור אליכם לתיאום פגישת ייעוץ.',
    labels: {
      name: 'שם מלא',
      namePlaceholder: 'ישראל ישראלי',
      phone: 'טלפון',
      phonePlaceholder: '050-0000000',
      email: 'דוא"ל',
      emailPlaceholder: 'name@example.com',
      designType: 'סוג העיצוב המבוקש',
      designPlaceholder: 'בחר סוג עיצוב...',
      message: 'הודעה',
      messagePlaceholder: 'ספרו לנו על הפרויקט שלכם...'
    },
    designs: [
      { id: 'gates', label: 'שערים חשמליים' },
      { id: 'fences', label: 'גדרות אלומיניום' },
      { id: 'pergolas', label: 'פרגולות הצללה' },
      { id: 'railings', label: 'מעקות בטיחות' },
      { id: 'cladding', label: 'חיפוי קירות' },
      { id: 'bars', label: 'סורגים מעוצבים' },
      { id: 'other', label: 'אחר / שירות מותאם אישית' },
    ],
    map: 'מפה אינטראקטיבית (הדמיה)'
  },
  footer: {
    about: 'המומחים שלך לפתרונות אלומיניום ופלדה. עיצוב, ייצור והתקנה ברמה הגבוהה ביותר, תוך הקפדה על איכות ושירות ללא פשרות.',
    quickLinks: 'ניווט מהיר',
    services: 'השירותים שלנו',
    contact: 'פרטי התקשרות',
    rights: 'כל הזכויות שמורות.'
  },
  servicesList: [
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
  ],
  productsList: [
    { id: '1', category: 'gates', title: 'שער כניסה הייטק', description: 'שער אלומיניום דגם הייטק עם מנוע נסתר', image: 'https://picsum.photos/600/400?random=10' },
    { id: '2', category: 'gates', title: 'שער כנף קלאסי', description: 'שער כנף בעיצוב קלאסי עם פיתוחים', image: 'https://picsum.photos/600/400?random=11' },
    { id: '3', category: 'fences', title: 'גדר רפפות', description: 'גדר אלומיניום דגם רפפות לפרטיות מלאה', image: 'https://picsum.photos/600/400?random=12' },
    { id: '4', category: 'fences', title: 'גדר הייטק', description: 'גדר בקווים ישרים ונקיים', image: 'https://picsum.photos/600/400?random=13' },
    { id: '5', category: 'pergolas', title: 'פרגולה תלויה', description: 'פרגולה ללא עמודים בעיצוב מרחף', image: 'https://picsum.photos/600/400?random=14' },
    { id: '6', category: 'pergolas', title: 'פרגולה חשמלית', description: 'פרגולה נאספת עם שלט רחוק', image: 'https://picsum.photos/600/400?random=15' },
    { id: '7', category: 'railings', title: 'מעקה זכוכית', description: 'מעקה זכוכית שתולה ללא עמודים', image: 'https://picsum.photos/600/400?random=16' },
    { id: '8', category: 'cladding', title: 'חיפוי דמוי עץ', description: 'חיפוי אלומיניום בגמר דמוי עץ איכותי', image: 'https://picsum.photos/600/400?random=17' },
  ],
  galleryList: [
    { id: '1', category: 'residential', title: 'וילה בסביון', image: 'https://picsum.photos/800/800?random=20' },
    { id: '2', category: 'commercial', title: 'משרדי הייטק הרצליה', image: 'https://picsum.photos/800/600?random=21' },
    { id: '3', category: 'residential', title: 'בית פרטי בקיסריה', image: 'https://picsum.photos/600/800?random=22' },
    { id: '4', category: 'outdoor', title: 'גינה מעוצבת רמת השרון', image: 'https://picsum.photos/800/600?random=23' },
    { id: '5', category: 'residential', title: 'פנטהאוז תל אביב', image: 'https://picsum.photos/800/800?random=24' },
    { id: '6', category: 'commercial', title: 'קניון עזריאלי', image: 'https://picsum.photos/600/600?random=25' },
  ]
};
