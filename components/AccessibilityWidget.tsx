import React, { useState, useRef, useEffect } from 'react';
import { Settings, Moon, Sun, Type, Eye, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export const AccessibilityWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme, isGrayscale, toggleGrayscale, fontSizeBoost, toggleFontSize } = useTheme();
  
  const widgetRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Handle click outside to close widget
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        widgetRef.current &&
        !widgetRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <motion.button
        ref={buttonRef}
        className="fixed bottom-24 left-6 md:bottom-8 md:left-24 z-50 bg-primary text-white p-4 rounded-full shadow-lg hover:shadow-2xl transition-shadow border-2 border-slate-700 dark:border-slate-500"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Accessibility Menu"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.1 }}
      >
        <Settings size={28} className={isOpen ? 'animate-spin' : ''} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={widgetRef}
            initial={{ opacity: 0, scale: 0.8, y: 20, x: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20, x: -20 }}
            className="fixed bottom-24 left-20 md:bottom-24 md:left-24 z-50 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-2xl border border-gray-100 dark:border-slate-700 w-72 origin-bottom-left"
          >
            <div className="flex justify-between items-center mb-4 pb-2 border-b border-gray-200 dark:border-slate-700">
              <h3 className="font-bold text-gray-900 dark:text-white">נגישות ותצוגה</h3>
              <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-red-500">
                <X size={20} />
              </button>
            </div>

            <div className="space-y-3">
              <button 
                onClick={toggleTheme}
                className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors text-gray-800 dark:text-gray-200"
              >
                <div className="flex items-center gap-3">
                  {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                  <span>{theme === 'light' ? 'מצב כהה' : 'מצב בהיר'}</span>
                </div>
                <div className={`w-10 h-5 rounded-full relative transition-colors ${theme === 'dark' ? 'bg-accent' : 'bg-gray-300'}`}>
                  <div className={`absolute top-1 w-3 h-3 rounded-full bg-white transition-all duration-300 ${theme === 'dark' ? 'left-1' : 'right-1'}`} />
                </div>
              </button>

              <button 
                onClick={toggleFontSize}
                className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors text-gray-800 dark:text-gray-200"
              >
                <div className="flex items-center gap-3">
                  <Type size={20} />
                  <span>הגדל טקסט</span>
                </div>
                <div className={`w-10 h-5 rounded-full relative transition-colors ${fontSizeBoost ? 'bg-accent' : 'bg-gray-300'}`}>
                  <div className={`absolute top-1 w-3 h-3 rounded-full bg-white transition-all duration-300 ${fontSizeBoost ? 'left-1' : 'right-1'}`} />
                </div>
              </button>

              <button 
                onClick={toggleGrayscale}
                className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors text-gray-800 dark:text-gray-200"
              >
                <div className="flex items-center gap-3">
                  <Eye size={20} />
                  <span>גווני אפור</span>
                </div>
                <div className={`w-10 h-5 rounded-full relative transition-colors ${isGrayscale ? 'bg-accent' : 'bg-gray-300'}`}>
                  <div className={`absolute top-1 w-3 h-3 rounded-full bg-white transition-all duration-300 ${isGrayscale ? 'left-1' : 'right-1'}`} />
                </div>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};