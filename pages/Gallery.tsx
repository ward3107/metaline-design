import React, { useState, useEffect, useCallback } from 'react';
import { Reveal } from '../components/Reveal';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

export const Gallery: React.FC = () => {
  const { content } = useLanguage();
  const [selectedItem, setSelectedItem] = useState<typeof content.galleryList[0] | null>(null);
  const [filter, setFilter] = useState('all');

  const filteredItems = content.galleryList.filter(item => 
    filter === 'all' || item.category === filter
  );

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedItem]);

  const handleNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex(item => item.id === selectedItem.id);
    if (currentIndex === -1) return;
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedItem(filteredItems[nextIndex]);
  }, [selectedItem, filteredItems]);

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex(item => item.id === selectedItem.id);
    if (currentIndex === -1) return;
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedItem(filteredItems[prevIndex]);
  }, [selectedItem, filteredItems]);

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedItem) return;
      if (e.key === 'Escape') setSelectedItem(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItem, handleNext, handlePrev]);

  // Get "All" label from products config or fallback
  const allLabel = content.products.categories.find(c => c.id === 'all')?.label || 'All';
  
  const categories = [
    { id: 'all', label: allLabel },
    ...Object.entries(content.gallery.types).map(([id, label]) => ({ id, label }))
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 pb-20">
      <div className="bg-primary dark:bg-black text-white py-20 mb-12">
        <div className="container mx-auto px-4 text-center">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{content.gallery.title}</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {content.gallery.subtitle}
            </p>
          </Reveal>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === cat.id
                  ? 'bg-accent text-white shadow-lg scale-105'
                  : 'bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 hover:text-accent'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div 
                layout
                key={item.id}
                className="relative group rounded-xl overflow-hidden cursor-pointer shadow-lg aspect-[4/3]"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedItem(item)}
                layoutId={`gallery-item-${item.id}`}
              >
                <motion.img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Overlay */}
                <div 
                  className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <motion.div
                    className="mb-4 text-white/80"
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                  >
                    <ZoomIn size={32} />
                  </motion.div>
                  <h3 className="text-white text-2xl font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {item.title}
                  </h3>
                  <span className="text-accent font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {content.gallery.types[item.category as keyof typeof content.gallery.types]}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white hover:bg-white/10 p-2 rounded-full transition-all z-50"
              onClick={() => setSelectedItem(null)}
              aria-label="Close"
            >
              <X size={32} />
            </button>

            {/* Navigation Buttons */}
            {filteredItems.length > 1 && (
              <>
                <button
                  className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-black/20 hover:bg-white/10 p-3 rounded-full transition-all z-50 backdrop-blur-sm hidden md:block"
                  onClick={handlePrev}
                  aria-label="Previous"
                >
                  <ChevronLeft size={40} />
                </button>
                <button
                  className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-black/20 hover:bg-white/10 p-3 rounded-full transition-all z-50 backdrop-blur-sm hidden md:block"
                  onClick={handleNext}
                  aria-label="Next"
                >
                  <ChevronRight size={40} />
                </button>
              </>
            )}

            <motion.div
              layoutId={`gallery-item-${selectedItem.id}`}
              className="relative w-full max-w-6xl max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative rounded-lg overflow-hidden shadow-2xl bg-black">
                <motion.img 
                  key={selectedItem.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  src={selectedItem.image} 
                  alt={selectedItem.title} 
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
              </div>
              
              <motion.div 
                key={`text-${selectedItem.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-center"
              >
                <h2 className="text-3xl font-bold text-white mb-2">{selectedItem.title}</h2>
                <span className="inline-block px-4 py-1 rounded-full bg-accent text-white font-medium text-sm tracking-wide">
                   {content.gallery.types[selectedItem.category as keyof typeof content.gallery.types]}
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};