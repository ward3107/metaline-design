import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Phone,
  MessageCircle,
  Compass,
  Ruler,
  Hammer,
  Truck,
} from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { useLanguage } from '../context/LanguageContext';
import { CONTACT_CONFIG, GALLERY_ITEMS, HERO_IMAGE, WHATSAPP_NUMBER } from '../constants';

// Localized copy for the new sections (Process, Stats, Featured) that the
// existing translations don't cover. Hebrew is primary; others fall back.
const sectionCopy = {
  he: {
    eyebrow: 'אנטון · מסגריה אומנותית',
    secondaryCta: 'התקשרו עכשיו',
    whatsapp: 'דברו איתנו בוואטסאפ',
    stats: [
      { value: '20+', label: 'שנות ניסיון' },
      { value: '1,200+', label: 'פרויקטים שהושלמו' },
      { value: '5 שנים', label: 'אחריות יצרן' },
      { value: 'ארץ-ישראל', label: 'התקנה ברחבי הארץ' },
    ],
    processEyebrow: 'איך עובדים איתנו',
    processTitle: 'מהפגישה הראשונה ועד ההתקנה.',
    processIntro: 'תהליך שקוף ומסודר, בלי הפתעות, עם איש קשר אחד לאורך כל הדרך.',
    process: [
      { icon: Compass, n: '01', title: 'ייעוץ ופגישה', desc: 'מבקרים אצלכם, מבינים את הצורך, מציגים אפשרויות עיצוב וחומרים.' },
      { icon: Ruler, n: '02', title: 'מדידה ותכנון', desc: 'מודדים במקום, שולחים שרטוט מדויק והצעת מחיר סופית לאישור.' },
      { icon: Hammer, n: '03', title: 'ייצור במפעל', desc: 'מייצרים אצלנו בחולון בקפדנות, על חומרי גלם של מותגים מובילים.' },
      { icon: Truck, n: '04', title: 'התקנה ואחריות', desc: 'מתקינים בנקיון, מסיימים בזמן, ונותנים אחריות מלאה ושירות תחזוקה.' },
    ],
    featuredEyebrow: 'מבחר עבודות',
    featuredTitle: 'פרויקטים אחרונים מהשטח.',
    featuredCta: 'לכל הגלריה',
    finalEyebrow: 'בואו נתחיל',
    finalTitle: 'יש לכם פרויקט בראש?',
    finalDesc: 'נשמח לבוא, למדוד, ולהציע לכם פתרון מותאם אישית — בלי התחייבות.',
    finalCallCta: 'התקשרו אלינו',
    finalFormCta: 'מלאו טופס קצר',
  },
  ar: {
    eyebrow: 'أنتون · أعمال حدادة',
    secondaryCta: 'اتصل الآن',
    whatsapp: 'تحدث معنا على واتساب',
    stats: [
      { value: '20+', label: 'سنوات الخبرة' },
      { value: '1,200+', label: 'مشروع منجز' },
      { value: '5 سنوات', label: 'ضمان المصنع' },
      { value: 'إسرائيل', label: 'تركيب في جميع أنحاء البلاد' },
    ],
    processEyebrow: 'كيف نعمل',
    processTitle: 'من الاجتماع الأول إلى التركيب.',
    processIntro: 'عملية شفافة ومنظمة، بدون مفاجآت، مع جهة اتصال واحدة طوال الطريق.',
    process: [
      { icon: Compass, n: '01', title: 'استشارة وزيارة', desc: 'نأتي إليكم، نفهم الاحتياج، نعرض خيارات التصميم والمواد.' },
      { icon: Ruler, n: '02', title: 'القياس والتخطيط', desc: 'نقيس في الموقع، نرسل مخططًا دقيقًا وعرض سعر نهائي للموافقة.' },
      { icon: Hammer, n: '03', title: 'التصنيع في المصنع', desc: 'نصنع في موقعنا في حولون بدقة، باستخدام مواد خام من علامات تجارية رائدة.' },
      { icon: Truck, n: '04', title: 'التركيب والضمان', desc: 'نركّب بنظافة، ننهي في الموعد، ونقدم ضمانًا شاملاً وخدمة صيانة.' },
    ],
    featuredEyebrow: 'مختارات من الأعمال',
    featuredTitle: 'مشاريع حديثة من الميدان.',
    featuredCta: 'إلى المعرض الكامل',
    finalEyebrow: 'هيا نبدأ',
    finalTitle: 'لديك مشروع في الذهن؟',
    finalDesc: 'يسعدنا الحضور والقياس وتقديم حل مخصص لك — بدون التزام.',
    finalCallCta: 'اتصل بنا',
    finalFormCta: 'املأ نموذجًا قصيرًا',
  },
  en: {
    eyebrow: 'Anton · Custom Metalwork',
    secondaryCta: 'Call us',
    whatsapp: 'Chat on WhatsApp',
    stats: [
      { value: '20+', label: 'Years experience' },
      { value: '1,200+', label: 'Projects delivered' },
      { value: '5 years', label: 'Manufacturer warranty' },
      { value: 'Nationwide', label: 'Installation across Israel' },
    ],
    processEyebrow: 'How we work',
    processTitle: 'From the first meeting to installation.',
    processIntro: 'A transparent, organized process — no surprises, one point of contact throughout.',
    process: [
      { icon: Compass, n: '01', title: 'Consultation & visit', desc: 'We come to you, understand the need, and present design and material options.' },
      { icon: Ruler, n: '02', title: 'Measurement & design', desc: 'On-site measurement, precise shop drawings, and a final quote for approval.' },
      { icon: Hammer, n: '03', title: 'In-house manufacture', desc: 'Built carefully in our Holon workshop from premium aluminum and steel.' },
      { icon: Truck, n: '04', title: 'Install & warranty', desc: 'Clean installation on schedule, full warranty, and ongoing service.' },
    ],
    featuredEyebrow: 'Selected work',
    featuredTitle: 'Recent projects from the field.',
    featuredCta: 'See full gallery',
    finalEyebrow: "Let's start",
    finalTitle: 'Got a project in mind?',
    finalDesc: "We'll come, measure, and propose a custom solution — no obligation.",
    finalCallCta: 'Call us',
    finalFormCta: 'Send a short brief',
  },
  ru: {
    eyebrow: 'Антон · Художественная ковка',
    secondaryCta: 'Позвонить',
    whatsapp: 'Написать в WhatsApp',
    stats: [
      { value: '20+', label: 'лет опыта' },
      { value: '1200+', label: 'выполненных проектов' },
      { value: '5 лет', label: 'гарантия' },
      { value: 'Вся страна', label: 'монтаж по Израилю' },
    ],
    processEyebrow: 'Как мы работаем',
    processTitle: 'От первой встречи до монтажа.',
    processIntro: 'Прозрачный процесс без сюрпризов, один контакт от начала до конца.',
    process: [
      { icon: Compass, n: '01', title: 'Консультация и выезд', desc: 'Приезжаем к вам, изучаем задачу, показываем варианты дизайна и материалов.' },
      { icon: Ruler, n: '02', title: 'Замеры и проект', desc: 'Точные замеры, чертежи и финальное коммерческое предложение.' },
      { icon: Hammer, n: '03', title: 'Производство', desc: 'Изготавливаем на собственной площадке в Холоне из качественных материалов.' },
      { icon: Truck, n: '04', title: 'Монтаж и гарантия', desc: 'Чистый монтаж в срок, полная гарантия и сервисная поддержка.' },
    ],
    featuredEyebrow: 'Избранные работы',
    featuredTitle: 'Свежие проекты.',
    featuredCta: 'Вся галерея',
    finalEyebrow: 'Начнём?',
    finalTitle: 'Есть проект на примете?',
    finalDesc: 'Приедем, замерим и предложим индивидуальное решение — без обязательств.',
    finalCallCta: 'Позвонить',
    finalFormCta: 'Оставить заявку',
  },
} as const;

