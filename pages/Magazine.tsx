import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { getChrome } from '../i18n/siteChrome';
import { ARTICLES } from '../data/articles';
import { ArticleCard } from '../components/magazine/ArticleCard';
import { ProSection } from '../components/magazine/ProSection';
import { ConsultBand } from '../components/magazine/ConsultBand';

export const Magazine: React.FC = () => {
  const { language } = useLanguage();
  const chrome = getChrome(language);
  const mg = chrome.magazine;
  const articles = [...ARTICLES].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="bg-ink-50 dark:bg-ink-950 text-ink-950 dark:text-ink-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 md:pt-14 pb-8">
        <nav aria-label={mg.breadcrumb} className="text-sm text-ink-700 dark:text-ink-400 mb-4">
          <ol className="flex flex-wrap gap-2">
            <li><Link to="/" className="hover:underline">{chrome.utility.home}</Link></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page">{mg.title}</li>
          </ol>
        </nav>
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">{mg.title}</h1>
        <p className="text-lg md:text-xl text-ink-700 dark:text-ink-300 max-w-2xl">{mg.subtitle}</p>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {articles.map((a) => (
            <ArticleCard key={a.slug} article={a} readMoreLabel={mg.readMore} />
          ))}
        </div>
      </div>

      <ProSection />
      <ConsultBand />
    </div>
  );
};
