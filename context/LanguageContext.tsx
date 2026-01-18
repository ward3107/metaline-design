import React, { createContext, useContext } from 'react';
import { useLanguage as useLanguageHook } from '../hooks/useLanguage';
import { Language } from '../i18n';

/**
 * Extended language context type supporting all three languages
 */
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  content: any;
  direction: 'rtl' | 'ltr';
  dir: 'rtl' | 'ltr';
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

/**
 * LanguageProvider - Provides language context to the application
 *
 * Uses the new i18n system with support for EN, HE, and AR languages.
 * Maintains backward compatibility with existing code that uses
 * the useLanguage hook.
 */
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const languageState = useLanguageHook();

  return (
    <LanguageContext.Provider value={languageState}>
      {children}
    </LanguageContext.Provider>
  );
};

/**
 * useLanguage hook - Access language context
 *
 * Provides access to the current language and language change functions.
 * Supports all three languages: EN, HE, and AR.
 *
 * @throws Error if used outside of LanguageProvider
 */
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};