type SectionCopy = (typeof sectionCopy)[keyof typeof sectionCopy];

export const Home: React.FC = () => {
  const { content, language } = useLanguage();
  const Arrow = language === 'he' || language === 'ar' ? ArrowLeft : ArrowRight;
  const isRTL = language === 'he' || language === 'ar';
  const t: SectionCopy = sectionCopy[language as keyof typeof sectionCopy] || sectionCopy.en;

  const featuredProjects = GALLERY_ITEMS.slice(0, 4);

  return (
    <div className="bg-ink-50 dark:bg-ink-950 text-ink-950 dark:text-ink-50">
      {/* ────────────────────────────── HERO ────────────────────────────── */}
      <section className="relative min-h-[78vh] md:min-h-[88vh] flex items-end overflow-hidden">
        {/* Background image + gradient */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/80 to-ink-950/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950/70 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-24 pt-24 md:pt-32">
          <div className="max-w-3xl">
            <Reveal>
              <p className="eyebrow text-accent mb-4 md:mb-5">{t.eyebrow}</p>
            </Reveal>
            <Reveal>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.08] md:leading-[1.05] tracking-normal text-white mb-5 md:mb-6">
                {content.home.heroTitle}{' '}
                <span className="text-accent">{content.home.heroHighlight}</span>.
              </h1>
            </Reveal>
            <Reveal>
              <p className="text-lg md:text-xl text-ink-300 max-w-xl leading-relaxed mb-10 font-light">
                {content.home.heroDesc}
              </p>
            </Reveal>
            <Reveal width="100%">
              <div className={`flex flex-col sm:flex-row gap-3 ${isRTL ? 'sm:justify-start' : 'sm:justify-start'}`}>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-ink-950 font-bold px-7 py-4 rounded-md transition-colors"
                >
                  {content.home.ctaButton}
                  <Arrow size={18} />
                </Link>
                <a
                  href={`tel:${CONTACT_CONFIG.phone}`}
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 backdrop-blur-sm text-white font-semibold px-7 py-4 rounded-md ring-1 ring-white/20 transition-colors"
                >
                  <Phone size={18} />
                  <span dir="ltr">{CONTACT_CONFIG.phone}</span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ────────────────────────── STATS STRIP ────────────────────────── */}
      <section className="bg-ink-950 border-y border-ink-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 divide-ink-800 lg:divide-x lg:rtl:divide-x-reverse lg:divide-ink-800">
            {t.stats.map((s, i) => (
              <div key={i} className="py-8 lg:py-10 px-2 lg:px-8 text-center lg:text-start">
                <div className="font-display text-3xl md:text-4xl font-extrabold text-white mb-1 tracking-tight">
                  {s.value}
                </div>
                <div className="text-xs md:text-sm uppercase tracking-widest text-ink-500">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────── SERVICES ─────────────────────────── */}
      <section className="bg-ink-50 dark:bg-ink-900 py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-12 lg:mb-20">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="eyebrow mb-4">{content.home.servicesTitle}</p>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] tracking-normal text-ink-950 dark:text-ink-50">
                  {content.home.servicesTitle}
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex items-end">
              <Reveal width="100%">
                <p className="text-lg text-ink-700 dark:text-ink-300 leading-relaxed">
                  {content.home.servicesDesc}
                </p>
              </Reveal>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink-200 dark:bg-ink-800 border border-ink-200 dark:border-ink-800 rounded-2xl overflow-hidden">
            {content.servicesList.map((service: { id: string; title: string; description: string; image: string; icon: React.ComponentType<{ size?: number }> }) => (
              <Reveal key={service.id} width="100%">
                <Link
                  to="/products"
                  className="group bg-white dark:bg-ink-900 hover:bg-ink-50 dark:hover:bg-ink-800 transition-colors h-full flex flex-col"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-ink-100 dark:bg-ink-800">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/40 to-transparent" />
                    <div className={`absolute top-4 ${isRTL ? 'right-4' : 'left-4'} w-10 h-10 bg-white/95 dark:bg-ink-950/80 backdrop-blur-sm rounded-md flex items-center justify-center text-accent`}>
                      <service.icon size={20} />
                    </div>
                  </div>
                  <div className="p-6 md:p-7 flex-grow flex flex-col">
                    <h3 className="font-display text-xl md:text-2xl font-bold text-ink-950 dark:text-ink-50 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm md:text-base text-ink-700 dark:text-ink-300 leading-relaxed mb-4 flex-grow">
                      {service.description}
                    </p>
                    <div className="inline-flex items-center gap-2 text-accent font-semibold text-sm">
                      {content.buttons.learnMore}
                      <Arrow size={16} className="transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────── PROCESS ─────────────────────────── */}
      <section className="bg-white dark:bg-ink-950 py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <Reveal>
              <p className="eyebrow mb-4">{t.processEyebrow}</p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] tracking-normal text-ink-950 dark:text-ink-50 mb-5">
                {t.processTitle}
              </h2>
              <p className="text-lg text-ink-700 dark:text-ink-300 leading-relaxed">{t.processIntro}</p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {t.process.map((step, idx) => (
              <Reveal key={idx} width="100%">
                <div className="relative h-full p-7 lg:p-8 bg-ink-50 dark:bg-ink-900 border border-ink-200 dark:border-ink-800 rounded-xl">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-md bg-accent/10 text-accent flex items-center justify-center">
                      <step.icon size={24} />
                    </div>
                    <span className="font-display text-2xl font-black text-ink-300 dark:text-ink-700 tracking-tight">
                      {step.n}
                    </span>
                  </div>
                  <h3 className="font-display text-lg md:text-xl font-bold text-ink-950 dark:text-ink-50 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-ink-700 dark:text-ink-300 leading-relaxed">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────── FEATURED WORK ──────────────────────── */}
      <section className="bg-ink-100 dark:bg-ink-900 py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
            <div className="max-w-2xl">
              <Reveal>
                <p className="eyebrow mb-4">{t.featuredEyebrow}</p>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] tracking-normal text-ink-950 dark:text-ink-50">
                  {t.featuredTitle}
                </h2>
              </Reveal>
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 self-start md:self-end text-accent hover:text-accent-hover font-semibold transition-colors"
            >
              {t.featuredCta}
              <Arrow size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredProjects.map((p, idx) => (
              <Reveal key={p.id} width="100%">
                <Link
                  to="/gallery"
                  className={`group relative block overflow-hidden rounded-xl bg-ink-200 dark:bg-ink-800 ${
                    idx === 0 ? 'lg:col-span-2 lg:row-span-2 aspect-square lg:aspect-auto lg:h-full' : 'aspect-[4/5]'
                  }`}
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                    <p className="text-xs uppercase tracking-widest text-ink-300 mb-1">
                      {content.gallery?.types?.[p.category] || p.category}
                    </p>
                    <h3 className="font-display text-lg md:text-2xl font-bold text-white">
                      {p.title}
                    </h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────── FINAL CTA ────────────────────────── */}
      <section className="relative bg-ink-950 text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 20% 30%, rgba(245,158,11,0.25), transparent 40%), radial-gradient(circle at 80% 70%, rgba(245,158,11,0.18), transparent 45%)',
            }}
          />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <p className="eyebrow mb-5">{t.finalEyebrow}</p>
              <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-normal text-white mb-6">
                {t.finalTitle}
              </h2>
              <p className="text-lg md:text-xl text-ink-300 mb-10 leading-relaxed">{t.finalDesc}</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-ink-950 font-bold px-8 py-4 rounded-md transition-colors w-full sm:w-auto"
                >
                  {t.finalFormCta}
                  <Arrow size={18} />
                </Link>
                <a
                  href={`tel:${CONTACT_CONFIG.phone}`}
                  className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-md ring-1 ring-white/15 transition-colors w-full sm:w-auto"
                >
                  <Phone size={18} />
                  {t.finalCallCta}
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-ink-300 hover:text-white font-medium px-4 py-4 transition-colors"
                >
                  <MessageCircle size={18} />
                  {t.whatsapp}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};
