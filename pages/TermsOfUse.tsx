/**
 * Terms of Use Page
 * Complies with Israeli Contract Law (General Part) 5733-1973
 * Israeli Consumer Protection Law 5741-1981
 *
 * Built: 2026-02-26
 */

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { useLanguage } from '../context/LanguageContext';
import { FileText, Mail, MapPin, Scale, AlertTriangle, Link2, Shield, Globe, Clock, ArrowLeft, ArrowRight, ChevronRight, Menu, X, CheckCircle } from 'lucide-react';
import { CONTACT_CONFIG, COMPANY_NAME } from '../constants';

export const TermsOfUse: React.FC = () => {
  const { language, direction } = useLanguage();
  const isRTL = direction === 'rtl';
  const Arrow = isRTL ? ArrowRight : ArrowLeft;
  const [activeSection, setActiveSection] = useState<string>('section-1');
  const [showMobileNav, setShowMobileNav] = useState(false);

  const lastUpdated = new Date('2026-02-26');

  const formatDate = (date: Date, lang: string) => {
    if (lang === 'he') return date.toLocaleDateString('he-IL', { year: 'numeric', month: 'long', day: 'numeric' });
    if (lang === 'ar') return date.toLocaleDateString('ar-IL', { year: 'numeric', month: 'long', day: 'numeric' });
    if (lang === 'ru') return date.toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' });
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id^="section-"]');
      let current = 'section-1';

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= 150) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    setShowMobileNav(false);
  };

  // Translations
  const content = {
    he: {
      title: 'תנאי שימוש',
      subtitle: 'תנאים המסדירים את השימוש באתר',
      lastUpdated: 'עודכן לאחרונה',
      backToHome: 'חזרה לדף הבית',
      tableOfContents: 'תוכן העניינים',
      sections: [
        { id: 'section-1', title: 'מבוא וקבלת התנאים' },
        { id: 'section-2', title: 'מי רשאי להשתמש באתר' },
        { id: 'section-3', title: 'התנהגות מותרת ואסורה' },
        { id: 'section-4', title: 'קניין רוחני' },
        { id: 'section-5', title: 'הצהרת הוראות' },
        { id: 'section-6', title: 'הגבלת אחריות' },
        { id: 'section-7', title: 'קישורים חיצוניים' },
        { id: 'section-8', title: 'פרטיות' },
        { id: 'section-9', title: 'שינויים בתנאים' },
        { id: 'section-10', title: 'דין ומשפט' },
      ],
      s1: {
        title: '1. מבוא וקבלת התנאים',
        intro: `תנאי שימוש אלו ("התנאים") מסדירים את השימוש באתר האינטרנט של ${COMPANY_NAME} ("האתר").`,
        owner: `בעל האתר: ${COMPANY_NAME}`,
        address: `כתובת: ${CONTACT_CONFIG.address.street}, ${CONTACT_CONFIG.address.city}, ${CONTACT_CONFIG.address.country}`,
        email: `דוא"ל: ${CONTACT_CONFIG.email}`,
        acceptance: 'קבלה פעילה של תנאים',
        acceptanceNote: 'לפי חוק החוזים (חלק כללי), התשי"ג-1973, נדרשת הסכמה פעילה לתנאים. על כן, בעת שליחת טופס יצירת קשר או הרשמה לאתר, תתבקשו לסמן תיבת סימון (לא מסומנת כברירת מחדל) המאשרת כי קראתם והסכמתם לתנאים אלה.',
        checkbox: '"קראתי ואני מסכים/ה לתנאי השימוש"',
      },
      s2: {
        title: '2. מי רשאי להשתמש באתר',
        p1: 'השימוש באתר מותר לכל אדם שמלאו לו 18 שנה או לקטינים באישור הוריהם או אפוטרופוסיהם.',
        p2: 'המשתמש מצהיר ומתחייב כי יש לו כשרות משפטית להתקשרות בהסכם מחייב.',
        p3: 'האתר עשוי להיות לא זמין בתחומי שיפוט מסוימים. המשתמש אחראי לוודא כי השימוש באתר חוקי בתחום השיפוט בו הוא נמצא.',
      },
      s3: {
        title: '3. התנהגות מותרת ואסורה',
        permitted: 'שימושים מותרים:',
        permittedItems: [
          'גלישה באתר וצפייה בתוכן',
          'יצירת קשר דרך טופסי היצירת קשר',
          'שיתוף קישורים לאתר ברשתות חברתיות',
        ],
        prohibited: 'שימושים אסורים:',
        prohibitedItems: [
          'גרידת נתונים (scraping) או איסוף אוטומטי של מידע',
          'גישה אוטומטית או רובוטית לאתר',
          'ניסיון לפרוץ או לפגוע באבטחת האתר',
          'הגשת מידע כוזב או מטעה בטפסים',
          'התחזות לאדם אחר',
          'שליחת ספאם או קוד זדוני',
          'שימוש באתר לפעילויות בלתי חוקיות',
        ],
      },
      s4: {
        title: '4. קניין רוחני',
        p1: `כל התוכן באתר, לרבות טקסטים, תמונות, עיצוב, סמלים וקוד, הינו קניינה של ${COMPANY_NAME} אלא אם צוין אחרת.`,
        p2: 'הזכויות מוגנות לפי חוק זכויות יוצרים, התשס"ח-2007.',
        p3: 'אין להעתיק, להפיץ או לעשות שימוש מסחרי בתוכן ללא הרשאה בכתב מראש.',
        p4: 'סימנים מסחריים ולוגואים של צדדים שלישיים שייכים לבעליהם בהתאמה.',
      },
      s5: {
        title: '5. הצהרת הוראות',
        p1: 'האתר מסופק "כפי שהוא" - אין הבטחה לגישה רציפה או נטולת שגיאות.',
        p2: 'המידע מסופק בתום לב אך עשוי לא להיות מדויק או מלא.',
        caveat: 'הערה חשובה: לפי חוק הגנת הצרכן, אין לשלול אחריות מכללא מסוימות בעסקאות עם צרכנים. הוראות אלה כפופות לזכויות המוקנות לצרכנים לפי דין.',
      },
      s6: {
        title: '6. הגבלת אחריות',
        p1: `הבעלים (${COMPANY_NAME}) אינם אחראים לנזקים עקיפים, מקריים או תוצאתיים.`,
        p2: 'אין אחריות לקישורים לאתרי צד שלישי או שירותים חיצוניים.',
        p3: 'האחריות המרבית מוגבלת לסכום ששילם המשתמש (אם בכלל).',
        note: 'הערה: בתי המשפט בישראל עשויים להגביל סעיפי פטור רחבים - נעשה שימוש בשפה מידתית.',
      },
      s7: {
        title: '7. קישורים חיצוניים',
        p1: 'קישורים לאתרים חיצוניים מסופקים לנוחות בלבד.',
        p2: 'איננו תומכים או שולטים באתרים חיצוניים ובתוכנם.',
      },
      s8: {
        title: '8. פרטיות',
        p1: 'השימוש באתר מוסדר גם על ידי',
        privacyPolicy: 'מדיניות הפרטיות',
        p2: 'מדיניות הפרטיות משולבת בהפניה לתוך תנאי שימוש אלה.',
      },
      s9: {
        title: '9. שינויים בתנאים',
        p1: 'אנו רשאים לעדכן תנאים אלה בכל עת - תאריך העדכון האחרון מוצג בראש המסמך.',
        p2: 'המשך השימוש לאחר שינויים = הסכמה לתנאים החדשים.',
        p3: 'שינויים מהותיים: נודיע בדוא"ל או בבאנר בולט באתר.',
      },
      s10: {
        title: '10. דין ומשפט',
        p1: 'תנאים אלה כפופים לדיני מדינת ישראל.',
        p2: `סמכות שיפוט בלעדית: בתי המשפט ב${CONTACT_CONFIG.address.city}, ישראל.`,
        p3: 'חלופה: סכסוכים עד ₪75,000 ניתן להגיש בבית משפט לתביעות קטנות.',
        contact: `ליצירת קשר לפני פתיחת הליכים משפטיים: ${CONTACT_CONFIG.email}`,
      },
    },
    ar: {
      title: 'شروط الاستخدام',
      subtitle: 'الشروط المنظمة لاستخدام الموقع',
      lastUpdated: 'آخر تحديث',
      backToHome: 'العودة إلى الصفحة الرئيسية',
      tableOfContents: 'جدول المحتويات',
      sections: [
        { id: 'section-1', title: 'مقدمة وقبول الشروط' },
        { id: 'section-2', title: 'من يحق له استخدام الموقع' },
        { id: 'section-3', title: 'السلوك المسموح والمحظور' },
        { id: 'section-4', title: 'الملكية الفكرية' },
        { id: 'section-5', title: 'إخلاء المسؤولية' },
        { id: 'section-6', title: 'تحديد المسؤولية' },
        { id: 'section-7', title: 'الروابط الخارجية' },
        { id: 'section-8', title: 'الخصوصية' },
        { id: 'section-9', title: 'تغييرات الشروط' },
        { id: 'section-10', title: 'القانون الحاكم' },
      ],
      s1: {
        title: '1. مقدمة وقبول الشروط',
        intro: `تنظم شروط الاستخدام هذه ("الشروط") استخدام موقع ${COMPANY_NAME} ("الموقع").`,
        owner: `مالك الموقع: ${COMPANY_NAME}`,
        address: `العنوان: ${CONTACT_CONFIG.address.street}, ${CONTACT_CONFIG.address.city}, ${CONTACT_CONFIG.address.country}`,
        email: `البريد الإلكتروني: ${CONTACT_CONFIG.email}`,
        acceptance: 'القبول الفعال للشروط',
        acceptanceNote: 'وفقاً لقانون العقود (الجزء العام)، يتطلب الموافقة الفعالة على الشروط. لذلك، عند إرسال نموذج الاتصال أو التسجيل في الموقع، سيُطلب منك تحديد مربع اختيار (غير محدد افتراضياً) يؤكد أنك قرأت ووافقت على هذه الشروط.',
        checkbox: '"لقد قرأت وأوافق على شروط الاستخدام"',
      },
      s2: {
        title: '2. من يحق له استخدام الموقع',
        p1: 'يُسمح باستخدام الموقع لكل من بلغ 18 عاماً أو للقصرين بموافقة أوليائهم أو أوصيائهم.',
        p2: 'يقرر المستخدم ويتعهد بأن لديه الأهلية القانونية للتعاقد.',
        p3: 'قد لا يكون الموقع متاحاً في ولايات قضائية معينة. المستخدم مسؤول عن التأكد من أن استخدام الموقع قانوني في الولاية القضائية التي يقع فيها.',
      },
      s3: {
        title: '3. السلوك المسموح والمحظور',
        permitted: 'الاستخدامات المسموحة:',
        permittedItems: [
          'تصفح الموقع ومشاهدة المحتوى',
          'الاتصال عبر نماذج الاتصال',
          'مشاركة روابط الموقع على الشبكات الاجتماعية',
        ],
        prohibited: 'الاستخدامات المحظورة:',
        prohibitedItems: [
          'كشط البيانات أو جمع المعلومات تلقائياً',
          'الوصول الآلي أو الروبوتي للموقع',
          'محاولة الاختراق أو الإضرار بأمان الموقع',
          'تقديم معلومات خاطئة أو مضللة في النماذج',
          'انتحال شخصية شخص آخر',
          'إرسال البريد العشوائي أو البرمجيات الخبيثة',
          'استخدام الموقع لأنشطة غير قانونية',
        ],
      },
      s4: {
        title: '4. الملكية الفكرية',
        p1: `جميع المحتوى على الموقع، بما في ذلك النصوص والصور والتصميم والشعارات والكود، هو ملك ${COMPANY_NAME} ما لم يُذكر خلاف ذلك.`,
        p2: 'الحقوق محمية بموجب قانون حقوق المؤلف 2007.',
        p3: 'يُحظر النسخ أو التوزيع أو الاستخدام التجاري للمحتوى بدون إذن كتابي مسبق.',
        p4: 'تنتمي العلامات التجارية وشعارات الأطراف الثالثة إلى أصحابها على التوالي.',
      },
      s5: {
        title: '5. إخلاء المسؤولية',
        p1: 'الموقع متاح "كما هو" - لا يوجد ضمان للوصول المستمر أو الخالي من الأخطاء.',
        p2: 'يُقدم المعلومات بحسن نية ولكن قد لا تكون دقيقة أو كاملة.',
        caveat: 'ملاحظة مهمة: وفقاً لقانون حماية المستهلك، لا يجوز استبعاد بعض الضمانات الضمنية في المعاملات مع المستهلكين. تخضع هذه الأحكام للحقوق الممنوحة للمستهلكين بموجب القانون.',
      },
      s6: {
        title: '6. تحديد المسؤولية',
        p1: `المالك (${COMPANY_NAME}) غير مسؤول عن الأضرار غير المباشرة أو العرضية أو الناتجة.`,
        p2: 'لا توجد مسؤولية عن روابط مواقع الطرف الثالث أو الخدمات الخارجية.',
        p3: 'الحد الأقصى للمسؤولية يقتصر على المبلغ الذي دفعه المستخدم (إن وجد).',
        note: 'ملاحظة: قد تحد المحاكم الإسرائيلية من بنود الإعفاء الواسعة - نستخدم لغة متناسبة.',
      },
      s7: {
        title: '7. الروابط الخارجية',
        p1: 'روابط المواقع الخارجية مقدمة للراحة فقط.',
        p2: 'نحن لا ندعم أو نتحكم في المواقع الخارجية ومحتواها.',
      },
      s8: {
        title: '8. الخصوصية',
        p1: 'يخضع استخدام الموقع أيضاً لـ',
        privacyPolicy: 'سياسة الخصوصية',
        p2: 'سياسة الخصوصية مدمجة بالإحالة في شروط الاستخدام هذه.',
      },
      s9: {
        title: '9. تغييرات الشروط',
        p1: 'يمكننا تحديث هذه الشروط في أي وقت - يظهر تاريخ آخر تحديث في أعلى الوثيقة.',
        p2: 'استمرار الاستخدام بعد التغييرات = قبول الشروط الجديدة.',
        p3: 'التغييرات الجوهرية: سنخططر عبر البريد الإلكتروني أو شعار بارز على الموقع.',
      },
      s10: {
        title: '10. القانون الحاكم',
        p1: 'تخضع هذه الشروط لقوانين دولة إسرائيل.',
        p2: `الاختصاص القضائي الحصري: محاكم ${CONTACT_CONFIG.address.city}، إسرائيل.`,
        p3: 'بديل: النزاعات حتى ₪75,000 يمكن تقديمها في محكمة المطالبات الصغيرة.',
        contact: `للاتصال قبل بدء الإجراءات القانونية: ${CONTACT_CONFIG.email}`,
      },
    },
    en: {
      title: 'Terms of Use',
      subtitle: 'Terms governing the use of this website',
      lastUpdated: 'Last Updated',
      backToHome: 'Back to Home',
      tableOfContents: 'Table of Contents',
      sections: [
        { id: 'section-1', title: 'Introduction and Acceptance' },
        { id: 'section-2', title: 'Who May Use This Website' },
        { id: 'section-3', title: 'Permitted and Prohibited Conduct' },
        { id: 'section-4', title: 'Intellectual Property' },
        { id: 'section-5', title: 'Disclaimer of Warranties' },
        { id: 'section-6', title: 'Limitation of Liability' },
        { id: 'section-7', title: 'External Links' },
        { id: 'section-8', title: 'Privacy' },
        { id: 'section-9', title: 'Changes to Terms' },
        { id: 'section-10', title: 'Governing Law' },
      ],
      s1: {
        title: '1. Introduction and Acceptance',
        intro: `These Terms of Use ("Terms") govern your use of the ${COMPANY_NAME} website ("Website").`,
        owner: `Website Owner: ${COMPANY_NAME}`,
        address: `Address: ${CONTACT_CONFIG.address.street}, ${CONTACT_CONFIG.address.city}, ${CONTACT_CONFIG.address.country}`,
        email: `Email: ${CONTACT_CONFIG.email}`,
        acceptance: 'Active Acceptance of Terms',
        acceptanceNote: 'Under Israeli Contract Law (General Part) 5733-1973, active consent to terms is required. Therefore, when submitting a contact form or registering on the website, you will be asked to check a checkbox (unchecked by default) confirming that you have read and agree to these Terms.',
        checkbox: '"I have read and agree to the Terms of Use"',
      },
      s2: {
        title: '2. Who May Use This Website',
        p1: 'Use of the website is permitted to anyone 18 years of age or older, or to minors with parental or guardian consent.',
        p2: 'The user represents and warrants that they have legal capacity to enter into a binding agreement.',
        p3: 'The website may not be available in certain jurisdictions. The user is responsible for ensuring that use of the website is legal in their jurisdiction.',
      },
      s3: {
        title: '3. Permitted and Prohibited Conduct',
        permitted: 'Permitted Uses:',
        permittedItems: [
          'Browsing the website and viewing content',
          'Contacting us through contact forms',
          'Sharing links to the website on social media',
        ],
        prohibited: 'Prohibited Uses:',
        prohibitedItems: [
          'Scraping or automated collection of data',
          'Automated or robotic access to the website',
          'Attempting to breach or compromise website security',
          'Submitting false or misleading information in forms',
          'Impersonating another person',
          'Transmitting spam or malicious code',
          'Using the website for illegal activities',
        ],
      },
      s4: {
        title: '4. Intellectual Property',
        p1: `All content on the website, including texts, images, design, logos, and code, is owned by ${COMPANY_NAME} unless stated otherwise.`,
        p2: 'Rights are protected under Israeli Copyright Law 5768-2007.',
        p3: 'No reproduction, distribution, or commercial use is permitted without prior written permission.',
        p4: 'Third-party trademarks and logos belong to their respective owners.',
      },
      s5: {
        title: '5. Disclaimer of Warranties',
        p1: 'The website is provided "as is" - no guarantee of uninterrupted or error-free access.',
        p2: 'Information is provided in good faith but may not be accurate or complete.',
        caveat: 'Important Note: Under Israeli Consumer Protection Law, certain implied warranties cannot be excluded in transactions with consumers. These provisions are subject to rights granted to consumers by law.',
      },
      s6: {
        title: '6. Limitation of Liability',
        p1: `The owner (${COMPANY_NAME}) is not liable for indirect, incidental, or consequential damages.`,
        p2: 'No liability for links to third-party websites or external services.',
        p3: 'Maximum liability is capped at the amount paid by the user (if any).',
        note: 'Note: Israeli courts may limit broad exclusion clauses - proportionate language is used.',
      },
      s7: {
        title: '7. External Links',
        p1: 'Links to external websites are provided for convenience only.',
        p2: 'We do not endorse or control external websites and their content.',
      },
      s8: {
        title: '8. Privacy',
        p1: 'Use of this website is also governed by our',
        privacyPolicy: 'Privacy Policy',
        p2: 'The Privacy Policy is incorporated by reference into these Terms of Use.',
      },
      s9: {
        title: '9. Changes to Terms',
        p1: 'We may update these terms at any time - the last updated date is shown at the top of this document.',
        p2: 'Continued use after changes = acceptance of new terms.',
        p3: 'Material changes: we will notify by email or prominent banner on the website.',
      },
      s10: {
        title: '10. Governing Law',
        p1: 'These terms are governed by the laws of the State of Israel.',
        p2: `Exclusive jurisdiction: courts of ${CONTACT_CONFIG.address.city}, Israel.`,
        p3: 'Alternative: disputes under ₪75,000 may be filed in Small Claims Court.',
        contact: `Contact ${CONTACT_CONFIG.email} before initiating legal proceedings.`,
      },
    },
    ru: {
      title: 'Условия использования',
      subtitle: 'Условия, регулирующие использование этого сайта',
      lastUpdated: 'Последнее обновление',
      backToHome: 'Вернуться на главную',
      tableOfContents: 'Содержание',
      sections: [
        { id: 'section-1', title: 'Введение и принятие условий' },
        { id: 'section-2', title: 'Кто может использовать сайт' },
        { id: 'section-3', title: 'Разрешенное и запрещенное поведение' },
        { id: 'section-4', title: 'Интеллектуальная собственность' },
        { id: 'section-5', title: 'Отказ от гарантий' },
        { id: 'section-6', title: 'Ограничение ответственности' },
        { id: 'section-7', title: 'Внешние ссылки' },
        { id: 'section-8', title: 'Конфиденциальность' },
        { id: 'section-9', title: 'Изменения условий' },
        { id: 'section-10', title: 'Применимое право' },
      ],
      s1: {
        title: '1. Введение и принятие условий',
        intro: `Настоящие Условия использования ("Условия") регулируют использование веб-сайта ${COMPANY_NAME} ("Сайт").`,
        owner: `Владелец сайта: ${COMPANY_NAME}`,
        address: `Адрес: ${CONTACT_CONFIG.address.street}, ${CONTACT_CONFIG.address.city}, ${CONTACT_CONFIG.address.country}`,
        email: `Электронная почта: ${CONTACT_CONFIG.email}`,
        acceptance: 'Активное принятие условий',
        acceptanceNote: 'Согласно Закону о договорах (Общая часть) 5733-1973, требуется активное согласие с условиями. Поэтому при отправке формы связи или регистрации на сайте вам будет предложено отметить галочку (по умолчанию не отмечена), подтверждающую, что вы прочитали и согласны с настоящими Условиями.',
        checkbox: '"Я прочитал(а) и принимаю Условия использования"',
      },
      s2: {
        title: '2. Кто может использовать сайт',
        p1: 'Использование сайта разрешено лицам от 18 лет или несовершеннолетним с согласия родителей или опекунов.',
        p2: 'Пользователь заявляет и гарантирует, что обладает правоспособностью для заключения обязывающего соглашения.',
        p3: 'Сайт может быть недоступен в некоторых юрисдикциях. Пользователь несет ответственность за обеспечение законности использования сайта в своей юрисдикции.',
      },
      s3: {
        title: '3. Разрешенное и запрещенное поведение',
        permitted: 'Разрешенные действия:',
        permittedItems: [
          'Просмотр сайта и просмотр контента',
          'Связь через формы обратной связи',
          'Поделиться ссылками на сайт в социальных сетях',
        ],
        prohibited: 'Запрещенные действия:',
        prohibitedItems: [
          'Сбор данных (скрейпинг) или автоматический сбор информации',
          'Автоматический или роботизированный доступ к сайту',
          'Попытки взлома или нарушения безопасности сайта',
          'Предоставление ложной или вводящей в заблуждение информации в формах',
          'Выдача себя за другое лицо',
          'Отправка спама или вредоносного кода',
          'Использование сайта для незаконной деятельности',
        ],
      },
      s4: {
        title: '4. Интеллектуальная собственность',
        p1: `Весь контент на сайте, включая тексты, изображения, дизайн, логотипы и код, принадлежит ${COMPANY_NAME}, если не указано иное.`,
        p2: 'Права защищены в соответствии с Законом об авторском праве 5768-2007.',
        p3: 'Воспроизведение, распространение или коммерческое использование без предварительного письменного разрешения запрещено.',
        p4: 'Товарные знаки и логотипы третьих лиц принадлежат их соответствующим владельцам.',
      },
      s5: {
        title: '5. Отказ от гарантий',
        p1: 'Сайт предоставляется "как есть" - без гарантии непрерывного или безошибочного доступа.',
        p2: 'Информация предоставляется добросовестно, но может быть неточной или неполной.',
        caveat: 'Важное примечание: Согласно Закону о защите прав потребителей, некоторые подразумеваемые гарантии не могут быть исключены в сделках с потребителями. Эти положения подчиняются правам, предоставленным потребителям законом.',
      },
      s6: {
        title: '6. Ограничение ответственности',
        p1: `Владелец (${COMPANY_NAME}) не несет ответственности за косвенные, случайные или последующие убытки.`,
        p2: 'Нет ответственности за ссылки на сторонние сайты или внешние сервисы.',
        p3: 'Максимальная ответственность ограничена суммой, уплаченной пользователем (при наличии).',
        note: 'Примечание: Израильские суды могут ограничить широкие оговорки об освобождении от ответственности - используется соразмерная формулировка.',
      },
      s7: {
        title: '7. Внешние ссылки',
        p1: 'Ссылки на внешние сайты предоставлены только для удобства.',
        p2: 'Мы не поддерживаем и не контролируем внешние сайты и их контент.',
      },
      s8: {
        title: '8. Конфиденциальность',
        p1: 'Использование этого сайта также регулируется нашей',
        privacyPolicy: 'Политикой конфиденциальности',
        p2: 'Политика конфиденциальности включена посредством ссылки в настоящие Условия использования.',
      },
      s9: {
        title: '9. Изменения условий',
        p1: 'Мы можем обновлять эти условия в любое время - дата последнего обновления указана в верхней части документа.',
        p2: 'Продолжение использования после изменений = принятие новых условий.',
        p3: 'Существенные изменения: мы уведомим по электронной почте или через заметный баннер на сайте.',
      },
      s10: {
        title: '10. Применимое право',
        p1: 'Настоящие условия регулируются законодательством Государства Израиль.',
        p2: `Исключительная юрисдикция: суды ${CONTACT_CONFIG.address.city}, Израиль.`,
        p3: 'Альтернатива: споры на сумму до ₪75,000 могут рассматриваться в суде по мелким искам.',
        contact: `Свяжитесь с ${CONTACT_CONFIG.email} перед началом судебного разбирательства.`,
      },
    },
  };

  const t = content[language as keyof typeof content] || content.en;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 pb-20">
      {/* Header */}
      <div className="bg-primary dark:bg-black text-white py-12 md:py-20 mb-8 md:mb-12">
        <div className="container mx-auto px-4 text-center">
          <Reveal>
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
                <FileText size={32} className="text-accent" />
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{t.title}</h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              {t.subtitle}
            </p>
            <p className="mt-4 text-sm text-gray-400">
              {t.lastUpdated}: {formatDate(lastUpdated, language)}
            </p>
          </Reveal>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">

            {/* Sidebar Navigation - Desktop */}
            <aside className="hidden lg:block w-72 shrink-0">
              <div className="sticky top-24">
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-gray-100 dark:border-slate-700 p-4">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <Menu size={18} />
                    {t.tableOfContents}
                  </h3>
                  <nav className="space-y-1">
                    {t.sections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all flex items-center gap-2 ${
                          activeSection === section.id
                            ? 'bg-accent/10 text-accent font-medium'
                            : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-700'
                        }`}
                      >
                        <ChevronRight size={14} className={isRTL ? 'rotate-180' : ''} />
                        {section.title}
                      </button>
                    ))}
                  </nav>
                </div>
              </div>
            </aside>

            {/* Mobile Navigation */}
            <div className="lg:hidden">
              <button
                onClick={() => setShowMobileNav(!showMobileNav)}
                className="w-full bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-gray-100 dark:border-slate-700 p-4 flex items-center justify-between"
              >
                <span className="font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <Menu size={18} />
                  {t.tableOfContents}
                </span>
                {showMobileNav ? <X size={20} /> : <ChevronRight size={20} className={isRTL ? 'rotate-180' : ''} />}
              </button>
              {showMobileNav && (
                <div className="mt-2 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-gray-100 dark:border-slate-700 p-4">
                  <nav className="space-y-1">
                    {t.sections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                          activeSection === section.id
                            ? 'bg-accent/10 text-accent font-medium'
                            : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-700'
                        }`}
                      >
                        {section.title}
                      </button>
                    ))}
                  </nav>
                </div>
              )}
            </div>

            {/* Main Content */}
            <Reveal>
              <div className="flex-1 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-700 overflow-hidden">

                {/* Section 1: Introduction */}
                <section id="section-1" className="p-6 md:p-10 border-b border-gray-100 dark:border-slate-700">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                    <Scale size={24} className="text-accent" />
                    {t.s1.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">{t.s1.intro}</p>
                  <div className="bg-gray-50 dark:bg-slate-700/50 rounded-lg p-4 space-y-2 mb-4">
                    <p className="text-gray-700 dark:text-gray-300">{t.s1.owner}</p>
                    <p className="text-gray-700 dark:text-gray-300">{t.s1.address}</p>
                    <a href={`mailto:${CONTACT_CONFIG.email}`} className="text-accent hover:underline">{t.s1.email}</a>
                  </div>
                  <div className="bg-accent/5 dark:bg-accent/10 border border-accent/20 rounded-lg p-4">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">{t.s1.acceptance}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{t.s1.acceptanceNote}</p>
                    <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600 rounded-lg p-3 flex items-center gap-3">
                      <div className="w-5 h-5 border-2 border-accent rounded"></div>
                      <span className="text-sm text-gray-700 dark:text-gray-300">{t.s1.checkbox}</span>
                    </div>
                  </div>
                </section>

                {/* Section 2: Who May Use */}
                <section id="section-2" className="p-6 md:p-10 border-b border-gray-100 dark:border-slate-700">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t.s2.title}</h2>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start gap-2"><span className="text-accent mt-1">•</span> {t.s2.p1}</li>
                    <li className="flex items-start gap-2"><span className="text-accent mt-1">•</span> {t.s2.p2}</li>
                    <li className="flex items-start gap-2"><span className="text-accent mt-1">•</span> {t.s2.p3}</li>
                  </ul>
                </section>

                {/* Section 3: Permitted/Prohibited */}
                <section id="section-3" className="p-6 md:p-10 border-b border-gray-100 dark:border-slate-700">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t.s3.title}</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-green-600 dark:text-green-400 mb-3">{t.s3.permitted}</h3>
                      <ul className="space-y-2">
                        {t.s3.permittedItems.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-300 text-sm">
                            <CheckCircle size={16} className="text-green-500 shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-red-600 dark:text-red-400 mb-3">{t.s3.prohibited}</h3>
                      <ul className="space-y-2">
                        {t.s3.prohibitedItems.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-300 text-sm">
                            <AlertTriangle size={16} className="text-red-500 shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Section 4: IP */}
                <section id="section-4" className="p-6 md:p-10 border-b border-gray-100 dark:border-slate-700">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t.s4.title}</h2>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start gap-2"><span className="text-accent mt-1">•</span> {t.s4.p1}</li>
                    <li className="flex items-start gap-2"><span className="text-accent mt-1">•</span> {t.s4.p2}</li>
                    <li className="flex items-start gap-2"><span className="text-accent mt-1">•</span> {t.s4.p3}</li>
                    <li className="flex items-start gap-2"><span className="text-accent mt-1">•</span> {t.s4.p4}</li>
                  </ul>
                </section>

                {/* Section 5: Disclaimer */}
                <section id="section-5" className="p-6 md:p-10 border-b border-gray-100 dark:border-slate-700">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t.s5.title}</h2>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-300 mb-4">
                    <li className="flex items-start gap-2"><span className="text-accent mt-1">•</span> {t.s5.p1}</li>
                    <li className="flex items-start gap-2"><span className="text-accent mt-1">•</span> {t.s5.p2}</li>
                  </ul>
                  <p className="text-sm text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg">{t.s5.caveat}</p>
                </section>

                {/* Section 6: Limitation */}
                <section id="section-6" className="p-6 md:p-10 border-b border-gray-100 dark:border-slate-700">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t.s6.title}</h2>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-300 mb-4">
                    <li className="flex items-start gap-2"><span className="text-accent mt-1">•</span> {t.s6.p1}</li>
                    <li className="flex items-start gap-2"><span className="text-accent mt-1">•</span> {t.s6.p2}</li>
                    <li className="flex items-start gap-2"><span className="text-accent mt-1">•</span> {t.s6.p3}</li>
                  </ul>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{t.s6.note}</p>
                </section>

                {/* Section 7: External Links */}
                <section id="section-7" className="p-6 md:p-10 border-b border-gray-100 dark:border-slate-700">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t.s7.title}</h2>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start gap-2"><Link2 size={16} className="text-accent shrink-0 mt-1" /> {t.s7.p1}</li>
                    <li className="flex items-start gap-2"><Link2 size={16} className="text-accent shrink-0 mt-1" /> {t.s7.p2}</li>
                  </ul>
                </section>

                {/* Section 8: Privacy */}
                <section id="section-8" className="p-6 md:p-10 border-b border-gray-100 dark:border-slate-700">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t.s8.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    {t.s8.p1}{' '}
                    <Link to="/privacy-policy" className="text-accent hover:underline">{t.s8.privacyPolicy}</Link>.
                    {' '}{t.s8.p2}
                  </p>
                </section>

                {/* Section 9: Changes */}
                <section id="section-9" className="p-6 md:p-10 border-b border-gray-100 dark:border-slate-700">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t.s9.title}</h2>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start gap-2"><Clock size={16} className="text-accent shrink-0 mt-1" /> {t.s9.p1}</li>
                    <li className="flex items-start gap-2"><Clock size={16} className="text-accent shrink-0 mt-1" /> {t.s9.p2}</li>
                    <li className="flex items-start gap-2"><Clock size={16} className="text-accent shrink-0 mt-1" /> {t.s9.p3}</li>
                  </ul>
                </section>

                {/* Section 10: Governing Law */}
                <section id="section-10" className="p-6 md:p-10">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t.s10.title}</h2>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start gap-2"><Globe size={16} className="text-accent shrink-0 mt-1" /> {t.s10.p1}</li>
                    <li className="flex items-start gap-2"><Globe size={16} className="text-accent shrink-0 mt-1" /> {t.s10.p2}</li>
                    <li className="flex items-start gap-2"><Globe size={16} className="text-accent shrink-0 mt-1" /> {t.s10.p3}</li>
                  </ul>
                  <div className="mt-4 bg-gray-50 dark:bg-slate-700/50 rounded-lg p-4">
                    <a href={`mailto:${CONTACT_CONFIG.email}`} className="text-accent hover:underline font-medium">
                      {t.s10.contact}
                    </a>
                  </div>
                </section>

              </div>
            </Reveal>

          </div>

          {/* Back to Home */}
          <div className="mt-8 text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-colors font-medium"
            >
              <Arrow size={20} />
              {t.backToHome}
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};
