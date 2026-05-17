import React from 'react';

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
  height = "auto",
}) => {
  return (
    <section
      className={`relative overflow-hidden flex items-center justify-center ${className}`}
      style={{ height }}
    >
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt="Section Background"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
        />
      </div>
      <div className="relative z-10 container mx-auto px-4 w-full">
        {children}
      </div>
    </section>
  );
};
