import React from 'react';
import { Reveal } from '../components/Reveal';
import { Award, Users, ThumbsUp, Wrench } from 'lucide-react';
import { ParallaxHero } from '../components/ParallaxHero';
import { ParallaxElement } from '../components/ParallaxElement';
import { useLanguage } from '../context/LanguageContext';

export const About: React.FC = () => {
  const { content, language } = useLanguage();
  const borderClass = language === 'he' ? 'border-r-4 pr-4' : 'border-l-4 pl-4';

  const icons = [Award, Users, Wrench, ThumbsUp];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
       {/* Parallax Hero */}
       <ParallaxHero 
         image="https://picsum.photos/1920/600?grayscale" 
         height="60vh"
         overlayOpacity={0.7}
       >
          <div className="text-center text-white">
            <Reveal>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{content.about.title}</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                {content.about.subtitle}
              </p>
            </Reveal>
          </div>
       </ParallaxHero>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="space-y-6 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              <h2 className={`text-3xl font-bold text-gray-900 dark:text-white mb-4 border-accent ${borderClass}`}>
                {content.about.storyTitle}
              </h2>
              <p>{content.about.storyP1}</p>
              <p>{content.about.storyP2}</p>
              <p>{content.about.storyP3}</p>
            </div>
          </Reveal>
          
          <Reveal delay={0.3}>
            <div className="grid grid-cols-2 gap-6">
              {/* Column 1 - Moves Up */}
              <ParallaxElement offset={-40} className="space-y-4">
                 <img src="https://picsum.photos/400/500?random=30" alt="Team working" className="rounded-2xl shadow-xl w-full h-64 object-cover hover:shadow-2xl transition-shadow" />
                 <img src="https://picsum.photos/400/400?random=31" alt="Factory detail" className="rounded-2xl shadow-xl w-full h-48 object-cover hover:shadow-2xl transition-shadow" />
              </ParallaxElement>
              
              {/* Column 2 - Moves Down */}
              <ParallaxElement offset={40} className="space-y-4 pt-12">
                 <img src="https://picsum.photos/400/400?random=32" alt="Welding" className="rounded-2xl shadow-xl w-full h-48 object-cover hover:shadow-2xl transition-shadow" />
                 <img src="https://picsum.photos/400/500?random=33" alt="Installation" className="rounded-2xl shadow-xl w-full h-64 object-cover hover:shadow-2xl transition-shadow" />
              </ParallaxElement>
            </div>
          </Reveal>
        </div>

        {/* Values */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-16">{content.about.valuesTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.about.values.map((val, idx) => {
              const Icon = icons[idx % icons.length];
              return (
                <Reveal key={idx} delay={idx * 0.1}>
                  <div className="bg-gray-50 dark:bg-slate-800 p-8 rounded-xl text-center hover:shadow-lg transition-shadow border border-gray-100 dark:border-slate-700">
                    <div className="w-16 h-16 bg-white dark:bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-accent">
                      <Icon size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 dark:text-white">{val.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{val.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};