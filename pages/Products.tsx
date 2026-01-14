import React, { useState } from 'react';
import { Reveal } from '../components/Reveal';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const { content } = useLanguage();

  const filteredProducts = activeCategory === 'all' 
    ? content.productsList 
    : content.productsList.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 pb-20">
      {/* Header */}
      <div className="bg-primary dark:bg-black text-white py-20 mb-12">
        <div className="container mx-auto px-4 text-center">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{content.products.title}</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {content.products.subtitle}
            </p>
          </Reveal>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {content.products.categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-accent text-white shadow-lg scale-105'
                  : 'bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 hover:text-accent'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-medium">{content.buttons.viewDetails}</span>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                    {content.products.categories.find(c => c.id === product.category)?.label}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-2 mb-2">{product.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">{product.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500 dark:text-gray-400">{content.products.noResults}</p>
          </div>
        )}
      </div>
    </div>
  );
};