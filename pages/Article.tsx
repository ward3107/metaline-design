import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Share2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getChrome } from '../i18n/siteChrome';
import { ARTICLES, getArticle, ArticleBlock } from '../data/articles';
import { ArticleCard } from '../components/magazine/ArticleCard';
import { ProSection } from '../components/magazine/ProSection';
import { ConsultBand } from '../components/magazine/ConsultBand';
import { NotFound } from './NotFound';

const renderBlock = (b: ArticleBlock, i: number) => {
  switch (b.type) {
    case 'p':
      return <p key={i} className="text-lg leading-8 text-ink-800 dark:text-ink-300">{b.text}</p>;
    case 'h2':
      return <h2 key={i} className="font-display text-2xl md:text-3xl font-bold mt-6 text-ink-950 dark:text-white">{b.text}</h2>;
    case 'h3':
      return <h3 key={i} className="font-display text-xl font-bold mt-2 text-ink-950 dark:text-white">{b.text}</h3>;
    case 'ul':
      return (
        <ul key={i} className="list-disc ps-6 flex flex-col gap-3 text-lg leading-8 text-ink-800 dark:text-ink-300 marker:text-accent">
          {b.items.map((it, j) => <li key={j}>{it}</li>)}
        </ul>
      );
    case 'img':
      return (
        <figure key={i} className="my-4 flex flex-col items-center gap-3">
          <img src={b.src} alt={b.alt} loading="lazy" className="w-full max-w-xl aspect-square object-cover rounded-xl" />
          {b.caption && <figcaption className="text-sm text-ink-700 dark:text-ink-400">{b.caption}</figcaption>}
        </figure>
      );
  }
};

/**
 * Magazine article page — mirrors the article skeleton:
 * breadcrumbs → H1 → bold lead → meta/share → body → 2-image gallery →
 * professionals registry → related articles → consultation + newsletter.
 */
export const Article: React.FC = () => {
  const { slug = '' } = useParams();
  const { language, content } = useLanguage();
  const chrome = getChrome(language);
  const mg = chrome.magazine;
  const article = getArticle(slug);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!article) return;
    const prevTitle = document.title;
    const meta = document.querySelector('meta[name="description"]');
    const prevDesc = meta?.getAttribute('content') ?? null;
    document.title = `${article.title} | ${content.companyName}`;
    meta?.setAttribute('content', article.excerpt);
    return () => {
      document.title = prevTitle;
      if (meta && prevDesc !== null) meta.setAttribute('content', prevDesc);
    };
  }, [article, content.companyName]);

  if (!article) return <NotFound />;

  const locale = language === 'he' ? 'he-IL' : language === 'ar' ? 'ar' : 'en-GB';
  const date = new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(article.date));
  const related = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3);

  const share = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try { await navigator.share({ title: article.title, url }); } catch { /* cancelled */ }
      return;
    }
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch { /* clipboard unavailable */ }
  };

  return (
    <div className="bg-ink-50 dark:bg-ink-950 text-ink-950 dark:text-ink-50">
      {/* Article header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 md:pt-14">
        <div className="max-w-3xl mx-auto flex flex-col gap-5">
          <nav aria-label={mg.breadcrumb} className="text-sm text-ink-700 dark:text-ink-400">
            <ol className="flex flex-wrap gap-2">
              <li><Link to="/" className="hover:underline">{chrome.utility.home}</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link to="/magazine" className="hover:underline">{mg.title}</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" lang="he" className="line-clamp-1">{article.title}</li>
            </ol>
          </nav>
        </div>
      </div>

      <article lang="he" dir="rtl" className="container mx-auto px-4 sm:px-6 lg:px-8 pb-14 md:pb-20">
        <div className="max-w-3xl mx-auto flex flex-col gap-6">
          <header className="flex flex-col gap-5 mt-5">
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">{article.title}</h1>
            <p className="text-xl md:text-2xl leading-relaxed font-semibold text-ink-800 dark:text-ink-200">{article.lead}</p>
            <div className="flex items-center justify-between gap-4 border-y border-ink-300 dark:border-ink-800 py-3">
              <div lang={language} className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-ink-700 dark:text-ink-400">
                <span>{mg.writtenBy} {article.author}</span>
                <time dateTime={article.date}>{date}</time>
                <span>{mg.readingTime(article.readMinutes)}</span>
              </div>
              <span aria-live="polite" lang={language} className="ms-auto text-sm text-accent-hover dark:text-accent">{copied ? mg.linkCopied : ''}</span>
              <button
                type="button"
                onClick={share}
                aria-label={mg.share}
                className="w-11 h-11 shrink-0 rounded-full border border-ink-300 dark:border-ink-700 flex items-center justify-center hover:bg-white dark:hover:bg-ink-800"
              >
                <Share2 size={18} />
              </button>
            </div>
          </header>

          {article.body.map(renderBlock)}

          {article.gallery.length > 0 && (
            <div className="grid grid-cols-2 gap-3 md:gap-5 mt-4 max-w-2xl mx-auto w-full">
              {article.gallery.map((g) => (
                <img key={g.src + g.alt} src={g.src} alt={g.alt} loading="lazy" className="w-full aspect-square object-cover rounded-xl" />
              ))}
            </div>
          )}
        </div>
      </article>

      <ProSection />

      {/* Related articles */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">{mg.relatedTitle}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {related.map((a) => (
            <ArticleCard key={a.slug} article={a} readMoreLabel={mg.readMore} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link to="/magazine" className="h-12 px-8 rounded-full border-2 border-ink-950 dark:border-white font-bold flex items-center hover:bg-ink-950 hover:text-white dark:hover:bg-white dark:hover:text-ink-950 transition-colors">
            {mg.allArticles}
          </Link>
        </div>
      </section>

      <ConsultBand />
    </div>
  );
};
