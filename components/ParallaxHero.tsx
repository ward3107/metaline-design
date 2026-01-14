import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxHeroProps {
  image: string;
  title?: React.ReactNode;
  subtitle?: string;
  children?: React.ReactNode;
  height?: string;
  overlayOpacity?: number;
}

export const ParallaxHero: React.FC<ParallaxHeroProps> = ({ 
  image, 
  children, 
  height = "100vh", 
  overlayOpacity = 0.5 
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div ref={ref} className="relative overflow-hidden bg-gray-900" style={{ height, minHeight: '450px' }}>
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <img 
          src={image} 
          alt="Background" 
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div 
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      </motion.div>

      <motion.div 
        style={{ opacity }}
        className="relative z-10 h-full container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center"
      >
        {children}
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 z-20 hidden sm:block"
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-1.5 bg-white/50 rounded-full" />
        </div>
      </motion.div>
    </div>
  );
};