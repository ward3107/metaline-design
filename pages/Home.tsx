import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck, Clock, PenTool } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { ParallaxHero } from '../components/ParallaxHero';
import { ParallaxSection } from '../components/ParallaxSection';
import { useLanguage } from '../context/LanguageContext';

export const Home: React.FC = () => {
  const { content, language } = useLanguage();
  const Arrow = language === 'he' ? ArrowLeft : ArrowRight;
  const isRTL = language === 'he';

  const features = [
    { icon: ShieldCheck, title: content.home.features.warranty.title, desc: content.home.features.warranty.desc },
    { icon: PenTool, title: content.home.features.design.title, desc: content.home.features.design.desc },
    { icon: CheckCircle2, title: content.home.features.safety.title, desc: content.home.features.safety.desc },
    { icon: Clock, title: content.home.features.schedule.title, desc: content.home.features.schedule.desc },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <ParallaxHero
        image="https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=2069&auto=format&fit=crop"
        height="80vh"
        overlayOpacity={0.6}
      >
        <div className="max-w-3xl text-white">
          <Reveal>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight">
              {content.home.heroTitle} <span className="text-accent">{content.home.heroHighlight}</span>
            </h1>
          </Reveal>
          <Reveal>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 font-light max-w-2xl">
              {content.tagline}. {content.home.heroDesc}
            </p>
          </Reveal>
          <Reveal width="100%">
            <div className={`flex flex-col sm:flex-row gap-4 ${isRTL ? 'sm:justify-end' : 'sm:justify-start'}`}>
              <Link
                to="/products"
                className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                {content.buttons.products}
                <Arrow size={20} />
              </Link>
              <Link
                to="/contact"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors flex items-center justify-center w-full sm:w-auto"
              >
                {content.buttons.contact}
              </Link>
            </div>
          </Reveal>
        </div>
      </ParallaxHero>

      {/* Services Section */}
      <section className="bg-gray-50 dark:bg-slate-900 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal width="100%">
            <div className="max-w-3xl mb-12 md:mb-16">
              <div className="w-12 h-1 bg-accent mb-5"></div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                {content.home.servicesTitle}
              </h2>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
                {content.home.servicesDesc}
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {content.servicesList.map((service: { id: string; title: string; description: string; image: string; icon: any }) => (
              <Reveal key={service.id} width="100%">
                <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100 dark:border-slate-700 h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" loading="lazy" />
                    <div className={`absolute top-4 ${isRTL ? 'right-4' : 'left-4'} bg-white dark:bg-slate-700 p-2.5 rounded-lg text-accent shadow-sm`}>
                      <service.icon size={20} />
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-900 dark:text-white">{service.title}</h3>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-5 flex-grow">{service.description}</p>
                    <Link
                      to="/products"
                      className="mt-auto inline-flex items-center justify-center py-2.5 rounded-lg border border-gray-900 dark:border-white text-gray-900 dark:text-white font-semibold hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors text-sm"
                    >
                      {content.buttons.learnMore}
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features / Values Section */}
      <section className="bg-white dark:bg-slate-950 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal width="100%">
            <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
                {content.about.valuesTitle}
              </h2>
              <div className="w-16 h-1 bg-accent mx-auto" />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, idx) => (
              <Reveal key={idx} width="100%">
                <div className="bg-gray-50 dark:bg-slate-800 rounded-xl p-6 md:p-8 text-center h-full border border-gray-100 dark:border-slate-700 hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-white dark:bg-slate-700 flex items-center justify-center text-accent shadow-sm">
                    <feature.icon size={28} />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ParallaxSection
        image="https://picsum.photos/1920/800?grayscale&blur=2"
        className="py-20 md:py-28"
        overlayOpacity={0.7}
      >
        <div className="text-center relative z-10 px-4">
          <Reveal width="100%">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">{content.home.ctaTitle}</h2>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-3xl mx-auto font-light leading-relaxed">{content.home.ctaDesc}</p>
            <Link
              to="/contact"
              className="inline-block bg-accent hover:bg-accent-hover text-white px-10 py-4 md:px-12 md:py-5 rounded-lg font-bold text-lg md:text-xl shadow-lg hover:shadow-xl transition-shadow w-full sm:w-auto"
            >
              {content.home.ctaButton}
            </Link>
          </Reveal>
        </div>
      </ParallaxSection>
    </div>
  );
};
