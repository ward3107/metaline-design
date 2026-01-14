import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isGrayscale: boolean;
  toggleGrayscale: () => void;
  fontSizeBoost: boolean;
  toggleFontSize: () => void;
  readableFont: boolean;
  toggleReadableFont: () => void;
  underlineLinks: boolean;
  toggleUnderlineLinks: () => void;
  resetAccessibility: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('theme');
    return (saved as Theme) || 'light';
  });
  
  const [isGrayscale, setIsGrayscale] = useState(false);
  const [fontSizeBoost, setFontSizeBoost] = useState(false);
  const [readableFont, setReadableFont] = useState(false);
  const [underlineLinks, setUnderlineLinks] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    const body = window.document.body;
    
    // Theme
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);

    // Grayscale
    if (isGrayscale) {
      root.style.filter = 'grayscale(100%)';
    } else {
      root.style.filter = 'none';
    }

    // Font Size
    if (fontSizeBoost) {
      root.style.fontSize = '18px'; // Base is usually 16px
    } else {
      root.style.fontSize = '';
    }

    // Readable Font
    if (readableFont) {
      body.classList.add('font-readable');
    } else {
      body.classList.remove('font-readable');
    }

    // Underline Links
    if (underlineLinks) {
      body.classList.add('underline-links');
    } else {
      body.classList.remove('underline-links');
    }

  }, [theme, isGrayscale, fontSizeBoost, readableFont, underlineLinks]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const toggleGrayscale = () => setIsGrayscale(prev => !prev);
  const toggleFontSize = () => setFontSizeBoost(prev => !prev);
  const toggleReadableFont = () => setReadableFont(prev => !prev);
  const toggleUnderlineLinks = () => setUnderlineLinks(prev => !prev);

  const resetAccessibility = () => {
    setIsGrayscale(false);
    setFontSizeBoost(false);
    setReadableFont(false);
    setUnderlineLinks(false);
    // Theme is considered a preference, usually kept, but we can reset if desired. Keeping for now.
  };

  return (
    <ThemeContext.Provider value={{ 
      theme, 
      toggleTheme, 
      isGrayscale, 
      toggleGrayscale,
      fontSizeBoost,
      toggleFontSize,
      readableFont,
      toggleReadableFont,
      underlineLinks,
      toggleUnderlineLinks,
      resetAccessibility
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};