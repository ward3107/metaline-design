import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface HorizontalScrollSectionProps {
  children: React.ReactNode;
  className?: string;
  scrollRange?: [string, string]; // e.g. ["1%", "-50%"]
  height?: string; // CSS height for the scroll track, e.g. "300vh"
}

export const HorizontalScrollSection: React.FC<HorizontalScrollSectionProps> = ({ 
  children, 
  className = "",
  scrollRange = ["1%", "-60%"],
  height = "300vh"
}) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], scrollRange);

  return (
    <section ref={targetRef} className={`relative ${className}`} style={{ height }}>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex items-center gap-8 px-8 sm:px-24">
          {children}
        </motion.div>
      </div>
    </section>
  );
};