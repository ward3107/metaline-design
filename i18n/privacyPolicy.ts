/**
 * Privacy Policy Translations
 * Compliant with PPL Section 11 + Amendment 13 + PPA 2022 guidelines
 * Languages: Hebrew (he), Arabic (ar), English (en), Russian (ru)
 */

export type PrivacyPolicyLanguage = 'he' | 'ar' | 'en' | 'ru';

export interface PrivacyPolicyTranslations {
  meta: {
    title: string;
    readingTime: string;
    lastUpdated: string;
    effectiveDate: string;
  };
  toc: {
    title: string;
    sections: { id: string; title: string }[];
  };
  sections: {
    intro: {
      title: string;
      controller: {
        title: string;
        businessName: string;
        owner: string;
        address: string;
        email: string;
        website: string;
      };
      legalBasis: string;
    };
    dataCollected: {
      title: string;
      directData: {
        title: string;
        description: string;
        items: string[];
      };
      autoData: {
        title: string;
        description: string;
        items: string[];
        ipNote: string;
      };
      thirdPartyData: {
        title: string;
        description: string;
        tools: {
          name: string;
          data: string;
        }[];
      };
    };
    purposes: {
      title: string;
      intro: string;
      items: {
        purpose: string;
        basis: string;
        basisType: 'consent' | 'legitimate';
      }[];
    };
    recipients: {
      title: string;
      intro: string;
      recipients: {
        name: string;
        country: string;
        purpose: string;
      }[];
      noSelling: string;
    };
    transfers: {
      title: string;
      intro: string;
      usaNote: string;
      safeguards: string;
    };
    retention: {
      title: string;
      items: {
        type: string;
        period: string;
      }[];
    };
    consequences: {
      title: string;
      intro: string;
      contactForm: string;
      cookies: string;
    };
    rights: {
      title: string;
      intro: string;
      items: {
        right: string;
        description: string;
      }[];
      howToExercise: string;
      responseTime: string;
    };
    complaint: {
      title: string;
      intro: string;
      authority: {
        name: string;
        address: string;
        website: string;
        websiteUrl: string;
      };
    };
    cookies: {
      title: string;
      intro: string;
      categories: {
        name: string;
        description: string;
        canDisable: string;
      }[];
      manageLink: string;
    };
    ai: {
      title: string;
      statement: string;
    };
    security: {
      title: string;
      measures: string[];
      breachProcedure: string;
    };
    updates: {
      title: string;
      statement: string;
      notificationMethod: string;
    };
  };
  languageSwitcher: string;
}

