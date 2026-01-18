import { Home, Shield, Building, Warehouse, Lock, Sun, Ruler } from 'lucide-react';
import { Service, Product, GalleryItem, NavLink } from '../types';

/**
 * Arabic Translations - Modern Standard Arabic (اللغة العربية الفصحى)
 * Professional tone suitable for business and construction industry
 */
export const TRANSLATIONS_AR = {
  direction: 'rtl' as const,
  companyName: "أنتون",
  tagline: "حلول الألومنيوم والصلب المتقدمة",
  nav: [
    { path: '/', label: 'الرئيسية' },
    { path: '/products', label: 'المنتجات' },
    { path: '/gallery', label: 'المعرض' },
    { path: '/about', label: 'من نحن' },
    { path: '/contact', label: 'اتصل بنا' },
  ],
  buttons: {
    callNow: 'اتصل الآن',
    products: 'منتجاتنا',
    contact: 'اتصل بنا',
    learnMore: 'اعرف المزيد',
    scroll: 'مرر',
    viewDetails: 'عرض التفاصيل',
    sendMessage: 'إرسال الرسالة',
    sending: 'جارٍ الإرسال...',
    success: 'تم إرسال الرسالة بنجاح!',
    backToTop: 'العودة إلى الأعلى'
  },
  cookies: {
    title: 'إعدادات ملفات الارتباط',
    text: 'نستخدم ملفات الارتباط لتحسين تجربة التصفح الخاصة بك، وتقديم محتوى مخصص، وتحليل حركة المرور.',
    acceptAll: 'قبول الكل',
    rejectAll: 'رفض الكل',
    customize: 'تخصيص',
    save: 'حفظ التفضيلات',
    categories: {
      essential: {
        title: 'الأساسية',
        desc: 'هذه ملفات الارتباط الضرورية لعمل الموقع ولا يمكن إيقاف تشغيلها.'
      },
      analytics: {
        title: 'التحليلات',
        desc: 'تساعدنا في فهم كيفية تفاعل الزوار مع الموقع.'
      },
      marketing: {
        title: 'التسويق',
        desc: 'تستخدم لعرض الإعلانات ذات الصلة والمحتوى المخصص.'
      }
    }
  },
  home: {
    heroTitle: 'التصميم والسلامة',
    heroHighlight: 'دون أي مساومة',
    heroDesc: 'نتخصص في تخطيط وتصنيع وتركيب الأبواب والسيارات وحلول التظليل من المستوى الأعلى.',
    servicesTitle: 'حلولنا',
    servicesDesc: 'مجموعة واسعة من المنتجات عالية الجودة مصممة خصيصاً لاحتياجاتك. اسحب لاكتشاف جميع الخدمات.',
    ctaTitle: 'هل أنت مستعد لترقية ممتلكاتك؟',
    ctaDesc: 'فريقنا المهني متاح لتقديم استشارة أولية دون أي التزام. دعنا نخطط لمشروعك القادم معاً.',
    ctaButton: 'تحدث معنا اليوم',
    features: {
      warranty: { title: 'ضمان شامل', desc: 'جميع منتجاتنا تأتي مع ضمان شامل لراحتك الذهنية.' },
      design: { title: 'تصميم مخصص', desc: 'تخصيص كامل للتصميم والأبعاد والألوان لتلبية متطلبات المشروع.' },
      safety: { title: 'معايير السلامة', desc: 'الالتزام بأدق المعايير للسلامة والجودة.' },
      schedule: { title: 'التسليم في الوقت المحدد', desc: 'الالتزام بأوقات التسليم والتركيب السريع دون تأخير.' }
    }
  },
  products: {
    title: 'منتجاتنا',
    subtitle: 'كتالوج المنتجات الشامل لدينا. يتم تصنيع كل بعناية من مواد خام عالية الجودة وتصميم حديث.',
    noResults: 'لم يتم العثور على منتجات في هذه الفئة.',
    categories: [
      { id: 'all', label: 'الكل' },
      { id: 'gates', label: 'الأبواب' },
      { id: 'fences', label: 'السيارات' },
      { id: 'pergolas', label: 'المظلات' },
      { id: 'railings', label: 'الدرابزين' },
      { id: 'cladding', label: 'الواجهات' },
    ]
  },
  gallery: {
    title: 'معرض المشاريع',
    subtitle: 'لمحة عن بعض المشاريع التي نفذناها لعملائنا. جودة لا مساومة عليها في كل التفاصيل.',
    types: {
      residential: 'سكني',
      commercial: 'تجاري',
      outdoor: 'في الهواء الطلق'
    }
  },
  about: {
    title: 'عن أنتون',
    subtitle: 'منذ عام 2005، كنا نقود صناعة الألومنيوم والصلب في إسرائيل بمعايير جديدة للجودة والخدمة والابتكار.',
    storyTitle: 'قصتنا',
    storyP1: 'تأسست شركة "أنتون" من شغف بالجمالية والعملية في عالم البناء. ما بدأ كورشة صغيرة grew لتصبح واحدة من الشركات الرائدة في حلول الألومنيوم والصلب للاستخدام السكني والصناعي.',
    storyP2: 'نحن نؤمن بأن المنزل هو حصن الإنسان، لذلك كل منتج يخرج من مصنعنا يخضع لمراقبة جودة صارمة. أبوابنا وسياراتنا ومظلاتنا ليست فقط منتجات سلامة وتظليل - فهي جزء لا يتجزأ من تصميم المنزل.',
    storyP3: 'يتكون فريقنا من مهندسين ومصممين ومثبتين معتمدين لديهم عقود من الخبرة، ملتزمين بإعطاء كل عميل الحل الأكثر دقة لاحتياجاته.',
    valuesTitle: 'قيمنا',
    values: [
      { title: 'التميز', text: 'نسعى للكمال في كل لحام وبرغي.' },
      { title: 'الخدمة الشخصية', text: 'مرافقة وثيقة من التخطيط حتى انتهاء التركيب.' },
      { title: 'الاحترافية', text: 'استخدام أحدث تقنيات التصنيع.' },
      { title: 'الموثوقية', text: 'شفافية كاملة والالتزام الصارم بالجداول الزمنية.' },
    ]
  },
  contact: {
    title: 'اتصل بنا',
    subtitle: 'لديك سؤال؟ تريد الحصول على عرض سعر؟ اترك تفاصيلك وسنعود إليك قريباً.',
    infoTitle: 'معلومات الاتصال',
    phone: 'الهاتف',
    phoneNote: 'الأحد - الخميس، 08:00 - 18:00',
    email: 'البريد الإلكتروني',
    address: 'العنوان',
    addressVal: 'شارع هاميلاخا 12، المنطقة الصناعية حولون',
    formTitle: 'أرسل لنا رسالة',
    formSubtitle: 'املأ النموذج وسيتصل بك ممثلنا لتحديد موعد للاستشارة.',
    labels: {
      name: 'الاسم الكامل',
      namePlaceholder: 'محمد أحمد',
      phone: 'الهاتف',
      phonePlaceholder: '050-0000000',
      email: 'البريد الإلكتروني',
      emailPlaceholder: 'name@example.com',
      designType: 'نوع التصميم المطلوب',
      designPlaceholder: 'اختر نوع التصميم...',
      message: 'الرسالة',
      messagePlaceholder: 'أخبرنا عن مشروعك...'
    },
    designs: [
      { id: 'gates', label: 'أبواب كهربائية' },
      { id: 'fences', label: 'سيارات ألومنيوم' },
      { id: 'pergolas', label: 'مظلات التظليل' },
      { id: 'railings', label: 'درابزين السلامة' },
      { id: 'cladding', label: 'واجهات الجدران' },
      { id: 'bars', label: 'شبكات مزخرفة' },
      { id: 'other', label: 'آخر / حل مخصص' },
    ],
    map: 'خريطة تفاعلية (محاكاة)'
  },
  footer: {
    about: 'خبراؤك لحلول الألومنيوم والصلب. التصميم والتصنيع والتركيب بأعلى مستوى، مع الالتزام الصارم بالجودة والخدمة دون أي مساومة.',
    quickLinks: 'روابط سريعة',
    services: 'خدماتنا',
    contact: 'معلومات الاتصال',
    rights: 'جميع الحقوق محفوظة.'
  },
  servicesList: [
    {
      id: 'gates',
      title: 'أبواب كهربائية',
      description: 'أبواب مصممة من الألومنيوم والصلب تجمع بين السلامة القصوى والتصميم الحديث والفاخر للمنزل والعمل.',
      icon: Shield,
      image: 'https://picsum.photos/800/600?random=1'
    },
    {
      id: 'fences',
      title: 'سيارات مصممة',
      description: 'حلول السيارات المحيطة التي تحافظ على خصوصيتك مع الحفاظ على خط تصميم نظيف وجمالي.',
      icon: Ruler,
      image: 'https://picsum.photos/800/600?random=2'
    },
    {
      id: 'pergolas',
      title: 'مظلات التظليل',
      description: 'مظلات ألومنيوم متقدمة، كهربائية أو ثابتة، مقاومة لجميع ظروف الطقس ولا تتطلب صيانة.',
      icon: Sun,
      image: 'https://picsum.photos/800/600?random=3'
    },
    {
      id: 'railings',
      title: 'درابزين السلامة',
      description: 'درابزين من الزجاج والألومنيوم للشرفات والدراج، يجمع بين الشفافية والسلامة وفقاً لأدق المعايير.',
      icon: Home,
      image: 'https://picsum.photos/800/600?random=4'
    },
    {
      id: 'cladding',
      title: 'واجهات الألومنيوم',
      description: 'واجهات جدران متقدمة تمنح المبنى مظهراً مبتكراً وعازلاً حرارياً وحماية لسنوات.',
      icon: Building,
      image: 'https://picsum.photos/800/600?random=5'
    },
    {
      id: 'bars',
      title: 'الشبكات',
      description: 'شبكات زخرفية لا تعيق المنظر وتوفر الحماية القصوى وراحة البال.',
      icon: Lock,
      image: 'https://picsum.photos/800/600?random=6'
    }
  ],
  productsList: [
    { id: '1', category: 'gates', title: 'بوابة دخول هاي-تيك', description: 'بوابة ألومنيوم موديل هاي-تيك مع محرك مخفي', image: 'https://picsum.photos/600/400?random=10' },
    { id: '2', category: 'gates', title: 'بوابة جناح كلاسيكية', description: 'بوابة جناح بتصميم كلاسيكي مع عناصر زخرفية', image: 'https://picsum.photos/600/400?random=11' },
    { id: '3', category: 'fences', title: 'سيارةLouvers', description: 'سيارة ألومنيوم موديل Louvers للخصوصية الكاملة', image: 'https://picsum.photos/600/400?random=12' },
    { id: '4', category: 'fences', title: 'سيارة هاي-تيك', description: 'سيارة بخطوط مستقيمة ونظيفة', image: 'https://picsum.photos/600/400?random=13' },
    { id: '5', category: 'pergolas', title: 'مظلة معلقة', description: 'مظلة بدون أعمدة بتصميم عائم', image: 'https://picsum.photos/600/400?random=14' },
    { id: '6', category: 'pergolas', title: 'مظلة كهربائية', description: 'مظلة قابلة للسحب مع جهاز تحكم عن بعد', image: 'https://picsum.photos/600/400?random=15' },
    { id: '7', category: 'railings', title: 'درابزين زجاجي', description: 'درابزين زجاجي مدمج بدون أعمدة', image: 'https://picsum.photos/600/400?random=16' },
    { id: '8', category: 'cladding', title: 'واجهة على شكل خشب', description: 'واجهة ألومنيوم بلمسة خشبية عالية الجودة', image: 'https://picsum.photos/600/400?random=17' },
  ],
  galleryList: [
    { id: '1', category: 'residential', title: 'فيلا في سافيون', image: 'https://picsum.photos/800/800?random=20' },
    { id: '2', category: 'commercial', title: 'مكاتب هاي-تيك هرتسليا', image: 'https://picsum.photos/800/600?random=21' },
    { id: '3', category: 'residential', title: 'منزل خاص في قيساريا', image: 'https://picsum.photos/600/800?random=22' },
    { id: '4', category: 'outdoor', title: 'حديقة مصممة في رمات هشارون', image: 'https://picsum.photos/800/600?random=23' },
    { id: '5', category: 'residential', title: 'بنتهاوس في تل أبيب', image: 'https://picsum.photos/800/800?random=24' },
    { id: '6', category: 'commercial', title: 'مول أزريلي', image: 'https://picsum.photos/600/600?random=25' },
  ]
};
