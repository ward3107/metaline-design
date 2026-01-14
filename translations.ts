import { Home, Shield, Building, Warehouse, Lock, Sun, Ruler } from 'lucide-react';
import { Service, Product, GalleryItem, NavLink } from './types';

// Icons need to be mapped here because we can't store components easily in JSON if we were fetching it, 
// but since this is TS file, we can keep them here or import them in pages. 
// For this structure, we will reuse the icons in the pages, so we only store data here.

export const CONTENT = {
  he: {
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
  },
  en: {
    direction: 'ltr',
    companyName: "Anton",
    tagline: "Advanced Aluminum & Steel Solutions",
    nav: [
      { path: '/', label: 'Home' },
      { path: '/products', label: 'Products' },
      { path: '/gallery', label: 'Gallery' },
      { path: '/about', label: 'About' },
      { path: '/contact', label: 'Contact' },
    ],
    buttons: {
      callNow: 'Call Now',
      products: 'Our Products',
      contact: 'Contact Us',
      learnMore: 'Learn More',
      scroll: 'Scroll',
      viewDetails: 'View Details',
      sendMessage: 'Send Message',
      sending: 'Sending...',
      success: 'Message Sent Successfully!',
      backToTop: 'Back to Top'
    },
    cookies: {
      title: 'Cookie Settings',
      text: 'We use cookies to improve your browsing experience, serve personalized content, and analyze our traffic.',
      acceptAll: 'Accept All',
      rejectAll: 'Reject All',
      customize: 'Customize',
      save: 'Save Preferences',
      categories: {
        essential: {
          title: 'Essential',
          desc: 'These cookies are necessary for the website to function and cannot be switched off.'
        },
        analytics: {
          title: 'Analytics',
          desc: 'Help us understand how visitors interact with the website.'
        },
        marketing: {
          title: 'Marketing',
          desc: 'Used to display relevant ads and personalized content.'
        }
      }
    },
    home: {
      heroTitle: 'Design & Safety',
      heroHighlight: 'Without Compromise',
      heroDesc: 'We specialize in the planning, manufacturing, and installation of premium gates, fences, and shading solutions.',
      servicesTitle: 'Our Solutions',
      servicesDesc: 'A wide range of quality products customized to your needs. Drag to explore all services.',
      ctaTitle: 'Ready to Upgrade Your Property?',
      ctaDesc: 'Our professional team is available for an initial consultation without obligation. Let\'s plan your next project together.',
      ctaButton: 'Talk to Us Today',
      features: {
        warranty: { title: 'Full Warranty', desc: 'All our products come with a comprehensive warranty for your peace of mind.' },
        design: { title: 'Custom Design', desc: 'Full customization of design, dimensions, and colors to meet project requirements.' },
        safety: { title: 'Safety Standards', desc: 'Meeting the strictest standards for safety and quality.' },
        schedule: { title: 'On Time Delivery', desc: 'Commitment to fast delivery and installation times without delays.' }
      }
    },
    products: {
      title: 'Our Products',
      subtitle: 'Our comprehensive product catalog. Each product is carefully manufactured from quality raw materials and modern design.',
      noResults: 'No products found in this category.',
      categories: [
        { id: 'all', label: 'All' },
        { id: 'gates', label: 'Gates' },
        { id: 'fences', label: 'Fences' },
        { id: 'pergolas', label: 'Pergolas' },
        { id: 'railings', label: 'Railings' },
        { id: 'cladding', label: 'Cladding' },
      ]
    },
    gallery: {
      title: 'Project Gallery',
      subtitle: 'A glimpse of some of the projects we have carried out for our clients. Uncompromising quality in every detail.',
      types: {
        residential: 'Residential',
        commercial: 'Commercial',
        outdoor: 'Outdoor'
      }
    },
    about: {
      title: 'About Anton',
      subtitle: 'Since 2005, we have been leading the aluminum and steel industry in Israel with new standards of quality, service, and innovation.',
      storyTitle: 'Our Story',
      storyP1: '"Anton" was founded out of a passion for aesthetics and practicality in the construction world. What started as a small workshop grew to become one of the leading companies in aluminum and steel solutions for residential and industrial use.',
      storyP2: 'We believe that the home is a person\'s fortress, so every product leaving our factory undergoes strict quality control. Our gates, fences, and pergolas are not just safety and shading products - they are an integral part of home design.',
      storyP3: 'Our team consists of certified engineers, designers, and installers with decades of experience, committed to giving every customer the most precise solution for their needs.',
      valuesTitle: 'Our Values',
      values: [
        { title: 'Excellence', text: 'Striving for perfection in every weld and screw.' },
        { title: 'Personal Service', text: 'Close accompaniment from planning to installation.' },
        { title: 'Professionalism', text: 'Using the most advanced manufacturing technologies.' },
        { title: 'Reliability', text: 'Full transparency and strict adherence to schedules.' },
      ]
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Have a question? Want a quote? Leave your details and we will get back to you shortly.',
      infoTitle: 'Contact Information',
      phone: 'Phone',
      phoneNote: 'Sunday - Thursday, 08:00 - 18:00',
      email: 'Email',
      address: 'Address',
      addressVal: '12 HaMelacha St., Holon Industrial Zone',
      formTitle: 'Send Us a Message',
      formSubtitle: 'Fill out the form and our representative will contact you to schedule a consultation.',
      labels: {
        name: 'Full Name',
        namePlaceholder: 'John Doe',
        phone: 'Phone',
        phonePlaceholder: '050-0000000',
        email: 'Email',
        emailPlaceholder: 'name@example.com',
        designType: 'Desired Design Type',
        designPlaceholder: 'Select design type...',
        message: 'Message',
        messagePlaceholder: 'Tell us about your project...'
      },
      designs: [
        { id: 'gates', label: 'Electric Gates' },
        { id: 'fences', label: 'Aluminum Fences' },
        { id: 'pergolas', label: 'Shading Pergolas' },
        { id: 'railings', label: 'Safety Railings' },
        { id: 'cladding', label: 'Wall Cladding' },
        { id: 'bars', label: 'Designed Bars' },
        { id: 'other', label: 'Other / Custom Solution' },
      ],
      map: 'Interactive Map (Simulation)'
    },
    footer: {
      about: 'Your experts for aluminum and steel solutions. Design, manufacturing, and installation at the highest level, with strict adherence to quality and service without compromise.',
      quickLinks: 'Quick Links',
      services: 'Our Services',
      contact: 'Contact Info',
      rights: 'All rights reserved.'
    },
    servicesList: [
      {
        id: 'gates',
        title: 'Electric Gates',
        description: 'Designed aluminum and steel gates, combining maximum safety with modern and luxurious design for home and business.',
        icon: Shield,
        image: 'https://picsum.photos/800/600?random=1'
      },
      {
        id: 'fences',
        title: 'Designed Fences',
        description: 'Perimeter fencing solutions that maintain your privacy while keeping a clean and aesthetic design line.',
        icon: Ruler,
        image: 'https://picsum.photos/800/600?random=2'
      },
      {
        id: 'pergolas',
        title: 'Shading Pergolas',
        description: 'Advanced aluminum pergolas, electric or fixed, resistant to all weather conditions and requiring no maintenance.',
        icon: Sun,
        image: 'https://picsum.photos/800/600?random=3'
      },
      {
        id: 'railings',
        title: 'Safety Railings',
        description: 'Glass and aluminum railings for balconies and stairs, combining transparency and safety meeting strict standards.',
        icon: Home,
        image: 'https://picsum.photos/800/600?random=4'
      },
      {
        id: 'cladding',
        title: 'Aluminum Cladding',
        description: 'Advanced wall cladding giving the structure an innovative look, thermal insulation, and protection for years.',
        icon: Building,
        image: 'https://picsum.photos/800/600?random=5'
      },
      {
        id: 'bars',
        title: 'Bars & Grilles',
        description: 'Decorative bars that do not obstruct the view, providing maximum protection and peace of mind.',
        icon: Lock,
        image: 'https://picsum.photos/800/600?random=6'
      }
    ],
    productsList: [
      { id: '1', category: 'gates', title: 'Hi-Tech Entry Gate', description: 'Hi-tech model aluminum gate with hidden motor', image: 'https://picsum.photos/600/400?random=10' },
      { id: '2', category: 'gates', title: 'Classic Wing Gate', description: 'Classic design wing gate with decorative elements', image: 'https://picsum.photos/600/400?random=11' },
      { id: '3', category: 'fences', title: 'Louver Fence', description: 'Louver model aluminum fence for full privacy', image: 'https://picsum.photos/600/400?random=12' },
      { id: '4', category: 'fences', title: 'Hi-Tech Fence', description: 'Fence with clean straight lines', image: 'https://picsum.photos/600/400?random=13' },
      { id: '5', category: 'pergolas', title: 'Floating Pergola', description: 'Pergola without pillars in floating design', image: 'https://picsum.photos/600/400?random=14' },
      { id: '6', category: 'pergolas', title: 'Electric Pergola', description: 'Retractable pergola with remote control', image: 'https://picsum.photos/600/400?random=15' },
      { id: '7', category: 'railings', title: 'Glass Railing', description: 'Embedded glass railing without pillars', image: 'https://picsum.photos/600/400?random=16' },
      { id: '8', category: 'cladding', title: 'Wood-Look Cladding', description: 'Aluminum cladding with high-quality wood finish', image: 'https://picsum.photos/600/400?random=17' },
    ],
    galleryList: [
      { id: '1', category: 'residential', title: 'Villa in Savyon', image: 'https://picsum.photos/800/800?random=20' },
      { id: '2', category: 'commercial', title: 'Herzliya Hi-Tech Offices', image: 'https://picsum.photos/800/600?random=21' },
      { id: '3', category: 'residential', title: 'Private House in Caesarea', image: 'https://picsum.photos/600/800?random=22' },
      { id: '4', category: 'outdoor', title: 'Ramat HaSharon Designed Garden', image: 'https://picsum.photos/800/600?random=23' },
      { id: '5', category: 'residential', title: 'Tel Aviv Penthouse', image: 'https://picsum.photos/800/800?random=24' },
      { id: '6', category: 'commercial', title: 'Azrieli Mall', image: 'https://picsum.photos/600/600?random=25' },
    ]
  }
};