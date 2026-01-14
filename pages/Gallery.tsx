import React from 'react';
import { Reveal } from '../components/Reveal';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export const Gallery: React.FC = () => {
  const { content } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 pb-20">
      <div className="bg-primary dark:bg-black text-white py-20 mb-12">
        <div className="container mx-auto px-4 text-center">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{content.gallery.title}</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {content.gallery.subtitle}
            </p>
          </Reveal>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.galleryList.map((item, index) => (
             <Reveal key={item.id} delay={index * 0.1} width="100%">
              <motion.div 
                className="relative group rounded-xl overflow-hidden cursor-pointer shadow-lg aspect-[4/3]"
                initial="initial"
                whileHover="hover"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <motion.div 
                  className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-4"
                  variants={{
                    initial: { opacity: 0 },
                    hover: { opacity: 1 }
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.h3 
                    className="text-white text-2xl font-bold mb-2"
                    variants={{
                      initial: { opacity: 0, y: 20 },
                      hover: { opacity: 1, y: 0 }
                    }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    {item.title}
                  </motion.h3>
                  <motion.span 
                    className="text-accent font-medium"
                    variants={{
                      initial: { opacity: 0, y: 20 },
                      hover: { opacity: 1, y: 0 }
                    }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    {content.gallery.types[item.category as keyof typeof content.gallery.types]}
                  </motion.span>
                </motion.div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};