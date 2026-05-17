import React from 'react';

interface ParallaxElementProps {
  children: React.ReactNode;
  offset?: number;
  className?: string;
}

export const ParallaxElement: React.FC<ParallaxElementProps> = ({
  children,
  className = "",
}) => {
  return <div className={className}>{children}</div>;
};
