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
        <div className="max-w-3xl text-white pt-20">
          <Reveal>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              {content.home.heroTitle} <span className="text-accent">{content.home.heroHighlight}</span>
            </h1>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light">
              {content.tagline}. {content.home.heroDesc}
            </p>
          </Reveal>
          <Reveal delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/products" 
                className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2"
              >
                {content.buttons.products}
                <Arrow size={20} />
              </Link>
              <Link 
                to="/contact" 
                className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center"
              >
                {content.buttons.contact}
              </Link>
            </div>
          </Reveal>
        </div>
      </ParallaxHero>

      {/* Horizontal Scroll Services Section */}
      <HorizontalScrollSection 
        className="bg-gradient-to-b from-gray-50 to-primary dark:from-slate-900 dark:to-black" 
        scrollRange={["0%", "-75%"]}
        height="200vh"
      >
        {/* Title Card */}
        <div className="min-w-[80vw] md:min-w-[40vw] lg:min-w-[30vw] p-8 flex flex-col justify-center">
             <div className="w-20 h-2 bg-accent mb-8"></div>
             <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
               {content.home.servicesTitle.split(' ').map((word, i) => (
                  <React.Fragment key={i}>
                    {word}<br/>
                  </React.Fragment>
               ))}
             </h2>
             <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-md">
               {content.home.servicesDesc}
             </p>
             <div className="mt-8 flex items-center gap-2 text-accent font-bold animate-pulse">
                <Arrow />
                <span>{content.buttons.scroll}</span>
             </div>
        </div>

        {/* Service Cards */}
        {content.servicesList.map((service, index) => (
          <div 
            key={service.id} 
            className="group relative h-[60vh] min-w-[85vw] md:min-w-[45vw] lg:min-w-[30vw] bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-slate-700 flex flex-col"
          >
            <div className="h-1/2 overflow-hidden relative">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              <div className={`absolute top-6 ${language === 'he' ? 'right-6' : 'left-6'} bg-white dark:bg-slate-700 p-4 rounded-2xl text-accent shadow-lg`}>
                <service.icon size={32} />
              </div>
            </div>
            
            <div className="p-8 flex flex-col flex-grow relative">
               {/* Decorative index number */}
               <span className={`absolute top-6 ${language === 'he' ? 'left-8' : 'right-8'} text-8xl font-black text-gray-100 dark:text-slate-700/50 -z-0`}>
                 0{index + 1}
               </span>
               
               <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white relative z-10">
                 {service.title}
               </h3>
               <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 leading-relaxed relative z-10">
                 {service.description}
               </p>
               
               <div className="mt-auto relative z-10">
                 <Link 
                    to="/products" 
                    className="inline-flex items-center justify-center w-full py-4 rounded-xl border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white font-bold hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                  >
                    {content.buttons.learnMore}
                  </Link>
               </div>
            </div>
          </div>
        ))}
      </HorizontalScrollSection>

      {/* Features / Why Us with Parallax Elements */}
      <section className="py-24 bg-primary dark:bg-black text-white overflow-hidden relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ParallaxElement offset={-20}>
              <div className="text-center p-6 border border-gray-700 rounded-xl hover:border-accent transition-colors bg-gray-800/50 backdrop-blur-sm h-full">
                <ShieldCheck className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{content.home.features.warranty.title}</h3>
                <p className="text-gray-400">{content.home.features.warranty.desc}</p>
              </div>
            </ParallaxElement>
            
            <ParallaxElement offset={20}>
              <div className="text-center p-6 border border-gray-700 rounded-xl hover:border-accent transition-colors bg-gray-800/50 backdrop-blur-sm h-full">
                <PenTool className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{content.home.features.design.title}</h3>
                <p className="text-gray-400">{content.home.features.design.desc}</p>
              </div>
            </ParallaxElement>

            <ParallaxElement offset={-20}>
              <div className="text-center p-6 border border-gray-700 rounded-xl hover:border-accent transition-colors bg-gray-800/50 backdrop-blur-sm h-full">
                <CheckCircle2 className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{content.home.features.safety.title}</h3>
                <p className="text-gray-400">{content.home.features.safety.desc}</p>
              </div>
            </ParallaxElement>

            <ParallaxElement offset={20}>
              <div className="text-center p-6 border border-gray-700 rounded-xl hover:border-accent transition-colors bg-gray-800/50 backdrop-blur-sm h-full">
                <Clock className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{content.home.features.schedule.title}</h3>
                <p className="text-gray-400">{content.home.features.schedule.desc}</p>
              </div>
            </ParallaxElement>
          </div>
        </div>
      </section>

      {/* CTA Section with Parallax Background */}
      <ParallaxSection 
        image="https://picsum.photos/1920/800?grayscale&blur=2" 
        className="py-32"
        overlayOpacity={0.7}
      >
        <div className="text-center relative z-10">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">{content.home.ctaTitle}</h2>
            <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
              {content.home.ctaDesc}
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-accent hover:bg-accent-hover text-white px-12 py-5 rounded-lg font-bold text-lg shadow-lg transition-transform hover:scale-105"
            >
              {content.home.ctaButton}
            </Link>
          </Reveal>
        </div>
      </ParallaxSection>
    </div>
  );
};