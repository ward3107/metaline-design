/**
 * Disclaimer Page
 * For websites publishing informational content
 * Complies with Israeli law and professional licensing regulations
 *
 * Built: 2026-02-26
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { useLanguage } from '../context/LanguageContext';
import { AlertTriangle, Info, ExternalLink, Scale, Bot, Link2, ArrowLeft, ArrowRight } from 'lucide-react';
import { CONTACT_CONFIG, COMPANY_NAME } from '../constants';

export const Disclaimer: React.FC = () => {
  const { language, direction } = useLanguage();
  const isRTL = direction === 'rtl';
  const Arrow = isRTL ? ArrowRight : ArrowLeft;

  // Content flags - adjust based on actual site content
  const siteContent = {
    generalInformation: true,
    healthMedical: false,
    legalInformation: false,
    financialInvestment: false,
    coaching: false,
    affiliateSponsored: false,
    aiGenerated: false,
  };

  // Translations
  const content = {
    he: {
      title: 'הצהרת אחריות',
      subtitle: 'תנאים והגבלות לשימוש במידע באתר',
      lastUpdated: 'עודכן לאחרונה: 26 בפברואר 2026',
      backToHome: 'חזרה לדף הבית',

      s1: {
        title: '1. הצהרה כללית',
        text: 'המידע באתר זה מיועד למטרות מידע בלבד. אין לראות בו ייעוץ מקצועי מכל סוג שהוא. הבעלים אינו אחראי לפעולות שננקטו על סמך תוכן זה.',
      },

      s2: {
        title: '2. הצהרת אי-ייעוץ מקצועי',
        intro: 'לפי הדין הישראלי, אסור לעסוק במקצועות מוסדרים ללא רישיון מתאים. הבעלים אינו מחזיק ברישיון ואינו מספק ייעוץ בתחומים הבאים:',
        licensed: [
          'ייעוץ משפטי (לשכת עורכי הדין)',
          'ייעוץ רפואי (משרד הבריאות)',
          'ייעוץ פיננסי (רשות ניירות ערך)',
        ],
        action: 'לייעוץ מקצועי, פנו לבעל מקצוע מורשה.',
      },

      s3: {
        title: '3. הצהרת תוצאות',
        intro: 'המלצות והמלצות לקוחות המוצגות באתר הן דוגמאות בלבד.',
        items: [
          'התוצאות עשויות להשתנות בין אדם לאדם',
          'אין הבטחה לתוצאה ספציפית כלשהי',
          'אין להסתמך על הדוגמאות כערובה לתוצאות',
        ],
      },

      s4: {
        title: '4. גילוי נאות - קישורים ממומנים ותוכן שיווקי',
        intro: 'אתר זה עשוי להכיל קישורים ממומנים ותוכן שיווקי בהתאם לדרישות מועצת הפרסום הישראלית:',
        items: [
          'קישורים ממומנים: הבעלים עשוי לקבל עמלה על רכישות דרך קישורים אלה',
          'תוכן ממומן: מסומן בבירור כ"ממומן" או "שיווקי"',
          'שקיפות: נגלה על כל קשר מסחרי רלוונטי',
        ],
        note: 'בהתאם לתקנות הגנת הצרכן (פרסומות), התשע"א-2011.',
      },

      s5: {
        title: '5. גילוי נאות - תוכן שנוצר באמצעות AI',
        intro: 'חלק מהתוכן באתר עשוי להיות מיוצר או נערך באמצעות בינה מלאכותית:',
        items: [
          'תוכן AI עובר בדיקה, אך עשוי להכיל שגיאות',
          'אין להסתמך על תוכן AI להחלטות חשובות',
          'במקרה של ספק, יש לפנות למקורות רשמיים',
        ],
      },

      s6: {
        title: '6. קישורים לאתרים חיצוניים',
        text: 'איננו אחראים לתוכן באתרי צד שלישי. קישורים חיצוניים אינם מהווים המלצה או תמיכה. השימוש באתרים חיצוניים הוא על אחריותך בלבד.',
      },

      s7: {
        title: '7. דיוק ועדכנות',
        items: [
          'המידע עשוי להתיישן עם הזמן',
          'אין אחריות לשלמות או דיוק המידע',
          'מומלץ לוודא מידע קריטי מול מקורות רשמיים',
        ],
      },

      s8: {
        title: '8. יצירת קשר לשאלות',
        text: 'לשאלות לגבי תוכן האתר או הצהרה זו:',
        email: CONTACT_CONFIG.email,
      },
    },
    ar: {
      title: 'إخلاء المسؤولية',
      subtitle: 'الشروط والقيود لاستخدام المعلومات على الموقع',
      lastUpdated: 'آخر تحديث: 26 فبراير 2026',
      backToHome: 'العودة إلى الصفحة الرئيسية',

      s1: {
        title: '1. إخلاء المسؤولية العام',
        text: 'المعلومات على هذا الموقع لأغراض إعلامية فقط. لا يُعتبر نصيحة مهنية من أي نوع. المالك غير مسؤول عن الإجراءات المتخذة بناءً على هذا المحتوى.',
      },

      s2: {
        title: '2. إخلاء المسؤولية عن النصائح المهنية',
        intro: 'وفقاً للقانون الإسرائيلي، يُحظر ممارسة المهن المنظمة بدون ترخيص مناسب. المالك لا يحمل ترخيصاً ولا يقدم استشارات في المجالات التالية:',
        licensed: [
          'استشارات قانونية (نقابة المحامين)',
          'استشارات طبية (وزارة الصحة)',
          'استشارات مالية (هيئة الأوراق المالية)',
        ],
        action: 'للحصول على نصيحة مهنية، تواصل مع محترف مرخص.',
      },

      s3: {
        title: '3. إخلاء المسؤولية عن النتائج',
        intro: 'التوصيات وشهادات العملاء المعروضة على الموقع هي أمثلة فقط.',
        items: [
          'النتائج قد تختلف من شخص لآخر',
          'لا يوجد ضمان لأي نتيجة محددة',
          'لا تعتمد على الأمثلة كضمان للنتائج',
        ],
      },

      s4: {
        title: '4. الإفصاح - الروابط الممولة والمحتوى التسويقي',
        intro: 'قد يحتوي هذا الموقع على روابط ممولة ومحتوى تسويقي وفقاً لمتطلبات مجلس الإعلانات الإسرائيلي:',
        items: [
          'الروابط الممولة: قد يحصل المالك على عمولة على المشتريات عبر هذه الروابط',
          'المحتوى الممول: يُحدد بوضوح كـ "ممول" أو "تسويقي"',
          'الشفافية: سنكشف عن أي علاقة تجارية ذات صلة',
        ],
        note: 'وفقاً للائحة حماية المستهلك (الإعلانات) 5731-2011.',
      },

      s5: {
        title: '5. الإفصاح - المحتوى المولد بالذكاء الاصطناعي',
        intro: 'قد يكون بعض المحتوى على الموقع مُولداً أو مُحرراً بالذكاء الاصطناعي:',
        items: [
          'محتوى AI يخضع للمراجعة، لكن قد يحتوي على أخطاء',
          'لا تعتمد على محتوى AI لاتخاذ قرارات مهمة',
          'في حالة الشك، راجع المصادر الرسمية',
        ],
      },

      s6: {
        title: '6. الروابط إلى مواقع خارجية',
        text: 'لسنا مسؤولين عن محتوى مواقع الطرف الثالث. الروابط الخارجية لا تشكل توصية أو دعم. استخدام المواقع الخارجية هو مسؤوليتك وحدك.',
      },

      s7: {
        title: '7. الدقة والحداثة',
        items: [
          'المعلومات قد تصبح قديمة مع الوقت',
          'لا يوجد ضمان لاكتمال أو دقة المعلومات',
          'يُنصح بالتحقق من المعلومات الحاسمة من المصادر الرسمية',
        ],
      },

      s8: {
        title: '8. الاتصال للأسئلة',
        text: 'للأسئلة حول محتوى الموقع أو هذا الإخلاء:',
        email: CONTACT_CONFIG.email,
      },
    },
    en: {
      title: 'Disclaimer',
      subtitle: 'Terms and limitations for using information on this website',
      lastUpdated: 'Last Updated: February 26, 2026',
      backToHome: 'Back to Home',

      s1: {
        title: '1. General Disclaimer',
        text: 'The information on this website is for informational purposes only. It should not be considered professional advice of any kind. The owner is not liable for actions taken based on this content.',
      },

      s2: {
        title: '2. Professional Advice Disclaimer',
        intro: 'Under Israeli law, practicing regulated professions without a proper license is prohibited. The owner does not hold a license and does not provide advice in the following areas:',
        licensed: [
          'Legal advice (Israel Bar Association)',
          'Medical advice (Ministry of Health)',
          'Financial advice (Israel Securities Authority)',
        ],
        action: 'For professional advice, please consult a licensed professional.',
      },

      s3: {
        title: '3. Results Disclaimer',
        intro: 'Recommendations and customer testimonials displayed on this website are examples only.',
        items: [
          'Results may vary from person to person',
          'No specific outcome is promised or guaranteed',
          'Do not rely on examples as a guarantee of results',
        ],
      },

      s4: {
        title: '4. Disclosure - Affiliate Links & Sponsored Content',
        intro: 'This website may contain affiliate links and sponsored content in accordance with Israeli Advertising Standards Authority requirements:',
        items: [
          'Affiliate links: The owner may earn a commission on purchases made through these links',
          'Sponsored content: Clearly marked as "Sponsored" or "Promotional"',
          'Transparency: We will disclose any relevant commercial relationship',
        ],
        note: 'In accordance with Consumer Protection Regulations (Advertising) 5771-2011.',
      },

      s5: {
        title: '5. Disclosure - AI-Generated Content',
        intro: 'Some content on this website may be generated or edited using artificial intelligence:',
        items: [
          'AI content is reviewed but may contain errors',
          'Do not rely on AI content for important decisions',
          'When in doubt, consult official sources',
        ],
      },

      s6: {
        title: '6. External Links',
        text: 'We are not responsible for content on third-party websites. External links do not constitute endorsement or recommendation. Use of external websites is solely at your own risk.',
      },

      s7: {
        title: '7. Accuracy & Currency',
        items: [
          'Information may become outdated over time',
          'No warranty of completeness or accuracy is provided',
          'Critical information should be verified with official sources',
        ],
      },

      s8: {
        title: '8. Contact for Questions',
        text: 'For questions about website content or this disclaimer:',
        email: CONTACT_CONFIG.email,
      },
    },
    ru: {
      title: 'Отказ от ответственности',
      subtitle: 'Условия и ограничения использования информации на этом сайте',
      lastUpdated: 'Последнее обновление: 26 февраля 2026 г.',
      backToHome: 'Вернуться на главную',

      s1: {
        title: '1. Общий отказ от ответственности',
        text: 'Информация на этом сайте предназначена исключительно для ознакомительных целей. Она не является профессиональной консультацией какого-либо рода. Владелец не несет ответственности за действия, предпринятые на основе этого содержания.',
      },

      s2: {
        title: '2. Отказ от ответственности за профессиональные консультации',
        intro: 'Согласно израильскому законодательству, практика регулируемых профессий без соответствующей лицензии запрещена. Владелец не имеет лицензии и не предоставляет консультации в следующих областях:',
        licensed: [
          'Юридические консультации (Коллегия адвокатов Израиля)',
          'Медицинские консультации (Министерство здравоохранения)',
          'Финансовые консультации (Комиссия по ценным бумагам)',
        ],
        action: 'Для получения профессиональной консультации обратитесь к лицензированному специалисту.',
      },

      s3: {
        title: '3. Отказ от ответственности за результаты',
        intro: 'Рекомендации и отзывы клиентов, представленные на этом сайте, являются только примерами.',
        items: [
          'Результаты могут варьироваться от человека к человеку',
          'Никакой конкретный результат не обещается и не гарантируется',
          'Не полагайтесь на примеры как на гарантию результатов',
        ],
      },

      s4: {
        title: '4. Раскрытие информации - Партнерские ссылки и спонсируемый контент',
        intro: 'Этот сайт может содержать партнерские ссылки и спонсируемый контент в соответствии с требованиями Израильского органа по стандартам рекламы:',
        items: [
          'Партнерские ссылки: Владелец может получать комиссию за покупки, сделанные по этим ссылкам',
          'Спонсируемый контент: Четко помечен как "Спонсируемый" или "Рекламный"',
          'Прозрачность: Мы раскроем любую соответствующую коммерческую связь',
        ],
        note: 'В соответствии с Правилами защиты прав потребителей (Реклама) 5771-2011.',
      },

      s5: {
        title: '5. Раскрытие информации - Контент, созданный ИИ',
        intro: 'Некоторый контент на этом сайте может быть создан или отредактирован с использованием искусственного интеллекта:',
        items: [
          'Контент ИИ проверяется, но может содержать ошибки',
          'Не полагайтесь на контент ИИ при принятии важных решений',
          'В случае сомнений обращайтесь к официальным источникам',
        ],
      },

      s6: {
        title: '6. Внешние ссылки',
        text: 'Мы не несем ответственности за контент на сторонних сайтах. Внешние ссылки не означают одобрения или рекомендации. Использование внешних сайтов осуществляется исключительно на ваш собственный риск.',
      },

      s7: {
        title: '7. Точность и актуальность',
        items: [
          'Информация может устаревать с течением времени',
          'Гарантия полноты или точности не предоставляется',
          'Критически важную информацию следует проверять по официальным источникам',
        ],
      },

      s8: {
        title: '8. Контакт для вопросов',
        text: 'По вопросам о содержании сайта или этом отказе от ответственности:',
        email: CONTACT_CONFIG.email,
      },
    },
  };

  const t = content[language as keyof typeof content] || content.en;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-amber-600 to-amber-700 text-white py-12 md:py-20 mb-8 md:mb-12">
        <div className="container mx-auto px-4 text-center">
          <Reveal>
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <AlertTriangle size={32} className="text-white" />
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

          {/* Section 1: General */}
          <Reveal>
            <section className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-700 p-6 md:p-10 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <Info size={24} className="text-amber-500" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{t.s1.title}</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{t.s1.text}</p>
            </section>
          </Reveal>

          {/* Section 2: Professional Advice */}
          {siteContent.generalInformation && (
            <Reveal>
              <section className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/30 rounded-2xl p-6 md:p-10 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <Scale size={24} className="text-amber-600" />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{t.s2.title}</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{t.s2.intro}</p>
                <ul className="space-y-2 mb-4">
                  {t.s2.licensed.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                      <span className="w-2 h-2 bg-amber-500 rounded-full shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-amber-700 dark:text-amber-400 font-medium bg-amber-100 dark:bg-amber-900/30 p-3 rounded-lg">
                  {t.s2.action}
                </p>
              </section>
            </Reveal>
          )}

          {/* Section 3: Results */}
          {siteContent.coaching && (
            <Reveal>
              <section className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-700 p-6 md:p-10 mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t.s3.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{t.s3.intro}</p>
                <ul className="space-y-3">
                  {t.s3.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 bg-gray-50 dark:bg-slate-700/50 p-4 rounded-lg">
                      <AlertTriangle size={18} className="text-amber-500 shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
          )}

          {/* Section 4: Affiliate */}
          {siteContent.affiliateSponsored && (
            <Reveal>
              <section className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-700 p-6 md:p-10 mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t.s4.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{t.s4.intro}</p>
                <ul className="space-y-3 mb-4">
                  {t.s4.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 bg-gray-50 dark:bg-slate-700/50 p-4 rounded-lg">
                      <span className="text-accent">•</span>
                      <span className="text-gray-600 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-gray-500 dark:text-gray-400 italic">{t.s4.note}</p>
              </section>
            </Reveal>
          )}

          {/* Section 5: AI Content */}
          {siteContent.aiGenerated && (
            <Reveal>
              <section className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/30 rounded-2xl p-6 md:p-10 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <Bot size={24} className="text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{t.s5.title}</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{t.s5.intro}</p>
                <ul className="space-y-3">
                  {t.s5.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 bg-white dark:bg-slate-800 p-4 rounded-lg">
                      <Bot size={18} className="text-blue-500 shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
          )}

          {/* Section 6: External Links */}
          <Reveal>
            <section className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-700 p-6 md:p-10 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <Link2 size={24} className="text-gray-400" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{t.s6.title}</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{t.s6.text}</p>
            </section>
          </Reveal>

          {/* Section 7: Accuracy */}
          <Reveal>
            <section className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-700 p-6 md:p-10 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t.s7.title}</h2>
              <ul className="space-y-3">
                {t.s7.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 bg-gray-50 dark:bg-slate-700/50 p-4 rounded-lg">
                    <Info size={18} className="text-accent shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>

          {/* Section 8: Contact */}
          <Reveal>
            <section className="bg-gray-100 dark:bg-slate-800/50 rounded-2xl p-6 md:p-10">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{t.s8.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                {t.s8.text}
              </p>
              <a
                href={`mailto:${t.s8.email}`}
                className="inline-flex items-center gap-2 text-accent hover:underline font-medium"
              >
                <ExternalLink size={16} />
                {t.s8.email}
              </a>
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
