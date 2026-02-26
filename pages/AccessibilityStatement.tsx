/**
 * Accessibility Statement Page
 * Complies with Israel IS 5568 (Equal Rights for Persons with Disabilities Law)
 * WCAG 2.0 Level AA compliant
 *
 * Built: 2026-02-26
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { useLanguage } from '../context/LanguageContext';
import { Accessibility, CheckCircle, Mail, Phone, Clock, ExternalLink, ArrowLeft, ArrowRight } from 'lucide-react';
import { CONTACT_CONFIG, COMPANY_NAME } from '../constants';

export const AccessibilityStatement: React.FC = () => {
  const { language, direction } = useLanguage();
  const isRTL = direction === 'rtl';
  const Arrow = isRTL ? ArrowRight : ArrowLeft;

  // Last review date and next scheduled review
  const lastReviewDate = new Date('2026-02-26');
  const nextReviewDate = new Date(lastReviewDate);
  nextReviewDate.setFullYear(nextReviewDate.getFullYear() + 1);

  const formatDate = (date: Date, lang: string) => {
    if (lang === 'he') return date.toLocaleDateString('he-IL', { year: 'numeric', month: 'long', day: 'numeric' });
    if (lang === 'ar') return date.toLocaleDateString('ar-IL', { year: 'numeric', month: 'long', day: 'numeric' });
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  // Translations
  const content = {
    he: {
      title: 'הצהרת נגישות',
      subtitle: 'מחויבות לנגישות מלאה לכלל המשתמשים',
      lastReview: 'תאריך בדיקה אחרונה',
      nextReview: 'בדיקה מתוכננת הבאה',
      sections: {
        commitment: {
          title: '1. המחויבות שלנו',
          text: `${COMPANY_NAME} מחויבת להנגשת אתר זה לכלל המשתמשים, לרבות אנשים עם מוגבלויות, בהתאם לחוק שוויון זכויות לאנשים עם מוגבלות (התשנ"ח-1998) ולתקן הישראלי 5568 (המבוסס על WCAG 2.0 רמה AA). אנו מאמינים שכל אדם זכאי לגשת למידע ולשירותים באופן שווה ומכבד.`
        },
        compliance: {
          title: '2. רמת התאימות',
          intro: 'אתר זה עומד בדרישות WCAG 2.0 רמה AA כנדרש בתקן הישראלי 5568.',
          wcagInfo: 'הנחיות נגישות תוכן האינטרנט (WCAG) 2.0 מגדירות הנחיות להנגשת תוכן דיגיטלי. רמה AA היא רמת התאימות הנדרשת על פי חוק בישראל.',
        },
        features: {
          title: '3. תכונות נגישות שהותקנו',
          intro: 'האתר כולל מגוון תכונות נגישות המסייעות למשתמשים עם צרכים מיוחדים:',
          items: [
            { text: 'וידג׳ט נגישות עם 10 כלים להתאמה אישית (גודל טקסט, ניגודיות, ועוד)', icon: 'widget' },
            { text: 'קישור ניווט "דלג לתוכן המרכזי" לדילוג על תפריטים', icon: 'skip' },
            { text: 'מבנה כותרות תקין (H1 ← H2 ← H3) לניווט קל', icon: 'headings' },
            { text: 'טקסט חלופי (Alt Text) בכל התמונות', icon: 'alt' },
            { text: 'ניווט מלא במקלדת לכל האלמנטים האינטראקטיביים', icon: 'keyboard' },
            { text: 'אינדיקטורי מיקוד גלויים על כל האלמנטים הניתנים למיקוד', icon: 'focus' },
            { text: 'טקסט קישורים תיאורי וברור', icon: 'links' },
            { text: 'תוויות גלויות על כל שדות הטפסים', icon: 'labels' },
            { text: 'ניגודיות צבעים ביחס מינימלי של 4.5:1', icon: 'contrast' },
            { text: 'תכונת שפה מוגדרת באלמנט ה-HTML', icon: 'lang' },
            { text: 'תכונות ARIA על רכיבים אינטראקטיביים מותאמים', icon: 'aria' },
            { text: 'אין הבהוב תוכן (flashing) מעל 3 פעמים בשנייה', icon: 'flash' },
            { text: 'תמיכה בשפות RTL (עברית וערבית)', icon: 'rtl' },
            { text: 'תאימות לקוראי מסך (NVDA, JAWS, VoiceOver)', icon: 'screenreader' },
          ]
        },
        limitations: {
          title: '4. מגבלות ידועות',
          intro: 'אנו פועלים לשפר באופן מתמיד. כרגע אין מגבלות נגישות ידועות באתר.',
          text: 'במידה ותזהו מגבלה כלשהי, נשמח לשמוע עליה כדי שנוכל לטפל בה.'
        },
        coordinator: {
          title: '5. רכז/ת הנגישות',
          name: 'צוות הנגישות',
          role: 'רכז/ת נגישות',
          email: CONTACT_CONFIG.email,
          phone: CONTACT_CONFIG.phone,
          response: 'זמן תגובה: עד 5 ימי עסקים',
        },
        report: {
          title: '6. כיצד לדווח על מחסום נגישות',
          intro: 'אם נתקלתם במחסום נגישות כלשהו באתר, אנא צרו איתנו קשר בכתובת',
          details: 'אנא ציינו בפנינו:',
          items: [
            'הדף או התכונה בה נתקלתם בבעיה',
            'סוג טכנולוגיה מסייעת בה אתם משתמשים (אם רלוונטי)',
            'תיאור המחסום או הקושי',
          ],
          promise: 'נשיב לכם תוך 5 ימי עסקים ונשתדל לפתור את הבעיה בהקדם האפשרי.',
        },
        improvement: {
          title: '7. שיפור מתמיד',
          text: 'אנו מחויבים לשפר באופן מתמיד את נגישות האתר. אנו מבצעים בדיקות נגישות שנתיות ומיישמים שיפורים על בסיס שוטף. המשוב שלכם עוזר לנו להשתפר לטובת כולם.',
        },
      },
      backToHome: 'חזרה לדף הבית',
    },
    ar: {
      title: 'بيان إمكانية الوصول',
      subtitle: 'التزام بالوصول الكامل لجميع المستخدمين',
      lastReview: 'تاريخ آخر مراجعة',
      nextReview: 'المراجعة المجدولة القادمة',
      sections: {
        commitment: {
          title: '1. التزامنا',
          text: `${COMPANY_NAME} ملتزمة بجعل هذا الموقع متاحاً لجميع المستخدمين، بما في ذلك الأشخاص ذوو الإعاقة، وفقاً لقانون المساواة في الحقوق للأشخاص ذوي الإعاقة (1998) والمعيار الإسرائيلي 5568 (المستند إلى WCAG 2.0 المستوى AA).`,
        },
        compliance: {
          title: '2. مستوى الامتثال',
          intro: 'يمتثل هذا الموقع لمتطلبات WCAG 2.0 المستوى AA كما هو مطلوب في المعيار الإسرائيلي 5568.',
          wcagInfo: 'تحدد إرشادات إمكانية الوصول إلى محتوى الويب (WCAG) 2.0 إرشادات لجعل المحتوى الرقمي متاحاً. المستوى AA هو مستوى الامتثال المطلوب بموجب القانون في إسرائيل.',
        },
        features: {
          title: '3. ميزات إمكانية الوصول المثبتة',
          intro: 'يشتمل الموقع على مجموعة من ميزات إمكانية الوصول التي تساعد المستخدمين ذوي الاحتياجات الخاصة:',
          items: [
            { text: 'أداة إمكانية الوصول مع 10 أدوات للتخصيص (حجم النص، التباين، والمزيد)', icon: 'widget' },
            { text: 'رابط تنقل "تخطي إلى المحتوى الرئيسي" لتخطي القوائم', icon: 'skip' },
            { text: 'هيكل عناوين صحيح (H1 ← H2 ← H3) للتنقل السهل', icon: 'headings' },
            { text: 'نص بديل (Alt Text) على جميع الصور', icon: 'alt' },
            { text: 'تنقل كامل بلوحة المفاتيح لجميع العناصر التفاعلية', icon: 'keyboard' },
            { text: 'مؤشرات تركيز مرئية على جميع العناصر القابلة للتركيز', icon: 'focus' },
            { text: 'نصوص روابط وصفية وواضحة', icon: 'links' },
            { text: 'تسميات مرئية على جميع حقول النماذج', icon: 'labels' },
            { text: 'تباين الألوان بنسبة لا تقل عن 4.5:1', icon: 'contrast' },
            { text: 'سمة اللغة محددة في عنصر HTML', icon: 'lang' },
            { text: 'سمات ARIA على المكونات التفاعلية المخصصة', icon: 'aria' },
            { text: 'لا وميض محتوى يزيد عن 3 مرات في الثانية', icon: 'flash' },
            { text: 'دعم لغات RTL (العربية والإنجليزية)', icon: 'rtl' },
            { text: 'توافق مع قارئات الشاشة (NVDA, JAWS, VoiceOver)', icon: 'screenreader' },
          ]
        },
        limitations: {
          title: '4. القيود المعروفة',
          intro: 'نعمل على التحسين المستمر. حالياً لا توجد قيود معروفة على إمكانية الوصول في الموقع.',
          text: 'إذا لاحظتم أي قيود، يسعدنا أن نسمع عنها لنتعامل معها.',
        },
        coordinator: {
          title: '5. منسق/ة إمكانية الوصول',
          name: 'فريق إمكانية الوصول',
          role: 'منسق/ة إمكانية الوصول',
          email: CONTACT_CONFIG.email,
          phone: CONTACT_CONFIG.phone,
          response: 'وقت الاستجابة: خلال 5 أيام عمل',
        },
        report: {
          title: '6. كيفية الإبلاغ عن حاجز إمكانية الوصول',
          intro: 'إذا واجهتم أي حاجز لإمكانية الوصول على الموقع، يرجى الاتصال بنا على',
          details: 'يرجى ذكر:',
          items: [
            'الصفحة أو الميزة التي واجهتم فيها المشكلة',
            'نوع التكنولوجيا المساعدة التي تستخدمونها (إن وجدت)',
            'وصف الحاجز أو الصعوبة',
          ],
          promise: 'سنرد عليكم خلال 5 أيام عمل ونبذل قصارى جهدنا لحل المشكلة في أقرب وقت ممكن.',
        },
        improvement: {
          title: '7. التحسين المستمر',
          text: 'نحن ملتزمون بتحسين إمكانية الوصول إلى الموقع باستمرار. نجري عمليات تدقيق سنوية لإمكانية الوصول ونطبق التحسينات بشكل مستمر. ملاحظاتكم تساعدنا على التحسين للجميع.',
        },
      },
      backToHome: 'العودة إلى الصفحة الرئيسية',
    },
    en: {
      title: 'Accessibility Statement',
      subtitle: 'Committed to full accessibility for all users',
      lastReview: 'Last Review Date',
      nextReview: 'Next Scheduled Review',
      sections: {
        commitment: {
          title: '1. Our Commitment',
          text: `${COMPANY_NAME} is committed to making this website accessible to all users, including people with disabilities, in accordance with Israel\'s Equal Rights for Persons with Disabilities Law (1998) and Israeli Standard IS 5568 (based on WCAG 2.0 Level AA). We believe everyone deserves equal and respectful access to information and services.`,
        },
        compliance: {
          title: '2. Compliance Level',
          intro: 'This website conforms to WCAG 2.0 Level AA requirements as mandated by Israeli Standard 5568.',
          wcagInfo: 'Web Content Accessibility Guidelines (WCAG) 2.0 defines guidelines for making digital content accessible. Level AA is the compliance level required by law in Israel.',
        },
        features: {
          title: '3. Implemented Accessibility Features',
          intro: 'The website includes various accessibility features to assist users with special needs:',
          items: [
            { text: 'Accessibility widget with 10 customization tools (text size, contrast, etc.)', icon: 'widget' },
            { text: '"Skip to main content" navigation link to skip menus', icon: 'skip' },
            { text: 'Proper heading structure (H1 ← H2 ← H3) for easy navigation', icon: 'headings' },
            { text: 'Alternative text (Alt Text) on all images', icon: 'alt' },
            { text: 'Full keyboard navigation for all interactive elements', icon: 'keyboard' },
            { text: 'Visible focus indicators on all focusable elements', icon: 'focus' },
            { text: 'Descriptive and clear link text', icon: 'links' },
            { text: 'Visible labels on all form fields', icon: 'labels' },
            { text: 'Color contrast with minimum 4.5:1 ratio', icon: 'contrast' },
            { text: 'Language attribute defined on HTML element', icon: 'lang' },
            { text: 'ARIA attributes on custom interactive components', icon: 'aria' },
            { text: 'No content flashing more than 3 times per second', icon: 'flash' },
            { text: 'RTL language support (Hebrew and Arabic)', icon: 'rtl' },
            { text: 'Screen reader compatibility (NVDA, JAWS, VoiceOver)', icon: 'screenreader' },
          ]
        },
        limitations: {
          title: '4. Known Limitations',
          intro: 'We continuously work to improve. Currently, there are no known accessibility limitations on this site.',
          text: 'If you identify any limitation, we would be happy to hear about it so we can address it.',
        },
        coordinator: {
          title: '5. Accessibility Coordinator',
          name: 'Accessibility Team',
          role: 'Accessibility Coordinator',
          email: CONTACT_CONFIG.email,
          phone: CONTACT_CONFIG.phone,
          response: 'Response time: Within 5 business days',
        },
        report: {
          title: '6. How to Report an Accessibility Barrier',
          intro: 'If you encounter any accessibility barrier on our website, please contact us at',
          details: 'Please include:',
          items: [
            'The page or feature where you encountered the issue',
            'Type of assistive technology you use (if applicable)',
            'Description of the barrier or difficulty',
          ],
          promise: 'We will respond within 5 business days and strive to resolve the issue as quickly as possible.',
        },
        improvement: {
          title: '7. Continuous Improvement',
          text: 'We are committed to continuously improving our website\'s accessibility. We conduct annual accessibility audits and implement improvements on an ongoing basis. Your feedback helps us improve for everyone.',
        },
      },
      backToHome: 'Back to Home',
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
                <Accessibility size={32} className="text-accent" />
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{t.title}</h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              {t.subtitle}
            </p>
          </Reveal>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Review Dates */}
          <Reveal>
            <div className="bg-accent/10 border border-accent/20 rounded-xl p-4 mb-8 flex flex-wrap justify-center gap-6 text-center">
              <div>
                <span className="text-sm text-gray-500 dark:text-gray-400">{t.lastReview}:</span>
                <p className="font-bold text-accent">{formatDate(lastReviewDate, language)}</p>
              </div>
              <div>
                <span className="text-sm text-gray-500 dark:text-gray-400">{t.nextReview}:</span>
                <p className="font-bold text-gray-700 dark:text-gray-300">{formatDate(nextReviewDate, language)}</p>
              </div>
            </div>
          </Reveal>

          {/* Main Content */}
          <Reveal>
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-700 overflow-hidden">

              {/* Section 1: Commitment */}
              <section className="p-6 md:p-10 border-b border-gray-100 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center text-accent font-bold text-sm">1</span>
                  {t.sections.commitment.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {t.sections.commitment.text}
                </p>
              </section>

              {/* Section 2: Compliance */}
              <section className="p-6 md:p-10 border-b border-gray-100 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center text-accent font-bold text-sm">2</span>
                  {t.sections.compliance.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  {t.sections.compliance.intro}
                </p>
                <div className="bg-gray-50 dark:bg-slate-700/50 rounded-lg p-4">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {t.sections.compliance.wcagInfo}
                  </p>
                </div>
              </section>

              {/* Section 3: Features */}
              <section className="p-6 md:p-10 border-b border-gray-100 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center text-accent font-bold text-sm">3</span>
                  {t.sections.features.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  {t.sections.features.intro}
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {t.sections.features.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 bg-gray-50 dark:bg-slate-700/50 p-3 rounded-lg">
                      <CheckCircle size={18} className="text-green-500 shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Section 4: Limitations */}
              <section className="p-6 md:p-10 border-b border-gray-100 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center text-accent font-bold text-sm">4</span>
                  {t.sections.limitations.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-2">
                  {t.sections.limitations.intro}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {t.sections.limitations.text}
                </p>
              </section>

              {/* Section 5: Coordinator */}
              <section className="p-6 md:p-10 border-b border-gray-100 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center text-accent font-bold text-sm">5</span>
                  {t.sections.coordinator.title}
                </h2>
                <div className="bg-accent/5 dark:bg-accent/10 border border-accent/20 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                      {t.sections.coordinator.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 dark:text-white">{t.sections.coordinator.name}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{t.sections.coordinator.role}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <a href={`mailto:${t.sections.coordinator.email}`} className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-accent transition-colors">
                      <Mail size={18} />
                      <span>{t.sections.coordinator.email}</span>
                    </a>
                    <a href={`tel:${t.sections.coordinator.phone}`} className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-accent transition-colors" dir="ltr">
                      <Phone size={18} />
                      <span>{t.sections.coordinator.phone}</span>
                    </a>
                    <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                      <Clock size={18} />
                      <span>{t.sections.coordinator.response}</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 6: Report Barrier */}
              <section className="p-6 md:p-10 border-b border-gray-100 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center text-accent font-bold text-sm">6</span>
                  {t.sections.report.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  {t.sections.report.intro}{' '}
                  <a href={`mailto:${CONTACT_CONFIG.email}`} className="text-accent hover:underline">
                    {CONTACT_CONFIG.email}
                  </a>
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  {t.sections.report.details}
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 text-gray-600 dark:text-gray-300">
                  {t.sections.report.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {t.sections.report.promise}
                </p>
              </section>

              {/* Section 7: Continuous Improvement */}
              <section className="p-6 md:p-10">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center text-accent font-bold text-sm">7</span>
                  {t.sections.improvement.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {t.sections.improvement.text}
                </p>
              </section>

            </div>
          </Reveal>

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
