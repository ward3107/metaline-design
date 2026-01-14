import React, { useState, useRef, useEffect } from 'react';
import { Accessibility, Moon, Sun, Type, Eye, X, ZoomIn, Link, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export const AccessibilityWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { 
    theme, toggleTheme, 
    isGrayscale, toggleGrayscale, 
    fontSizeBoost, toggleFontSize,
    readableFont, toggleReadableFont,
    underlineLinks, toggleUnderlineLinks,
    resetAccessibility
  } = useTheme();
  
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
        className="fixed bottom-24 left-6 md:bottom-8 md:left-24 z-50 bg-white text-black p-4 rounded-full shadow-lg hover:scale-110 transition-transform mix-blend-difference"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Accessibility Menu"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.1 }}
      >
        <Accessibility size={28} className={isOpen ? 'animate-spin' : ''} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={widgetRef}
            initial={{ opacity: 0, scale: 0.8, y: 20, x: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20, x: -20 }}
            className="fixed bottom-24 left-20 md:bottom-24 md:left-24 z-50 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-2xl border border-gray-100 dark:border-slate-700 w-80 origin-bottom-left max-h-[70vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-4 pb-2 border-b border-gray-200 dark:border-slate-700">
              <h3 className="font-bold text-gray-900 dark:text-white">נגישות ותצוגה</h3>
              <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-red-500">
                <X size={20} />
              </button>
            </div>

            <div className="space-y-2">
              <AccessButton 
                onClick={toggleTheme}
                active={theme === 'dark'}
                icon={theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                label={theme === 'light' ? 'מצב כהה' : 'מצב בהיר'}
              />

              <AccessButton 
                onClick={toggleFontSize}
                active={fontSizeBoost}
                icon={<ZoomIn size={20} />}
                label="הגדל טקסט"
              />

              <AccessButton 
                onClick={toggleReadableFont}
                active={readableFont}
                icon={<Type size={20} />}
                label="גופן קריא"
              />

              <AccessButton 
                onClick={toggleGrayscale}
                active={isGrayscale}
                icon={<Eye size={20} />}
                label="גווני אפור"
              />

              <AccessButton 
                onClick={toggleUnderlineLinks}
                active={underlineLinks}
                icon={<Link size={20} />}
                label="הדגשת קישורים"
              />

              <div className="pt-2 mt-2 border-t border-gray-100 dark:border-slate-700">
                <button 
                  onClick={resetAccessibility}
                  className="w-full flex items-center justify-center gap-2 p-3 rounded-lg bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20 dark:hover:text-red-400 transition-colors font-medium"
                >
                  <RotateCcw size={18} />
                  <span>אפס הגדרות</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

interface AccessButtonProps {
  onClick: () => void;
  active: boolean;
  icon: React.ReactNode;
  label: string;
}

const AccessButton: React.FC<AccessButtonProps> = ({ onClick, active, icon, label }) => (
  <button 
    onClick={onClick}
    className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors text-gray-800 dark:text-gray-200"
  >
    <div className="flex items-center gap-3">
      {icon}
      <span>{label}</span>
    </div>
    <div className={`w-10 h-5 rounded-full relative transition-colors ${active ? 'bg-accent' : 'bg-gray-300 dark:bg-slate-600'}`}>
      <div className={`absolute top-1 w-3 h-3 rounded-full bg-white transition-all duration-300 ${active ? 'left-1' : 'right-1'}`} />
    </div>
  </button>
);