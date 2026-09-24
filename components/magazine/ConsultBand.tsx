import { LeadForm } from '../forms/LeadForm';

/** Consultation form + newsletter card, shown at the bottom of content pages. */
export const ConsultBand = () => (
  <section id="consult" className="scroll-mt-32 bg-ink-100 dark:bg-ink-950">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 flex flex-col lg:flex-row gap-10 items-start">
      <LeadForm variant="consult" className="flex-1 w-full" />
      <div className="w-full lg:w-96 shrink-0 rounded-2xl bg-white dark:bg-ink-900 p-6 md:p-7 shadow-sm">
        <LeadForm variant="newsletter" />
      </div>
    </div>
  </section>
);
