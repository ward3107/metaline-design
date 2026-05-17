import React from 'react';

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
  overlayOpacity = 0.5,
}) => {
  return (
    <div className="relative overflow-hidden bg-gray-900" style={{ height, minHeight: '450px' }}>
      <div className="absolute inset-0 z-0">
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
      </div>

      <div className="relative z-10 h-full container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        {children}
      </div>
    </div>
  );
};
