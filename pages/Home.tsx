import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck, Clock, PenTool } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Reveal } from '../components/Reveal';
import { ParallaxHero } from '../components/ParallaxHero';
import { ParallaxSection } from '../components/ParallaxSection';
import { HorizontalScrollSection } from '../components/HorizontalScrollSection';
import { useLanguage } from '../context/LanguageContext';

export const Home: React.FC = () => {
  const { content, language } = useLanguage();
  const featuresRef = useRef(null);
  const Arrow = language === 'he' ? ArrowLeft : ArrowRight;
  
  const isRTL = language === 'he';
  const scrollRange: [string, string] = isRTL ? ["0%", "100%"] : ["0%", "-100%"];

  const { scrollYProgress } = useScroll({
    target: featuresRef,
    offset: ["start start", "end end"]
  });

  // Balanced spring: fast response but still smooth
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

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
        height="100vh"
        overlayOpacity={0.6}
      >
        <div className="max-w-3xl text-white pt-12 md:pt-20">
          <Reveal direction="right" delay={0.3}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-6 leading-tight">
              {content.home.heroTitle} <span className="text-accent">{content.home.heroHighlight}</span>
            </h1>
          </Reveal>
          <Reveal delay={0.6}>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 mb-8 font-light max-w-2xl">
              {content.tagline}. {content.home.heroDesc}
            </p>
          </Reveal>
          <Reveal delay={0.9}>
            <div className={`flex flex-col sm:flex-row gap-4 ${isRTL ? 'sm:justify-end' : 'sm:justify-start'}`}>
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

      {/* Services Section */}
      <HorizontalScrollSection 
        className="bg-gradient-to-b from-gray-50 to-primary dark:from-slate-900 dark:to-black" 
        scrollRange={scrollRange}
        height="500vh"
      >
        <div className={`min-w-[85vw] md:min-w-[40vw] py-8 flex flex-col justify-center ${isRTL ? 'pl-8' : 'pr-8'}`}>
             <div className="w-12 md:w-20 h-2 bg-accent mb-6"></div>
             <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
               {content.home.servicesTitle}
             </h2>
             <p className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-md">
               {content.home.servicesDesc}
             </p>
        </div>

        {content.servicesList.map((service, index) => (
          <div key={service.id} className="group relative h-[60vh] md:h-[70vh] min-w-[85vw] md:min-w-[45vw] lg:min-w-[30vw] bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-xl flex flex-col border border-gray-100 dark:border-slate-700">
            <div className="h-1/2 overflow-hidden relative">
              <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className={`absolute top-4 ${isRTL ? 'right-4' : 'left-4'} bg-white dark:bg-slate-700 p-3 rounded-2xl text-accent shadow-md`}>
                <service.icon size={24} />
              </div>
            </div>
            <div className="p-6 md:p-8 flex flex-col flex-grow">
               <h3 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900 dark:text-white">{service.title}</h3>
               <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">{service.description}</p>
               <Link to="/products" className="mt-auto inline-flex items-center justify-center py-3 rounded-xl border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white font-bold hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors text-sm">
                 {content.buttons.learnMore}
               </Link>
            </div>
          </div>
        ))}
      </HorizontalScrollSection>

      {/* Optimized Fast Features Section */}
      <section 
        ref={featuresRef} 
        className="relative bg-black" 
        style={{ height: '500vh' }}
      >
        <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
          
          {/* Permanent Title Box - Repositioned further down for better margin */}
          <motion.div
            className="absolute top-28 md:top-32 text-center z-50 w-full px-4"
            style={{
              opacity: useTransform(smoothProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]),
              y: useTransform(smoothProgress, [0, 0.05], [30, 0])
            }}
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 tracking-tight drop-shadow-2xl">
              {content.about.valuesTitle}
            </h2>
            <div className="w-20 md:w-32 h-1.5 bg-accent mx-auto rounded-full shadow-[0_0_20px_rgba(234,179,8,0.5)]" />
          </motion.div>

          {/* Optimized Stage - Adjusted for lower title */}
          <div className="relative w-full max-w-6xl px-4 mt-16 md:mt-12 h-[50vh] md:h-[60vh]" style={{ perspective: '1500px' }}>
            {features.map((feature, idx) => {
              const chunk = 0.85 / features.length;
              const start = 0.05 + (idx * chunk);
              const end = start + chunk;

              // Smooth continuous transition ranges
              const inputRanges = [
                start - 0.08, // Coming up
                start,        // Full Focus
                end,          // Gone
              ];

              const opacity = useTransform(smoothProgress, inputRanges, [0, 1, 0]);
              const rotateX = useTransform(smoothProgress, inputRanges, [30, 0, -30]);
              const y = useTransform(smoothProgress, inputRanges, [100, 0, -100]);
              const scale = useTransform(smoothProgress, inputRanges, [0.95, 1, 0.95]);

              return (
                <motion.div
                  key={idx}
                  style={{ 
                    opacity, 
                    rotateX, 
                    y, 
                    scale,
                    zIndex: features.length - idx,
                    willChange: 'transform, opacity'
                  }}
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                >
                  <div className="w-full max-h-full bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] md:rounded-[5rem] p-12 md:p-24 flex flex-col md:flex-row items-center gap-12 md:gap-20 pointer-events-auto shadow-[0_50px_100px_rgba(0,0,0,0.5)] overflow-hidden">
                    <div className="relative shrink-0 flex items-center justify-center">
                      <div className="absolute inset-0 bg-accent blur-3xl opacity-10" />
                      <feature.icon size={60} className="text-accent relative z-10 md:w-44 md:h-44 drop-shadow-[0_0_30px_rgba(234,179,8,0.3)]" />
                    </div>
                    <div className="text-center md:text-right flex-1">
                      <span className="text-accent/60 font-black text-xl md:text-2xl lg:text-3xl mb-2 block uppercase tracking-[0.2em]">0{idx + 1}</span>
                      <h3 className="text-3xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-none tracking-tighter">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 text-base md:text-2xl lg:text-3xl leading-tight font-light line-clamp-3 md:line-clamp-4">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Fast Progress Indicators */}
          <div className={`absolute ${isRTL ? 'left-8 md:left-16' : 'right-8 md:right-16'} top-1/2 -translate-y-1/2 flex flex-col gap-6 z-50`}>
            {features.map((_, i) => {
               const chunk = 0.85 / features.length;
               const activePoint = 0.05 + (i * chunk);
               const isActive = useTransform(smoothProgress, [activePoint - 0.05, activePoint, activePoint + chunk], [0.2, 1, 0.2]);
               const indicatorScale = useTransform(smoothProgress, [activePoint - 0.05, activePoint, activePoint + chunk], [1, 1.8, 1]);

               return (
                 <motion.div 
                   key={i}
                   style={{ opacity: isActive, scale: indicatorScale }}
                   className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-accent shadow-[0_0_10px_rgba(234,179,8,0.5)]"
                 />
               );
            })}
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <ParallaxSection 
        image="https://picsum.photos/1920/800?grayscale&blur=2" 
        className="py-24 md:py-48"
        overlayOpacity={0.7}
      >
        <div className="text-center relative z-10 px-4">
          <Reveal>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight">{content.home.ctaTitle}</h2>
            <p className="text-xl md:text-3xl lg:text-4xl text-gray-200 mb-12 max-w-4xl mx-auto font-light leading-relaxed">{content.home.ctaDesc}</p>
            <Link 
              to="/contact" 
              className="inline-block bg-accent hover:bg-accent-hover text-white px-8 md:px-16 lg:px-20 py-4 md:py-6 lg:py-8 rounded-3xl font-bold text-xl md:text-2xl shadow-[0_20px_50px_rgba(234,179,8,0.4)] transition-all hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(234,179,8,0.6)] w-full sm:w-auto"
            >
              {content.home.ctaButton}
            </Link>
          </Reveal>
        </div>
      </ParallaxSection>
    </div>
  );
};