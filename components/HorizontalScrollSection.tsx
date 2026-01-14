import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type HorizontalScrollSectionProps = {
  children: React.ReactNode;
  className?: string;
  height?: string;
  scrollRange?: [string, string];
};

export function HorizontalScrollSection({
  children,
  className = "",
  height = "300vh",
  scrollRange = ["-200%", "-85%"],
}: HorizontalScrollSectionProps) {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], scrollRange);

  return (
    <section
      ref={targetRef}
      className={`relative ${className}`}
      style={{ height }}
    >
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        {/* Added standard responsive padding (px-4 to px-20) to maintain space between boxes and screen */}
        <motion.div
          style={{ x }}
          className="flex gap-6 md:gap-12 px-4 sm:px-10 md:px-16 lg:px-24 will-change-transform"
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}