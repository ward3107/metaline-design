import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isGrayscale: boolean;
  toggleGrayscale: () => void;
  fontSizeBoost: boolean;
  toggleFontSize: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('theme');
    return (saved as Theme) || 'light';
  });
  
  const [isGrayscale, setIsGrayscale] = useState(false);
  const [fontSizeBoost, setFontSizeBoost] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    
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

    // Font Size (Simple implementation via root font-size or class)
    if (fontSizeBoost) {
      root.style.fontSize = '18px'; // Base is usually 16px
    } else {
      root.style.fontSize = '';
    }

  }, [theme, isGrayscale, fontSizeBoost]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const toggleGrayscale = () => setIsGrayscale(prev => !prev);
  const toggleFontSize = () => setFontSizeBoost(prev => !prev);

  return (
    <ThemeContext.Provider value={{ 
      theme, 
      toggleTheme, 
      isGrayscale, 
      toggleGrayscale,
      fontSizeBoost,
      toggleFontSize 
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