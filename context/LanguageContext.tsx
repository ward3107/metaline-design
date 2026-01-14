import React, { createContext, useContext, useEffect, useState } from 'react';
import { CONTENT } from '../translations';

type Language = 'he' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  content: typeof CONTENT['he'];
  direction: 'rtl' | 'ltr';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved === 'en' || saved === 'he') ? saved : 'he';
  });

  useEffect(() => {
    // Update HTML attributes for global direction handling
    document.documentElement.lang = language;
    document.documentElement.dir = CONTENT[language].direction;
    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'he' ? 'en' : 'he');
  };

  return (
    <LanguageContext.Provider value={{ 
      language, 
      toggleLanguage, 
      content: CONTENT[language],
      direction: CONTENT[language].direction as 'rtl' | 'ltr'
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};