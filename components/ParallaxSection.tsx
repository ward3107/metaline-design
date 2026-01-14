import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxSectionProps {
  image: string;
  children: React.ReactNode;
  className?: string;
  overlayOpacity?: number;
  height?: string;
}

export const ParallaxSection: React.FC<ParallaxSectionProps> = ({ 
  image, 
  children, 
  className = "", 
  overlayOpacity = 0.6,
  height = "auto"
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Parallax effect for the background image
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1.2]); // Subtle zoom

  return (
    <section 
      ref={ref} 
      className={`relative overflow-hidden flex items-center justify-center ${className}`}
      style={{ height }}
    >
        <motion.div 
          style={{ y, scale }} 
          className="absolute inset-0 z-0"
        >
            <img 
              src={image} 
              alt="Section Background" 
              className="w-full h-full object-cover" 
            />
            <div 
              className="absolute inset-0 bg-black" 
              style={{ opacity: overlayOpacity }} 
            />
        </motion.div>
        <div className="relative z-10 container mx-auto px-4 w-full">
            {children}
        </div>
    </section>
  );
};