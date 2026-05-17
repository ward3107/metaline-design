import React from "react";

type HorizontalScrollSectionProps = {
  children?: React.ReactNode;
  className?: string;
  height?: string;
  scrollRange?: [string, string];
};

export function HorizontalScrollSection({
  children,
  className = "",
}: HorizontalScrollSectionProps) {
  return (
    <section className={`relative py-20 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-10">
          {children}
        </div>
      </div>
    </section>
  );
}
