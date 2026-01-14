import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck, Clock, PenTool } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { ParallaxHero } from '../components/ParallaxHero';
import { ParallaxSection } from '../components/ParallaxSection';
import { ParallaxElement } from '../components/ParallaxElement';
import { HorizontalScrollSection } from '../components/HorizontalScrollSection';
import { useLanguage } from '../context/LanguageContext';

export const Home: React.FC = () => {
  const { content, language } = useLanguage();
  const Arrow = language === 'he' ? ArrowLeft : ArrowRight;

  return (
    <div className="flex flex-col">
      {/* Parallax Hero Section */}
      <ParallaxHero 
        image="https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=2069&auto=format&fit=crop"
        height="100vh"
        overlayOpacity={0.6}
      >
        <div className="max-w-3xl text-white pt-12 md:pt-20">
          <Reveal>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 leading-tight">
              {content.home.heroTitle} <span className="text-accent">{content.home.heroHighlight}</span>
            </h1>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="text-lg md:text-2xl text-gray-200 mb-8 font-light max-w-2xl">
              {content.tagline}. {content.home.heroDesc}
            </p>
          </Reveal>
          <Reveal delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/products" 
                className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                {content.buttons.products}
                <Arrow size={20} />
              </Link>
              <Link 
                to="/contact" 
                className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center w-full sm:w-auto"
              >
                {content.buttons.contact}
              </Link>
            </div>
          </Reveal>
        </div>
      </ParallaxHero>

      {/* Horizontal Scroll Services Section - Starting at 020% to remove gap */}
      <HorizontalScrollSection 
        className="bg-gradient-to-b from-gray-50 to-primary dark:from-slate-900 dark:to-black" 
        scrollRange={["30%", "-30%"]}
        height="400vh"
      >
        {/* Title Card - Adjusted for better entry space */}
        <div className="min-w-[75vw] md:min-w-[40vw] lg:min-w-[30vw] p-4 md:p-8 flex flex-col justify-center">
             <div className="w-16 md:w-20 h-2 bg-accent mb-6 md:mb-8"></div>
             <h2 className="text-3xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 leading-tight">
               {content.home.servicesTitle.split(' ').map((word, i) => (
                  <React.Fragment key={i}>
                    {word}<br className="hidden md:block" />
                    <span className="md:hidden"> </span>
                  </React.Fragment>
               ))}
             </h2>
             <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-md">
               {content.home.servicesDesc}
             </p>
             <div className="mt-8 flex items-center gap-2 text-accent font-bold animate-pulse">
                <Arrow />
                <span className="text-sm md:text-base">{content.buttons.scroll}</span>
             </div>
        </div>

        {/* Service Cards */}
        {content.servicesList.map((service, index) => (
          <div 
            key={service.id} 
            className="group relative h-[60vh] md:h-[65vh] min-w-[80vw] md:min-w-[45vw] lg:min-w-[30vw] bg-white dark:bg-slate-800 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-slate-700 flex flex-col"
          >
            <div className="h-2/5 md:h-1/2 overflow-hidden relative">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              <div className={`absolute top-4 ${language === 'he' ? 'right-4' : 'left-4'} md:top-6 md:${language === 'he' ? 'right-6' : 'left-6'} bg-white dark:bg-slate-700 p-3 md:p-4 rounded-xl md:rounded-2xl text-accent shadow-lg`}>
                <service.icon size={24} className="md:w-8 md:h-8" />
              </div>
            </div>
            
            <div className="p-6 md:p-8 flex flex-col flex-grow relative">
               <span className={`absolute top-4 ${language === 'he' ? 'left-6' : 'right-6'} text-6xl md:text-8xl font-black text-gray-100 dark:text-slate-700/50 -z-0 opacity-50`}>
                 0{index + 1}
               </span>
               
               <h3 className="text-xl md:text-3xl font-bold mb-2 md:mb-4 text-gray-900 dark:text-white relative z-10">
                 {service.title}
               </h3>
               <p className="text-sm md:text-lg text-gray-600 dark:text-gray-300 mb-6 md:mb-8 leading-relaxed relative z-10 line-clamp-3 md:line-clamp-4">
                 {service.description}
               </p>
               
               <div className="mt-auto relative z-10">
                 <Link 
                    to="/products" 
                    className="inline-flex items-center justify-center w-full py-3 md:py-4 rounded-xl border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white font-bold hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors text-sm md:text-base"
                  >
                    {content.buttons.learnMore}
                  </Link>
               </div>
            </div>
          </div>
        ))}
      </HorizontalScrollSection>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-primary dark:bg-black text-white overflow-hidden relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <ParallaxElement offset={-15}>
              <div className="text-center p-6 border border-gray-700 rounded-xl hover:border-accent transition-colors bg-gray-800/50 backdrop-blur-sm h-full">
                <ShieldCheck className="w-10 h-10 md:w-12 md:h-12 text-accent mx-auto mb-4" />
                <h3 className="text-lg md:text-xl font-bold mb-2">{content.home.features.warranty.title}</h3>
                <p className="text-sm md:text-base text-gray-400">{content.home.features.warranty.desc}</p>
              </div>
            </ParallaxElement>
            
            <ParallaxElement offset={15}>
              <div className="text-center p-6 border border-gray-700 rounded-xl hover:border-accent transition-colors bg-gray-800/50 backdrop-blur-sm h-full">
                <PenTool className="w-10 h-10 md:w-12 md:h-12 text-accent mx-auto mb-4" />
                <h3 className="text-lg md:text-xl font-bold mb-2">{content.home.features.design.title}</h3>
                <p className="text-sm md:text-base text-gray-400">{content.home.features.design.desc}</p>
              </div>
            </ParallaxElement>

            <ParallaxElement offset={-15}>
              <div className="text-center p-6 border border-gray-700 rounded-xl hover:border-accent transition-colors bg-gray-800/50 backdrop-blur-sm h-full">
                <CheckCircle2 className="w-10 h-10 md:w-12 md:h-12 text-accent mx-auto mb-4" />
                <h3 className="text-lg md:text-xl font-bold mb-2">{content.home.features.safety.title}</h3>
                <p className="text-sm md:text-base text-gray-400">{content.home.features.safety.desc}</p>
              </div>
            </ParallaxElement>

            <ParallaxElement offset={15}>
              <div className="text-center p-6 border border-gray-700 rounded-xl hover:border-accent transition-colors bg-gray-800/50 backdrop-blur-sm h-full">
                <Clock className="w-10 h-10 md:w-12 md:h-12 text-accent mx-auto mb-4" />
                <h3 className="text-lg md:text-xl font-bold mb-2">{content.home.features.schedule.title}</h3>
                <p className="text-sm md:text-base text-gray-400">{content.home.features.schedule.desc}</p>
              </div>
            </ParallaxElement>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ParallaxSection 
        image="https://picsum.photos/1920/800?grayscale&blur=2" 
        className="py-20 md:py-32"
        overlayOpacity={0.7}
      >
        <div className="text-center relative z-10 px-4">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">{content.home.ctaTitle}</h2>
            <p className="text-lg md:text-xl text-gray-200 mb-8 md:mb-10 max-w-2xl mx-auto">
              {content.home.ctaDesc}
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-accent hover:bg-accent-hover text-white px-8 md:px-12 py-4 md:py-5 rounded-lg font-bold text-lg shadow-lg transition-transform hover:scale-105 w-full sm:w-auto"
            >
              {content.home.ctaButton}
            </Link>
          </Reveal>
        </div>
      </ParallaxSection>
    </div>
  );
};