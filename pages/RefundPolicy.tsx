/**
 * Refund & Cancellation Policy Page
 * Complies with Israeli Consumer Protection Law 5741-1981
 * Standard Contracts Law 5743-1982
 *
 * Built: 2026-02-26
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { useLanguage } from '../context/LanguageContext';
import { RefreshCw, Mail, Clock, AlertTriangle, CheckCircle, XCircle, CreditCard, ArrowLeft, ArrowRight } from 'lucide-react';
import { CONTACT_CONFIG, COMPANY_NAME } from '../constants';

export const RefundPolicy: React.FC = () => {
  const { language, direction } = useLanguage();
  const isRTL = direction === 'rtl';
  const Arrow = isRTL ? ArrowRight : ArrowLeft;

  // Translations
  const content = {
    he: {
      title: 'מדיניות ביטולים והחזרים',
      subtitle: 'זכויותיך על פי חוק הגנת הצרכן',
      lastUpdated: 'עודכן לאחרונה: 26 בפברואר 2026',
      backToHome: 'חזרה לדף הבית',

      s1: {
        title: '1. זכות הביטול שלך',
        badge: 'חשוב - קרא בעיון',
        intro: 'על פי חוק הגנת הצרכן, התשמ"א-1981, לרוכשים באינטרנט יש זכות ביטול:',
        items: [
          { text: 'עד 14 יום מיום קבלת המוצר הפיזי', icon: 'product' },
          { text: 'עד 14 יום מיום כריתת החוזה לשירותים', icon: 'service' },
          { text: 'לפני תחילת ביצוע השירות (המוקדם מביניהם)', icon: 'before' },
        ],
        note: 'זכות זו ניתנת ללא צורך בנימוק.',
      },

      s2: {
        title: '2. מוצרים בהתאמה אישית',
        intro: 'מוצרים המיוצרים בהתאמה אישית (שערים, גדרות, מעקות, פרגולות וכו\') כפופים לכללים מיוחדים:',
        items: [
          { text: 'ניתן לבטל ללא עלות עד תחילת הייצור', icon: 'cancel' },
          { text: 'לאחר תחילת הייצור - תשלום עבור חומרים שנרכשו ועבודה שבוצעה', icon: 'partial' },
          { text: 'לאחר סיום הייצור - תשלום מלא', icon: 'full' },
        ],
        note: 'נודיע לך בכתב לפני תחילת הייצור כדי שתוכל להפעיל את זכות הביטול.',
      },

      s3: {
        title: '3. שירותי התקנה',
        intro: 'עבור שירותי התקנה והרכבה:',
        items: [
          { text: 'ביטול לפני תחילת העבודה - החזר מלא', icon: 'full' },
          { text: 'ביטול לאחר תחילת העבודה - תשלום יחסי לפי התקדמות', icon: 'partial' },
          { text: 'לאחר סיום ההתקנה - תשלום מלא', icon: 'done' },
        ],
        calculation: 'חישוב יחסי: (עלות הפרויקט ÷ 100) × אחוז ההתקדמות',
      },

      s4: {
        title: '4. תהליך החזר כספי',
        steps: [
          { num: 1, title: 'שליחת בקשה', desc: 'שלחו מייל לכתובת info@anton-aluminum.com עם הנושא: "בקשת ביטול"' },
          { num: 2, title: 'פרטים נדרשים', desc: 'מספר הזמנה, תאריך רכישה, סיבת הביטול (אופציונלי)' },
          { num: 3, title: 'אישור ובדיקה', desc: 'נבדוק את הבקשה ונחזור אליכם תוך 3 ימי עסקים' },
          { num: 4, title: 'קבלת ההחזר', desc: 'ההחזר יתבצע תוך 14 ימי עסקים לאמצעי התשלום המקורי' },
        ],
        method: 'שיטת ההחזר: אמצעי התשלום המקורי בלבד',
      },

      s5: {
        title: '5. פריטים שאינם ניתנים להחזר',
        items: [
          { text: 'מוצרים בהתאמה אישית לאחר תחילת הייצור', icon: 'custom' },
          { text: 'מוצרים שנפגמו על ידי הלקוח', icon: 'damaged' },
          { text: 'שירותים שכבר סופקו והתקבלו על ידי הלקוח', icon: 'delivered' },
          { text: 'עלויות צד שלישי שכבר שולמו (דומיין, אחסון, תמונות סטוק)', icon: 'third' },
        ],
        note: 'רשימה זו אינה מונעת את זכויותיך על פי דין.',
      },

      s6: {
        title: '6. המשך לעבוד איתנו',
        intro: 'אם בחרת להמשיך עם הפרויקט לאחר ביטול:',
        text: 'נשמח להמשיך ולעבוד איתך. ניתן לחדש את ההזמנה בכל עת, ונכבד את המחיר המקורי למשך 30 יום ממועד הביטול.',
      },

      s7: {
        title: '7. יצירת קשר לביטולים',
        email: CONTACT_CONFIG.email,
        phone: CONTACT_CONFIG.phone,
        hours: 'ימים א\'-ה\', 08:00-18:00',
        response: 'זמן תגובה: עד 3 ימי עסקים',
      },

      s8: {
        title: '8. דין ומשפט',
        text: 'מדיניות זו מוסדרת על פי חוק הגנת הצרכן, התשמ"א-1981 וחוק החוזים הסטנדרטיים, התשמ"ג-1982.',
        contact: 'לשאלות לפני פתיחת הליכים משפטיים:',
      },
    },
    ar: {
      title: 'سياسة الإلغاء والاسترداد',
      subtitle: 'حقوقك بموجب قانون حماية المستهلك',
      lastUpdated: 'آخر تحديث: 26 فبراير 2026',
      backToHome: 'العودة إلى الصفحة الرئيسية',

      s1: {
        title: '1. حقك في الإلغاء',
        badge: 'مهم - اقرأ بعناية',
        intro: 'وفقاً لقانون حماية المستهلك 5741-1981، للمشترين عبر الإنترنت حق الإلغاء:',
        items: [
          { text: 'خلال 14 يوماً من تاريخ استلام المنتج المادي', icon: 'product' },
          { text: 'خلال 14 يوماً من تاريخ إبرام العقد للخدمات', icon: 'service' },
          { text: 'قبل بدء تقديم الخدمة (الأسبق منهما)', icon: 'before' },
        ],
        note: 'يُمنح هذا الحق دون الحاجة إلى إبداء سبب.',
      },

      s2: {
        title: '2. المنتجات المخصصة',
        intro: 'المنتجات المصنعة حسب الطلب (أبواب، سياجات، درابزين، مظلات، إلخ) تخضع لقواعد خاصة:',
        items: [
          { text: 'يمكن الإلغاء بدون تكلفة حتى بدء التصنيع', icon: 'cancel' },
          { text: 'بعد بدء التصنيع - دفع المواد المشتراة والعمل المنجز', icon: 'partial' },
          { text: 'بعد انتهاء التصنيع - دفع كامل', icon: 'full' },
        ],
        note: 'سنخططك كتابياً قبل بدء التصنيع لتتمكن من ممارسة حق الإلغاء.',
      },

      s3: {
        title: '3. خدمات التركيب',
        intro: 'بالنسبة لخدمات التركيب والتجميع:',
        items: [
          { text: 'الإلغاء قبل بدء العمل - استرداد كامل', icon: 'full' },
          { text: 'الإلغاء بعد بدء العمل - دفع نسبي حسب التقدم', icon: 'partial' },
          { text: 'بعد انتهاء التركيب - دفع كامل', icon: 'done' },
        ],
        calculation: 'الحساب النسبي: (تكلفة المشروع ÷ 100) × نسبة التقدم',
      },

      s4: {
        title: '4. عملية استرداد الأموال',
        steps: [
          { num: 1, title: 'إرسال الطلب', desc: 'أرسل بريداً إلكترونياً إلى info@anton-aluminum.com بموضوع: "طلب إلغاء"' },
          { num: 2, title: 'التفاصيل المطلوبة', desc: 'رقم الطلب، تاريخ الشراء، سبب الإلغاء (اختياري)' },
          { num: 3, title: 'الموافقة والمراجعة', desc: 'سنراجع الطلب ونرد عليك خلال 3 أيام عمل' },
          { num: 4, title: 'استلام الاسترداد', desc: 'سيتم الاسترداد خلال 14 يوماً عمل إلى طريقة الدفع الأصلية' },
        ],
        method: 'طريقة الاسترداد: طريقة الدفع الأصلية فقط',
      },

      s5: {
        title: '5. العناصر غير القابلة للاسترداد',
        items: [
          { text: 'المنتجات المخصصة بعد بدء التصنيع', icon: 'custom' },
          { text: 'المنتجات التالفة من قبل العميل', icon: 'damaged' },
          { text: 'الخدمات المقدمة بالفعل والمقبولة من قبل العميل', icon: 'delivered' },
          { text: 'تكاليف الطرف الثالث المدفوعة بالفعل (نطاق، استضافة، صور مخزنة)', icon: 'third' },
        ],
        note: 'هذه القائمة لا تمنع حقوقك بموجب القانون.',
      },

      s6: {
        title: '6. مواصلة العمل معنا',
        intro: 'إذا اخترت الاستمرار مع المشروع بعد الإلغاء:',
        text: 'يسعدنا الاستمرار والعمل معك. يمكن تجديد الطلب في أي وقت، وسنحترم السعر الأصلي لمدة 30 يوماً من تاريخ الإلغاء.',
      },

      s7: {
        title: '7. الاتصال للإلغاءات',
        email: CONTACT_CONFIG.email,
        phone: CONTACT_CONFIG.phone,
        hours: 'الأحد-الخميس، 08:00-18:00',
        response: 'وقت الاستجابة: خلال 3 أيام عمل',
      },

      s8: {
        title: '8. القانون الحاكم',
        text: 'تنظم هذه السياسة بموجب قانون حماية المستهلك 5741-1981 وقانون العقود القياسية 5743-1982.',
        contact: 'للأسئلة قبل بدء الإجراءات القانونية:',
      },
    },
    en: {
      title: 'Refund & Cancellation Policy',
      subtitle: 'Your rights under Consumer Protection Law',
      lastUpdated: 'Last Updated: February 26, 2026',
      backToHome: 'Back to Home',

      s1: {
        title: '1. Your Right to Cancel',
        badge: 'Important - Read Carefully',
        intro: 'Under the Consumer Protection Law 5741-1981, online purchasers have the right to cancel:',
        items: [
          { text: 'Within 14 days of receiving the physical product', icon: 'product' },
          { text: 'Within 14 days of contract signing for services', icon: 'service' },
          { text: 'Before service execution begins (whichever is earlier)', icon: 'before' },
        ],
        note: 'This right is granted without the need to provide a reason.',
      },

      s2: {
        title: '2. Custom-Made Products',
        intro: 'Products manufactured to order (gates, fences, railings, pergolas, etc.) are subject to special rules:',
        items: [
          { text: 'Can be cancelled at no cost until production begins', icon: 'cancel' },
          { text: 'After production begins - payment for materials purchased and work performed', icon: 'partial' },
          { text: 'After production completion - full payment', icon: 'full' },
        ],
        note: 'We will notify you in writing before production begins so you can exercise your cancellation right.',
      },

      s3: {
        title: '3. Installation Services',
        intro: 'For installation and assembly services:',
        items: [
          { text: 'Cancellation before work begins - full refund', icon: 'full' },
          { text: 'Cancellation after work begins - proportional payment based on progress', icon: 'partial' },
          { text: 'After installation completion - full payment', icon: 'done' },
        ],
        calculation: 'Proportional calculation: (Project cost ÷ 100) × Progress percentage',
      },

      s4: {
        title: '4. Refund Process',
        steps: [
          { num: 1, title: 'Send Request', desc: 'Email info@anton-aluminum.com with subject: "Cancellation Request"' },
          { num: 2, title: 'Required Details', desc: 'Order number, purchase date, reason for cancellation (optional)' },
          { num: 3, title: 'Review & Approval', desc: 'We will review the request and respond within 3 business days' },
          { num: 4, title: 'Receive Refund', desc: 'Refund will be processed within 14 business days to original payment method' },
        ],
        method: 'Refund Method: Original payment method only',
      },

      s5: {
        title: '5. Non-Refundable Items',
        items: [
          { text: 'Custom-made products after production has begun', icon: 'custom' },
          { text: 'Products damaged by the customer', icon: 'damaged' },
          { text: 'Services already delivered and accepted by the customer', icon: 'delivered' },
          { text: 'Third-party costs already paid (domain, hosting, stock photos)', icon: 'third' },
        ],
        note: 'This list does not prevent your rights under law.',
      },

      s6: {
        title: '6. Continuing with Us',
        intro: 'If you choose to continue with the project after cancellation:',
        text: 'We would be happy to continue working with you. You can renew your order at any time, and we will honor the original price for 30 days from the cancellation date.',
      },

      s7: {
        title: '7. Contact for Cancellations',
        email: CONTACT_CONFIG.email,
        phone: CONTACT_CONFIG.phone,
        hours: 'Sunday-Thursday, 08:00-18:00',
        response: 'Response time: Within 3 business days',
      },

      s8: {
        title: '8. Governing Law',
        text: 'This policy is governed by the Consumer Protection Law 5741-1981 and Standard Contracts Law 5743-1982.',
        contact: 'Contact us before initiating legal proceedings:',
      },
    },
  };

  const t = content[language as keyof typeof content] || content.en;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-accent to-accent-hover text-white py-12 md:py-20 mb-8 md:mb-12">
        <div className="container mx-auto px-4 text-center">
          <Reveal>
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <RefreshCw size={32} className="text-white" />
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{t.title}</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              {t.subtitle}
            </p>
            <p className="mt-4 text-sm text-white/70">{t.lastUpdated}</p>
          </Reveal>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">

          {/* Section 1: Right to Cancel */}
          <Reveal>
            <section className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-700 p-6 md:p-10 mb-6">
              <div className="flex items-start gap-4 mb-4">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-bold">{t.s1.badge}</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t.s1.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{t.s1.intro}</p>
              <ul className="space-y-3 mb-4">
                {t.s1.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <CheckCircle size={20} className="text-green-500 shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{item.text}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-500 dark:text-gray-400 italic">{t.s1.note}</p>
            </section>
          </Reveal>

          {/* Section 2: Custom Products */}
          <Reveal>
            <section className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-700 p-6 md:p-10 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t.s2.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{t.s2.intro}</p>
              <ul className="space-y-3 mb-4">
                {t.s2.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 bg-gray-50 dark:bg-slate-700/50 p-4 rounded-lg">
                    <AlertTriangle size={20} className="text-amber-500 shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{item.text}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-accent bg-accent/5 p-3 rounded-lg">{t.s2.note}</p>
            </section>
          </Reveal>

          {/* Section 3: Installation Services */}
          <Reveal>
            <section className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-700 p-6 md:p-10 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t.s3.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{t.s3.intro}</p>
              <ul className="space-y-3 mb-4">
                {t.s3.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 bg-gray-50 dark:bg-slate-700/50 p-4 rounded-lg">
                    {i === 0 ? <CheckCircle size={20} className="text-green-500 shrink-0" /> : <AlertTriangle size={20} className="text-amber-500 shrink-0" />}
                    <span className="text-gray-700 dark:text-gray-300">{item.text}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-gray-100 dark:bg-slate-700 p-4 rounded-lg">
                <code className="text-sm text-gray-700 dark:text-gray-300">{t.s3.calculation}</code>
              </div>
            </section>
          </Reveal>

          {/* Section 4: Refund Process */}
          <Reveal>
            <section className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-700 p-6 md:p-10 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t.s4.title}</h2>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {t.s4.steps.map((step) => (
                  <div key={step.num} className="bg-gray-50 dark:bg-slate-700/50 p-5 rounded-xl relative overflow-hidden">
                    <span className="absolute -top-2 -right-2 w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent font-bold text-lg">
                      {step.num}
                    </span>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2 mt-4">{step.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{step.desc}</p>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-3 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <CreditCard size={20} className="text-blue-500" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">{t.s4.method}</span>
              </div>
            </section>
          </Reveal>

          {/* Section 5: Non-Refundable */}
          <Reveal>
            <section className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-700 p-6 md:p-10 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t.s5.title}</h2>
              <ul className="space-y-3 mb-4">
                {t.s5.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                    <XCircle size={20} className="text-red-500 shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{item.text}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-500 dark:text-gray-400 italic">{t.s5.note}</p>
            </section>
          </Reveal>

          {/* Section 6: Continue */}
          <Reveal>
            <section className="bg-accent/5 border border-accent/20 rounded-2xl p-6 md:p-10 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t.s6.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-2">{t.s6.intro}</p>
              <p className="text-gray-700 dark:text-gray-200">{t.s6.text}</p>
            </section>
          </Reveal>

          {/* Section 7: Contact */}
          <Reveal>
            <section className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-700 p-6 md:p-10 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t.s7.title}</h2>
              <div className="space-y-4">
                <a href={`mailto:${t.s7.email}`} className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-slate-700/50 rounded-lg hover:bg-accent/5 transition-colors">
                  <Mail size={20} className="text-accent" />
                  <span className="text-gray-700 dark:text-gray-300">{t.s7.email}</span>
                </a>
                <a href={`tel:${t.s7.phone}`} className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-slate-700/50 rounded-lg hover:bg-accent/5 transition-colors" dir="ltr">
                  <span className="text-accent">📞</span>
                  <span className="text-gray-700 dark:text-gray-300">{t.s7.phone}</span>
                </a>
                <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-slate-700/50 rounded-lg">
                  <Clock size={20} className="text-accent" />
                  <span className="text-gray-700 dark:text-gray-300">{t.s7.hours}</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-accent/5 border border-accent/20 rounded-lg">
                  <CheckCircle size={20} className="text-accent" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{t.s7.response}</span>
                </div>
              </div>
            </section>
          </Reveal>

          {/* Section 8: Governing Law */}
          <Reveal>
            <section className="bg-gray-100 dark:bg-slate-800/50 rounded-2xl p-6 md:p-10">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{t.s8.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{t.s8.text}</p>
              <p className="text-gray-600 dark:text-gray-300">
                {t.s8.contact}{' '}
                <a href={`mailto:${CONTACT_CONFIG.email}`} className="text-accent hover:underline font-medium">
                  {CONTACT_CONFIG.email}
                </a>
              </p>
            </section>
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
