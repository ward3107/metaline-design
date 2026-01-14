import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, ChevronDown, ChevronUp, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const CookieConsent: React.FC = () => {
  const { content, direction } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: true,
    marketing: true
  });

  const CONSENT_KEY = 'anton_cookie_consent';

  useEffect(() => {
    const savedConsent = localStorage.getItem(CONSENT_KEY);
    if (!savedConsent) {
      // Delay showing the banner slightly for better UX on load
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSave = (newPreferences: typeof preferences) => {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(newPreferences));
    setPreferences(newPreferences);
    setIsVisible(false);
  };

  const acceptAll = () => {
    handleSave({ essential: true, analytics: true, marketing: true });
  };

  const rejectAll = () => {
    handleSave({ essential: true, analytics: false, marketing: false });
  };

  const savePreferences = () => {
    handleSave(preferences);
  };

  const togglePreference = (key: keyof typeof preferences) => {
    if (key === 'essential') return;
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Prevent scroll when details are open (optional, but good for focus)
  // Here we keep it non-blocking for better UX

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-7xl mx-auto bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-100 dark:border-slate-700 overflow-hidden">
            
            <div className="p-6 md:p-8">
              <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
                
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-accent/10 p-2 rounded-full text-accent">
                      <Cookie size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {content.cookies.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
                    {content.cookies.text}
                  </p>
                </div>

                {/* Main Actions */}
                <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
                  {!showDetails && (
                    <>
                      <button 
                        onClick={() => setShowDetails(true)}
                        className="px-6 py-3 rounded-lg border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors font-medium flex items-center justify-center gap-2"
                      >
                         {content.cookies.customize}
                         <ChevronDown size={16} />
                      </button>
                      <button 
                        onClick={rejectAll}
                        className="px-6 py-3 rounded-lg border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors font-medium"
                      >
                        {content.cookies.rejectAll}
                      </button>
                      <button 
                        onClick={acceptAll}
                        className="px-6 py-3 rounded-lg bg-accent hover:bg-accent-hover text-white transition-colors font-bold shadow-lg"
                      >
                        {content.cookies.acceptAll}
                      </button>
                    </>
                  )}
                </div>
              </div>

              {/* Detailed Preferences */}
              <AnimatePresence>
                {showDetails && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-8 pt-8 border-t border-gray-100 dark:border-slate-700 grid gap-4">
                      
                      {/* Essential */}
                      <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-slate-800/50">
                        <div className="mt-1">
                          <input 
                            type="checkbox" 
                            checked={preferences.essential} 
                            disabled 
                            className="w-5 h-5 accent-accent cursor-not-allowed opacity-70"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 dark:text-white flex items-center gap-2">
                            {content.cookies.categories.essential.title}
                            <span className="text-xs bg-gray-200 dark:bg-slate-600 px-2 py-0.5 rounded text-gray-600 dark:text-gray-300">Required</span>
                          </h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                            {content.cookies.categories.essential.desc}
                          </p>
                        </div>
                      </div>

                      {/* Analytics */}
                      <label className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer group">
                        <div className="mt-1">
                          <input 
                            type="checkbox" 
                            checked={preferences.analytics}
                            onChange={() => togglePreference('analytics')}
                            className="w-5 h-5 accent-accent cursor-pointer"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-accent transition-colors">
                            {content.cookies.categories.analytics.title}
                          </h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                            {content.cookies.categories.analytics.desc}
                          </p>
                        </div>
                      </label>

                      {/* Marketing */}
                      <label className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer group">
                        <div className="mt-1">
                          <input 
                            type="checkbox" 
                            checked={preferences.marketing}
                            onChange={() => togglePreference('marketing')}
                            className="w-5 h-5 accent-accent cursor-pointer"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-accent transition-colors">
                            {content.cookies.categories.marketing.title}
                          </h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                            {content.cookies.categories.marketing.desc}
                          </p>
                        </div>
                      </label>

                      <div className="flex justify-end gap-3 mt-4 pt-4 border-t border-gray-100 dark:border-slate-700">
                         <button 
                            onClick={() => setShowDetails(false)}
                            className="px-6 py-3 rounded-lg text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
                          >
                            <ChevronUp size={20} />
                          </button>
                         <button 
                            onClick={savePreferences}
                            className="px-8 py-3 rounded-lg bg-accent hover:bg-accent-hover text-white transition-colors font-bold shadow-lg flex items-center gap-2"
                          >
                            <Check size={18} />
                            {content.cookies.save}
                          </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};