// Hebrew (Default)
export const privacyPolicyHE: PrivacyPolicyTranslations = {
  meta: {
    title: 'מדיניות פרטיות',
    readingTime: 'זמן קריאה משוער: כ-4 דקות',
    lastUpdated: 'עודכן לאחרונה: 26 בפברואר 2026',
    effectiveDate: 'תאריך כניסה לתוקף: 14 באוגוסט 2025',
  },
  toc: {
    title: 'תוכן עניינים',
    sections: [
      { id: 'section-1', title: 'מבוא וזהות בעל המאגר' },
      { id: 'section-2', title: 'אילו נתונים אנו אוספים' },
      { id: 'section-3', title: 'מטרות ובסיס משפטי' },
      { id: 'section-4', title: 'מי מקבל את הנתונים שלך' },
      { id: 'section-5', title: 'העברת נתונים לחו"ל' },
      { id: 'section-6', title: 'תקופות שמירת נתונים' },
      { id: 'section-7', title: 'השלכות של אי-מסירת נתונים' },
      { id: 'section-8', title: 'הזכויות שלך על פי חוק' },
      { id: 'section-9', title: 'זכות להגיש תלונה' },
      { id: 'section-10', title: 'עוגיות' },
      { id: 'section-11', title: 'קבלת החלטות אוטומטית ובינה מלאכותית' },
      { id: 'section-12', title: 'אבטחת מידע' },
      { id: 'section-13', title: 'עדכוני מדיניות' },
    ],
  },
  sections: {
    intro: {
      title: 'סעיף 1: מבוא וזהות בעל המאגר',
      controller: {
        title: 'פרטי בעל המאגר:',
        businessName: 'שם העסק: אנטון - פתרונות אלומיניום ופלדה',
        owner: 'בעלים: [שם הבעלים]',
        address: 'כתובת: רחוב המלאכה 12, אזור תעשייה חולון, ישראל',
        email: 'דוא"ל לפניות פרטיות: info@anton-aluminum.com',
        website: 'אתר: https://anton-aluminum.co.il',
      },
      legalBasis: 'מדיניות פרטיות זו נכתבה בהתאם לחוק הגנת הפרטיות, התשמ"א-1981 ותיקון מס\' 13 (בתוקף מ-14 באוגוסט 2025), וכן בהתאם להנחיות הרשות להגנת הפרטיות מיולי 2022.',
    },
    dataCollected: {
      title: 'סעיף 2: אילו נתונים אנו אוספים',
      directData: {
        title: 'א) נתונים שאתה מוסר לנו ישירות:',
        description: 'כאשר אתה משתמש בטפסי האתר או יוצר איתנו קשר:',
        items: [
          'שם מלא - לצורך פנייה אישית',
          'כתובת דוא"ל - לצורך מענה והתכתבות',
          'מספר טלפון - לצורך יצירת קשר',
          'תוכן ההודעה או הפנייה - לצורך מתן מענה הולם',
        ],
      },
      autoData: {
        title: 'ב) נתונים שנאספים באופן אוטומטי:',
        description: 'בעת גלישה באתר נאספים אוטומטית:',
        items: [
          'כתובת IP - כתובת האינטרנט של המכשיר שלך',
          'סוג דפדפן וגרסה - למשל Chrome 120, Safari 17',
          'סוג מכשיר - מחשב שולחני, נייד או טאבלט',
          'דפים שביקרת בהם וזמן השהייה',
          'אתר מפנה (Referrer) - האתר שממנו הגעת אלינו',
        ],
        ipNote: 'הערה חשובה: על פי תיקון 13 לחוק הגנת הפרטיות, כתובת IP מוגדרת כ"נתון אישי" ומוגנת ככזו.',
      },
      thirdPartyData: {
        title: 'ג) נתונים מכלים צד שלישי:',
        description: 'אנו משתמשים בכלים הבאים שעשויים לאסוף נתונים:',
        tools: [
          { name: 'Google Analytics 4', data: 'נתוני סשן, צפיות בדפים, מידע על המכשיר, התנהגות גלישה' },
          { name: 'Facebook/Meta Pixel', data: 'התנהגות גלישה לצורך מיקוד פרסומות ומעקב המרות' },
          { name: 'Google Ads', data: 'אינטראקציה עם מודעות, נתוני המרה' },
          { name: 'Google Tag Manager', data: 'ניהול תגיות ומעקב אירועים' },
          { name: 'WhatsApp Business', data: 'הודעות ותקשורת עם העסק' },
        ],
      },
    },
    purposes: {
      title: 'סעיף 3: מטרות ובסיס משפטי לעיבוד',
      intro: 'אנו מעבדים את הנתונים שלך למטרות הבאות, על בסיס משפטי כמפורט:',
      items: [
        { purpose: 'מענה לפניות ובקשות דרך טופס יצירת קשר', basis: 'אינטרס לגיטימי', basisType: 'legitimate' },
        { purpose: 'ניתוח סטטיסטי ושיפור חוויית המשתמש באתר', basis: 'הסכמה', basisType: 'consent' },
        { purpose: 'הצגת פרסומות מותאמות ומיקוד שיווקי', basis: 'הסכמה', basisType: 'consent' },
        { purpose: 'אבטחת האתר ומניעת הונאה ושימוש לרעה', basis: 'אינטרס לגיטימי', basisType: 'legitimate' },
        { purpose: 'תקשורת שיווקית ישירה (בהסכמה)', basis: 'הסכמה', basisType: 'consent' },
      ],
    },
    recipients: {
      title: 'סעיף 4: מי מקבל את הנתונים שלך',
      intro: 'הנתונים שלך עשויים להיות מועברים לגורמים הבאים:',
      recipients: [
        { name: 'Google LLC', country: 'ארצות הברית', purpose: 'שירותי אנליטיקה ופרסום (GA4, Google Ads, GTM)' },
        { name: 'Meta Platforms Inc.', country: 'ארצות הברית', purpose: 'Facebook Pixel למעקב ומיקוד פרסומות' },
        { name: 'ספק האחסון', country: '[מדינת האחסון]', purpose: 'אחסון קבצי האתר ומסד הנתונים' },
        { name: 'WhatsApp/Meta', country: 'ארצות הברית', purpose: 'תקשורת דרך WhatsApp Business' },
      ],
      noSelling: 'אנו מצהירים בזאת: אנו לא מוכרים את הנתונים האישיים שלך לשום צד שלישי.',
    },
    transfers: {
      title: 'סעיף 5: העברת נתונים לחו"ל',
      intro: 'חלק מהספקים שאנו משתמשים בהם (Google, Meta) ממוקמים בארצות הברית, שאינה מוגדרת כמדינה בעלת רמת הגנה מתאימה לפי הדין הישראלי.',
      usaNote: 'בהתאם לכך, אנו מבטיחים העברת נתונים בכפוף לאמצעי הגנה מתאימים:',
      safeguards: 'Standard Contractual Clauses (SCC) - סעיפים חוזיים סטנדרטיים שאושרו על ידי האיחוד האירופי ומספקים הגנה משפטית להעברת נתונים מחוץ לגבולות המדינה. כמו כן, Google ו-Meta פועלות תחת מסגרת EU-US Data Privacy Framework.',
    },
    retention: {
      title: 'סעיף 6: תקופות שמירת נתונים',
      items: [
        { type: 'נתוני טפסי יצירת קשר:', period: '24 חודשים ממועד הפנייה, או עד בקשת מחיקה' },
        { type: 'נתוני אנליטיקה (Google Analytics):', period: '14 חודשים (ברירת מחדל של Google)' },
        { type: 'נתוני שיווק ופרסום:', period: 'עד ביטול הסכמה או בקשת מחיקה' },
        { type: 'יומני שרת (כתובות IP):', period: '90 יום' },
        { type: 'נתוני הסכמת עוגיות:', period: '12 חודשים' },
      ],
    },
    consequences: {
      title: 'סעיף 7: השלכות של אי-מסירת נתונים (חובה על פי סעיף 11)',
      intro: 'על פי דרישות תיקון 13 לחוק, אנו מפרטים את השלכות אי-מסירת הנתונים:',
      contactForm: 'מסירת שם ודוא"ל בטופס יצירת קשר היא התנדבותית. עם זאת, אם לא תמסור אותם, לא נוכל להשיב לפנייתך או לספק את השירות המבוקש.',
      cookies: 'אתה יכול לסרב לעוגיות אנליטיות ושיווקיות. האתר ימשיך לתפקד באופן מלא - רק יכולות המעקב והמיקוד יושבתו.',
    },
    rights: {
      title: 'סעיף 8: הזכויות שלך על פי חוק',
      intro: 'על פי חוק הגנת הפרטיות, עומדות לרשותך הזכויות הבאות:',
      items: [
        { right: 'זכות גישה:', description: 'אתה רשאי לבקש עותק של הנתונים האישיים שלך המאוחסנים אצלנו.' },
        { right: 'זכות תיקון:', description: 'אתה רשאי לבקש לתקן נתונים לא מדויקים או לא עדכניים.' },
        { right: 'זכות מחיקה:', description: 'אתה רשאי לבקש מחיקת נתוניך כאשר אינם נדרשים עוד למטרות שנאספו עבורן.' },
        { right: 'זכות התנגדות:', description: 'אתה רשאי להתנגד לעיבוד נתוניך לצורכי שיווק ישיר.' },
        { right: 'זכות לשלול הסכמה:', description: 'בכל עת, ללא פגיעה בעיבוד שבוצע קודם לכן.' },
        { right: 'זכות לניידות נתונים:', description: 'לקבל את נתוניך בפורמט נגיש ומובנה.' },
      ],
      howToExercise: 'למימוש זכויותיך, שלח דוא"ל ל: info@anton-aluminum.com עם הנושא: "בקשת זכויות פרטיות"',
      responseTime: 'נשיב לבקשתך תוך 30 יום ממועד קבלתה.',
    },
    complaint: {
      title: 'סעיף 9: זכות להגיש תלונה לרשות להגנת הפרטיות',
      intro: 'אם אתה סבור שפרטיותך נפגעה, עומדת לך הזכות להגיש תלונה לרשות להגנת הפרטיות (רה"פ):',
      authority: {
        name: 'הרשות להגנת הפרטיות',
        address: 'כתובת: רחוב כנפי נשרים 66, ירושלים, ישראל',
        website: 'אתר אינטרנט:',
        websiteUrl: 'gov.il/he/departments/the_privacy_protection_authority',
      },
    },
    cookies: {
      title: 'סעיף 10: עוגיות',
      intro: 'האתר משתמש בעוגיות בשלוש קטגוריות:',
      categories: [
        {
          name: 'עוגיות הכרחיות',
          description: 'נדרשות לתפקוד בסיסי של האתר (זיכרון העדפות, אבטחה). לא ניתן לבטל.',
          canDisable: 'לא ניתן לבטל',
        },
        {
          name: 'עוגיות אנליטיות',
          description: 'Google Analytics - עוקבות אחר נתוני שימוש לשיפור האתר. דורשות הסכמה.',
          canDisable: 'ניתן לבטל',
        },
        {
          name: 'עוגיות שיווקיות',
          description: 'Facebook Pixel, Google Ads - להצגת פרסומות מותאמות. דורשות הסכמה.',
          canDisable: 'ניתן לבטל',
        },
      ],
      manageLink: 'לניהול העדפות העוגיות שלך, לחץ כאן או גלול לתחתית הדף.',
    },
    ai: {
      title: 'סעיף 11: קבלת החלטות אוטומטית ובינה מלאכותית',
      statement: 'אנו לא מקבלים החלטות אוטומטיות המבוססות על בינה מלאכותית שעשויות להשפיע עליך באופן משמעותי (כגון דירוג אשראי, קבלת החלטות תעסוקתיות או ביטוחיות).',
    },
    security: {
      title: 'סעיף 12: אבטחת מידע',
      measures: [
        'הצפנת SSL/TLS לכל התקשורת בין הדפדפן לשרת (HTTPS)',
        'בקרת גישה - גישה מוגבלת לנתונים אישיים לעובדים מורשים בלבד',
        'גיבויים סדירים והפרדה בין סביבות',
        'ניטור ובדיקות אבטחה שוטפות',
      ],
      breachProcedure: 'במקרה של דליפת מידע משמעותית, נודיע לנפגעים ולרשות להגנת הפרטיות תוך 72 שעות מגילוי האירוע, בהתאם לדין.',
    },
    updates: {
      title: 'סעיף 13: עדכוני מדיניות',
      statement: 'אנו עשויים לעדכן מדיניות פרטיות זו מעת לעת. תאריך העדכון האחרון מופיע בראש המסמך.',
      notificationMethod: 'במקרה של שינויים מהותיים, נודיע על כך באמצעות פרסום בולט באתר או בדוא"ל למשתמשים רשומים.',
    },
  },
  languageSwitcher: 'שנה שפה',
};

