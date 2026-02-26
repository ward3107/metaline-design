/**
 * Cookie Consent Translations
 * Supports: Hebrew (he), Arabic (ar), English (en), Russian (ru)
 *
 * Amendment 13 compliant descriptions for each cookie category
 */

export type CookieConsentLanguage = 'he' | 'ar' | 'en' | 'ru';

export interface CookieConsentTranslations {
  title: string;
  description: string;
  privacyPolicyLink: string;
  acceptAll: string;
  rejectAll: string;
  customize: string;
  savePreferences: string;
  languageSwitcher: string;
  categories: {
    essential: {
      title: string;
      description: string;
      badge: string;
    };
    analytics: {
      title: string;
      description: string;
    };
    marketing: {
      title: string;
      description: string;
    };
  };
}

export const cookieConsentTranslations: Record<CookieConsentLanguage, CookieConsentTranslations> = {
  he: {
    title: 'הגדרות עוגיות',
    description: 'אנו משתמשים בעוגיות כדי לשפר את חווית הגלישה שלך, להציג תוכן מותאם אישית ולנתח את התנועה באתר. אנא בחר/י אילו עוגיות ברצונך לאשר.',
    privacyPolicyLink: 'מדיניות הפרטיות',
    acceptAll: 'קבל הכל',
    rejectAll: 'דחה הכל',
    customize: 'התאמה אישית',
    savePreferences: 'שמור העדפות',
    languageSwitcher: 'שנה שפה',
    categories: {
      essential: {
        title: 'עוגיות הכרחיות',
        description: 'נדרשות לתפקוד התקין של האתר. עוגיות אלו מאפשרות ניווט באתר, גישה לאזורים מאובטחים ושמירת העדפות בסיסיות. אינן מכילות מידע אישי מזהה ואינן משותפות עם צדדים שלישיים. לא ניתן לבטל אותן.',
        badge: 'נדרש',
      },
      analytics: {
        title: 'עוגיות אנליטיקה',
        description: 'Google Analytics - עוקבות אחר צפיות בדפים, משך ביקור, דפי כניסה ויציאה והתנהגות גלישה. המידע נשלח לשרתי Google בארה"ב. אינו מכיל מידע אישי מזהה. משמש לשיפור האתר וחווית המשתמש.',
      },
      marketing: {
        title: 'עוגיות שיווקיות',
        description: 'Facebook Pixel, Google Ads - משמשות להצגת פרסומות רלוונטיות ומותאמות אישית. המידע משותף עם Meta (פייסבוק) ו-Google לצורכי מיקוד פרסומות ומעקב המרות. עשוי לכלול מזהי מכשיר והתנהגות גלישה.',
      },
    },
  },
  ar: {
    title: 'إعدادات ملفات تعريف الارتباط',
    description: 'نستخدم ملفات تعريف الارتباط لتحسين تجربة التصفح الخاصة بك وعرض المحتوى المخصص وتحليل حركة المرور على الموقع. يرجى اختيار ملفات تعريف الارتباط التي ترغب في قبولها.',
    privacyPolicyLink: 'سياسة الخصوصية',
    acceptAll: 'قبول الكل',
    rejectAll: 'رفض الكل',
    customize: 'تخصيص',
    savePreferences: 'حفظ التفضيلات',
    languageSwitcher: 'تغيير اللغة',
    categories: {
      essential: {
        title: 'ملفات تعريف الارتباط الضرورية',
        description: 'مطلوبة لعمل الموقع بشكل صحيح. تتيح هذه الملفات التنقل في الموقع والوصول إلى المناطق الآمنة وحفظ التفضيلات الأساسية. لا تحتوي على معلومات شخصية ولا تتم مشاركتها مع أطراف ثالثة. لا يمكن تعطيلها.',
        badge: 'مطلوب',
      },
      analytics: {
        title: 'ملفات تعريف الارتباط التحليلية',
        description: 'Google Analytics - تتتبع مشاهدات الصفحات ومدة الزيارة وصفحات الدخول والخروج وسلوك التصفح. يتم إرسال المعلومات إلى خوادم Google في الولايات المتحدة. لا تحتوي على معلومات شخصية. تُستخدم لتحسين الموقع.',
      },
      marketing: {
        title: 'ملفات تعريف الارتباط التسويقية',
        description: 'Facebook Pixel، Google Ads - تُستخدم لعرض إعلانات ذات صلة ومخصصة. تتم مشاركة المعلومات مع Meta (فيسبوك) وGoogle لأغراض استهداف الإعلانات وتتبع التحويلات. قد تتضمن معرفات الأجهزة وسلوك التصفح.',
      },
    },
  },
  en: {
    title: 'Cookie Settings',
    description: 'We use cookies to improve your browsing experience, serve personalized content, and analyze our traffic. Please select which cookies you would like to accept.',
    privacyPolicyLink: 'Privacy Policy',
    acceptAll: 'Accept All',
    rejectAll: 'Reject All',
    customize: 'Customize',
    savePreferences: 'Save Preferences',
    languageSwitcher: 'Change Language',
    categories: {
      essential: {
        title: 'Essential Cookies',
        description: 'Required for the website to function properly. These cookies enable site navigation, access to secure areas, and saving basic preferences. They contain no personally identifiable information and are not shared with third parties. Cannot be disabled.',
        badge: 'Required',
      },
      analytics: {
        title: 'Analytics Cookies',
        description: 'Google Analytics - Tracks page views, session duration, entry and exit pages, and browsing behavior. Information is sent to Google servers in the USA. Contains no personally identifiable data. Used to improve the website and user experience.',
      },
      marketing: {
        title: 'Marketing Cookies',
        description: 'Facebook Pixel, Google Ads - Used to display relevant and personalized advertisements. Information is shared with Meta (Facebook) and Google for ad targeting and conversion tracking. May include device identifiers and browsing behavior.',
      },
    },
  },
  ru: {
    title: 'Настройки файлов cookie',
    description: 'Мы используем файлы cookie для улучшения вашего опыта просмотра, показа персонализированного контента и анализа трафика. Пожалуйста, выберите, какие файлы cookie вы хотите принять.',
    privacyPolicyLink: 'Политика конфиденциальности',
    acceptAll: 'Принять все',
    rejectAll: 'Отклонить все',
    customize: 'Настроить',
    savePreferences: 'Сохранить настройки',
    languageSwitcher: 'Сменить язык',
    categories: {
      essential: {
        title: 'Необходимые файлы cookie',
        description: 'Требуются для правильной работы сайта. Эти файлы cookie позволяют навигацию по сайту, доступ к защищенным областям и сохранение базовых настроек. Они не содержат личной информации и не передаются третьим лицам. Невозможно отключить.',
        badge: 'Обязательно',
      },
      analytics: {
        title: 'Аналитические файлы cookie',
        description: 'Google Analytics - отслеживает просмотры страниц, продолжительность сеанса, страницы входа и выхода, а также поведение при просмотре. Информация отправляется на серверы Google в США. Не содержит личных данных. Используется для улучшения сайта.',
      },
      marketing: {
        title: 'Маркетинговые файлы cookie',
        description: 'Facebook Pixel, Google Ads - используются для показа релевантной и персонализированной рекламы. Информация передается Meta (Facebook) и Google для таргетинга рекламы и отслеживания конверсий. Может включать идентификаторы устройств.',
      },
    },
  },
};

/**
 * Get the appropriate language code for cookie consent
 * Maps browser language to supported languages
 */
export function mapToSupportedLanguage(browserLang: string): CookieConsentLanguage {
  const lang = browserLang.toLowerCase().split('-')[0];

  if (lang === 'he' || lang === 'iw') return 'he';
  if (lang === 'ar') return 'ar';
  if (lang === 'ru') return 'ru';
  return 'en'; // Default to English
}

/**
 * Check if a language is RTL
 */
export function isRTLLanguage(lang: CookieConsentLanguage): boolean {
  return lang === 'he' || lang === 'ar';
}
