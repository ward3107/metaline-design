import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

export type Theme = 'light' | 'dark';
type ThemeMode = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme; // Current applied theme (for backward compatibility)
  themeMode: ThemeMode; // User's preference (light/dark/system)
  resolvedTheme: Theme; // The actual theme being applied (light or dark)
  toggleTheme: () => void; // Simple toggle (for backward compatibility)
  setThemeMode: (mode: ThemeMode) => void; // Set specific mode
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

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Local storage key
const THEME_MODE_KEY = 'theme_mode';

// Get the system theme preference
const getSystemTheme = (): Theme => {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

// Get the initial theme mode from localStorage
const getInitialThemeMode = (): ThemeMode => {
  if (typeof window === 'undefined') return 'system';

  try {
    const saved = localStorage.getItem(THEME_MODE_KEY);
    if (saved === 'light' || saved === 'dark' || saved === 'system') {
      return saved as ThemeMode;
    }
  } catch (e) {
    console.warn('Failed to read theme mode from localStorage:', e);
  }

  return 'system';
};

// Resolve the theme based on mode
const resolveTheme = (mode: ThemeMode): Theme => {
  if (mode === 'system') {
    return getSystemTheme();
  }
  return mode;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [themeMode, setThemeModeState] = useState<ThemeMode>(getInitialThemeMode);
  const [resolvedTheme, setResolvedTheme] = useState<Theme>(() => resolveTheme(getInitialThemeMode()));

  // Backward compatibility: 'theme' is the resolved theme
  const theme = resolvedTheme;

  const [isGrayscale, setIsGrayscale] = useState(false);
  const [fontSizeBoost, setFontSizeBoost] = useState(false);
  const [readableFont, setReadableFont] = useState(false);
  const [underlineLinks, setUnderlineLinks] = useState(false);

  // Apply theme to DOM
  useEffect(() => {
    const root = window.document.documentElement;

    // Apply resolved theme
    if (resolvedTheme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    // Save mode to localStorage
    try {
      localStorage.setItem(THEME_MODE_KEY, themeMode);
    } catch (e) {
      console.warn('Failed to save theme mode to localStorage:', e);
    }
  }, [resolvedTheme, themeMode]);

  // Listen for system theme changes when in system mode
  useEffect(() => {
    if (themeMode !== 'system') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e: MediaQueryListEvent) => {
      setResolvedTheme(e.matches ? 'dark' : 'light');
    };

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
    // Legacy browsers
    else if (mediaQuery.addListener) {
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, [themeMode]);

  // Update resolved theme when mode changes
  useEffect(() => {
    setResolvedTheme(resolveTheme(themeMode));
  }, [themeMode]);

  // Apply accessibility settings
  useEffect(() => {
    const body = window.document.body;

    // Grayscale
    if (isGrayscale) {
      window.document.documentElement.style.filter = 'grayscale(100%)';
    } else {
      window.document.documentElement.style.filter = 'none';
    }

    // Font Size
    if (fontSizeBoost) {
      window.document.documentElement.style.fontSize = '18px';
    } else {
      window.document.documentElement.style.fontSize = '';
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
  }, [isGrayscale, fontSizeBoost, readableFont, underlineLinks]);

  // Set theme mode
  const setThemeMode = useCallback((mode: ThemeMode) => {
    setThemeModeState(mode);
  }, []);

  // Simple toggle for backward compatibility
  const toggleTheme = useCallback(() => {
    setThemeModeState(prev => {
      // If currently system, toggle based on resolved theme
      if (prev === 'system') {
        return resolvedTheme === 'light' ? 'dark' : 'light';
      }
      // Otherwise just toggle
      return prev === 'light' ? 'dark' : 'light';
    });
  }, [resolvedTheme]);

  const toggleGrayscale = () => setIsGrayscale(prev => !prev);
  const toggleFontSize = () => setFontSizeBoost(prev => !prev);
  const toggleReadableFont = () => setReadableFont(prev => !prev);
  const toggleUnderlineLinks = () => setUnderlineLinks(prev => !prev);

  const resetAccessibility = () => {
    setIsGrayscale(false);
    setFontSizeBoost(false);
    setReadableFont(false);
    setUnderlineLinks(false);
    // Note: We don't reset theme mode as it's a user preference
  };

  return (
    <ThemeContext.Provider value={{
      theme,
      themeMode,
      resolvedTheme,
      toggleTheme,
      setThemeMode,
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

// Export the hook from here (primary export)
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Legacy export for backward compatibility (if needed elsewhere)
export const useThemeLegacy = useTheme;