export const privacyPolicyTranslations: Record<PrivacyPolicyLanguage, PrivacyPolicyTranslations> = {
  he: privacyPolicyHE,
  // English, Arabic, Russian will be added below
  en: {} as PrivacyPolicyTranslations, // Placeholder - full version would include all translations
  ar: {} as PrivacyPolicyTranslations,
  ru: {} as PrivacyPolicyTranslations,
};

// English Translation
export const privacyPolicyEN: PrivacyPolicyTranslations = {
  meta: {
    title: 'Privacy Policy',
    readingTime: 'Estimated reading time: ~4 minutes',
    lastUpdated: 'Last updated: February 26, 2026',
    effectiveDate: 'Effective date: August 14, 2025',
  },
  toc: {
    title: 'Table of Contents',
    sections: [
      { id: 'section-1', title: 'Introduction & Data Controller Identity' },
      { id: 'section-2', title: 'What Data We Collect' },
      { id: 'section-3', title: 'Purposes and Legal Basis' },
      { id: 'section-4', title: 'Who Receives Your Data' },
      { id: 'section-5', title: 'International Data Transfers' },
      { id: 'section-6', title: 'Data Retention Periods' },
      { id: 'section-7', title: 'Consequences of Not Providing Data' },
      { id: 'section-8', title: 'Your Rights Under Law' },
      { id: 'section-9', title: 'Right to Complain' },
      { id: 'section-10', title: 'Cookies' },
      { id: 'section-11', title: 'Automated Decision-Making and AI' },
      { id: 'section-12', title: 'Data Security' },
      { id: 'section-13', title: 'Policy Updates' },
    ],
  },
  sections: {
    intro: {
      title: 'Section 1: Introduction & Data Controller Identity',
      controller: {
        title: 'Data Controller Details:',
        businessName: 'Business Name: Anton - Aluminum & Steel Solutions',
        owner: 'Owner: [Owner Name]',
        address: 'Address: 12 HaMelacha St., Holon Industrial Zone, Israel',
        email: 'Privacy Contact Email: info@anton-aluminum.com',
        website: 'Website: https://anton-aluminum.co.il',
      },
      legalBasis: 'This privacy policy is written in accordance with the Protection of Privacy Law (PPL) 5741-1981 and Amendment 13 (effective August 14, 2025), as well as the Privacy Protection Authority\'s July 2022 official notification guidelines.',
    },
    dataCollected: {
      title: 'Section 2: What Data We Collect',
      directData: {
        title: 'a) Data you provide directly:',
        description: 'When you use our forms or contact us:',
        items: [
          'Full name - for personal communication',
          'Email address - for correspondence and responses',
          'Phone number - for contact purposes',
          'Message content - to provide an appropriate response',
        ],
      },
      autoData: {
        title: 'b) Data collected automatically:',
        description: 'When browsing our website, we automatically collect:',
        items: [
          'IP address - your device\'s internet address',
          'Browser type and version - e.g., Chrome 120, Safari 17',
          'Device type - desktop, mobile, or tablet',
          'Pages visited and time spent on each',
          'Referrer URL - the website you came from',
        ],
        ipNote: 'Important note: Under Amendment 13 to the Privacy Protection Law, IP addresses are classified as "personal data" and are protected as such.',
      },
      thirdPartyData: {
        title: 'c) Data from third-party tools:',
        description: 'We use the following tools that may collect data:',
        tools: [
          { name: 'Google Analytics 4', data: 'Session data, page views, device information, browsing behavior' },
          { name: 'Facebook/Meta Pixel', data: 'Browsing behavior for ad targeting and conversion tracking' },
          { name: 'Google Ads', data: 'Ad interaction, conversion data' },
          { name: 'Google Tag Manager', data: 'Tag management and event tracking' },
          { name: 'WhatsApp Business', data: 'Messages and business communication' },
        ],
      },
    },
    purposes: {
      title: 'Section 3: Purposes and Legal Basis for Processing',
      intro: 'We process your data for the following purposes, on the legal basis indicated:',
      items: [
        { purpose: 'Responding to inquiries and requests via contact form', basis: 'Legitimate interest', basisType: 'legitimate' },
        { purpose: 'Statistical analysis and improving user experience', basis: 'Consent', basisType: 'consent' },
        { purpose: 'Displaying personalized ads and marketing targeting', basis: 'Consent', basisType: 'consent' },
        { purpose: 'Website security and fraud prevention', basis: 'Legitimate interest', basisType: 'legitimate' },
        { purpose: 'Direct marketing communication (with consent)', basis: 'Consent', basisType: 'consent' },
      ],
    },
    recipients: {
      title: 'Section 4: Who Receives Your Data',
      intro: 'Your data may be transferred to the following parties:',
      recipients: [
        { name: 'Google LLC', country: 'United States', purpose: 'Analytics and advertising services (GA4, Google Ads, GTM)' },
        { name: 'Meta Platforms Inc.', country: 'United States', purpose: 'Facebook Pixel for tracking and ad targeting' },
        { name: 'Hosting Provider', country: '[Hosting Country]', purpose: 'Website and database hosting' },
        { name: 'WhatsApp/Meta', country: 'United States', purpose: 'Communication via WhatsApp Business' },
      ],
      noSelling: 'We hereby declare: We do not sell your personal data to any third party.',
    },
    transfers: {
      title: 'Section 5: International Data Transfers',
      intro: 'Some of the providers we use (Google, Meta) are located in the United States, which is not defined as a country with an adequate level of protection under Israeli law.',
      usaNote: 'Accordingly, we ensure data transfers are subject to appropriate safeguards:',
      safeguards: 'Standard Contractual Clauses (SCC) - contractual clauses approved by the European Union that provide legal protection for cross-border data transfers. Additionally, Google and Meta operate under the EU-US Data Privacy Framework.',
    },
    retention: {
      title: 'Section 6: Data Retention Periods',
      items: [
        { type: 'Contact form data:', period: '24 months from submission, or until deletion request' },
        { type: 'Analytics data (Google Analytics):', period: '14 months (Google default)' },
        { type: 'Marketing and advertising data:', period: 'Until consent withdrawal or deletion request' },
        { type: 'Server logs (IP addresses):', period: '90 days' },
        { type: 'Cookie consent data:', period: '12 months' },
      ],
    },
    consequences: {
      title: 'Section 7: Consequences of Not Providing Data (Required under Section 11)',
      intro: 'As required by Amendment 13, we detail the consequences of not providing data:',
      contactForm: 'Providing your name and email in the contact form is voluntary. However, if you do not provide them, we cannot respond to your inquiry or provide the requested service.',
      cookies: 'You can decline analytics and marketing cookies. The website will still function fully — only tracking and targeting features will be disabled.',
    },
    rights: {
      title: 'Section 8: Your Rights Under Law',
      intro: 'Under the Privacy Protection Law, you have the following rights:',
      items: [
        { right: 'Right of access:', description: 'You may request a copy of your personal data stored with us.' },
        { right: 'Right to rectification:', description: 'You may request correction of inaccurate or outdated data.' },
        { right: 'Right to erasure:', description: 'You may request deletion of your data when no longer needed for the purposes collected.' },
        { right: 'Right to object:', description: 'You may object to processing of your data for direct marketing.' },
        { right: 'Right to withdraw consent:', description: 'At any time, without affecting prior processing.' },
        { right: 'Right to data portability:', description: 'To receive your data in an accessible, structured format.' },
      ],
      howToExercise: 'To exercise your rights, send an email to: info@anton-aluminum.com with subject: "Privacy Rights Request"',
      responseTime: 'We will respond to your request within 30 days of receipt.',
    },
    complaint: {
      title: 'Section 9: Right to Complain to the PPA',
      intro: 'If you believe your privacy rights have been violated, you have the right to file a complaint with the Privacy Protection Authority (PPA):',
      authority: {
        name: 'Privacy Protection Authority',
        address: 'Address: 66 Kanfei Nesharim St., Jerusalem, Israel',
        website: 'Website:',
        websiteUrl: 'gov.il/en/departments/the_privacy_protection_authority',
      },
    },
    cookies: {
      title: 'Section 10: Cookies',
      intro: 'The website uses cookies in three categories:',
      categories: [
        {
          name: 'Essential Cookies',
          description: 'Required for basic website functionality (preferences, security). Cannot be disabled.',
          canDisable: 'Cannot be disabled',
        },
        {
          name: 'Analytics Cookies',
          description: 'Google Analytics - tracks usage data for website improvement. Requires consent.',
          canDisable: 'Can be disabled',
        },
        {
          name: 'Marketing Cookies',
          description: 'Facebook Pixel, Google Ads - for displaying personalized ads. Requires consent.',
          canDisable: 'Can be disabled',
        },
      ],
      manageLink: 'To manage your cookie preferences, click here or scroll to the bottom of the page.',
    },
    ai: {
      title: 'Section 11: Automated Decision-Making and AI',
      statement: 'We do not make automated decisions based on artificial intelligence that may significantly affect you (such as credit scoring, employment decisions, or insurance decisions).',
    },
    security: {
      title: 'Section 12: Data Security',
      measures: [
        'SSL/TLS encryption for all communication between browser and server (HTTPS)',
        'Access control - limited access to personal data for authorized employees only',
        'Regular backups and environment separation',
        'Continuous monitoring and security audits',
      ],
      breachProcedure: 'In the event of a significant data breach, we will notify affected individuals and the Privacy Protection Authority within 72 hours of discovery, in accordance with the law.',
    },
    updates: {
      title: 'Section 13: Policy Updates',
      statement: 'We may update this privacy policy from time to time. The last updated date appears at the top of this document.',
      notificationMethod: 'In case of material changes, we will notify you via prominent notice on the website or email to registered users.',
    },
  },
  languageSwitcher: 'Change Language',
};

// Assign English to translations object
privacyPolicyTranslations.en = privacyPolicyEN;
