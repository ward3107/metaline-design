import { Link } from 'react-router-dom';
import type { Article } from '../../data/articles';

interface Props {
  article: Article;
  readMoreLabel: string;
}

export const ArticleCard = ({ article, readMoreLabel }: Props) => (
  <article lang="he" dir="rtl" className="group flex flex-col overflow-hidden rounded-xl border border-ink-300 dark:border-ink-800 bg-white dark:bg-ink-900">
    <Link to={`/magazine/${article.slug}`} tabIndex={-1} aria-hidden="true" className="block aspect-[4/3] overflow-hidden">
      <img src={article.cover} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
    </Link>
    <div className="flex flex-1 flex-col gap-3 p-5">
      <h3 className="font-display text-lg md:text-xl font-bold leading-snug text-ink-950 dark:text-white">
        <Link to={`/magazine/${article.slug}`} className="hover:text-accent-hover dark:hover:text-accent">{article.title}</Link>
      </h3>
      <p className="text-ink-700 dark:text-ink-300 line-clamp-2">{article.excerpt}</p>
      <Link
        to={`/magazine/${article.slug}`}
        className="mt-auto self-start font-semibold text-accent-hover dark:text-accent underline-offset-4 hover:underline"
        aria-label={`${readMoreLabel}: ${article.title}`}
      >
        {readMoreLabel}
      </Link>
    </div>
  </article>
);
