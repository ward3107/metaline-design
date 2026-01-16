import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type HorizontalScrollSectionProps = {
  children?: React.ReactNode;
  className?: string;
  height?: string;
  scrollRange?: [string, string];
};

export function HorizontalScrollSection({
  children,
  className = "",
  height = "550vh", // Increased default height for a more premium, slower feel
  scrollRange = ["0%", "-78%"],
}: HorizontalScrollSectionProps) {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  /**
   * We map 0% -> 85% of the scroll progress to the full horizontal range.
   * From 85% -> 100%, the value stays at the final scrollRange[1].
   * This creates a "linger" effect where the last card stays still before 
   * the user scrolls past the section entirely.
   */
  const x = useTransform(
    scrollYProgress, 
    [0, 0.85, 1], 
    [scrollRange[0], scrollRange[1], scrollRange[1]]
  );

  return (
    <section
      ref={targetRef}
      className={`relative ${className}`}
      style={{ height }}
    >
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        <motion.div
          style={{ x }}
          className="flex items-center gap-6 md:gap-16 px-6 sm:px-12 md:px-16 lg:px-24 will-change-transform"
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}