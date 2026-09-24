import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { getChrome } from '../../i18n/siteChrome';
import { LeadForm } from '../forms/LeadForm';

/**
 * Registry sign-up for professionals. One form, two audiences
 * (architects & designers / contractors) switched with a segmented control.
 */
export const ProSection = () => {
  const { language } = useLanguage();
  const f = getChrome(language).footer;
  const [audience, setAudience] = useState<'architects' | 'contractors'>('architects');

  const tab = (id: 'architects' | 'contractors', label: string) => (
    <button
      type="button"
      aria-pressed={audience === id}
      onClick={() => setAudience(id)}
      className={`h-11 px-5 rounded-full text-sm font-semibold transition-colors ${
        audience === id
          ? 'bg-ink-950 text-white dark:bg-white dark:text-ink-950'
          : 'text-ink-800 dark:text-ink-300 hover:bg-ink-100 dark:hover:bg-ink-800'
      }`}
    >
      {label}
    </button>
  );

  return (
    <section id="pros" className="scroll-mt-32 bg-white dark:bg-ink-900 border-y border-ink-300 dark:border-ink-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 max-w-5xl">
        <div className="mb-8 inline-flex gap-1 rounded-full border border-ink-300 dark:border-ink-700 p-1" role="group" aria-label={f.prosTitle}>
          {tab('architects', f.architects)}
          {tab('contractors', f.contractors)}
        </div>
        <LeadForm key={audience} variant={audience} />
      </div>
    </section>
  );
};
