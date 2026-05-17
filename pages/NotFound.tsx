import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const copy = {
  he: {
    code: '404',
    title: 'הדף לא נמצא',
    body: 'הקישור שביקשתם לא קיים או הוסר. אפשר לחזור לדף הבית.',
    cta: 'חזרה לדף הבית',
  },
  ar: {
    code: '404',
    title: 'الصفحة غير موجودة',
    body: 'الرابط الذي طلبته غير موجود أو تم حذفه. يمكنك العودة إلى الصفحة الرئيسية.',
    cta: 'العودة إلى الصفحة الرئيسية',
  },
  en: {
    code: '404',
    title: 'Page Not Found',
    body: "The page you're looking for doesn't exist or has been moved.",
    cta: 'Back to Home',
  },
  ru: {
    code: '404',
    title: 'Страница не найдена',
    body: 'Запрошенная страница не существует или была перемещена.',
    cta: 'Вернуться на главную',
  },
} as const;

export const NotFound = () => {
  const { language } = useLanguage();
  const t = (copy as unknown as Record<string, typeof copy.en>)[language] || copy.en;

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="text-7xl font-bold text-accent mb-2">{t.code}</p>
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3">{t.title}</h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8">{t.body}</p>
        <Link
          to="/"
          className="inline-block bg-accent hover:bg-accent-hover text-white font-bold py-3 px-8 rounded-lg transition-colors"
        >
          {t.cta}
        </Link>
      </div>
    </div>
  );
};
