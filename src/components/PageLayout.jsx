import React from 'react';
import { motion } from 'framer-motion';

export function PageLayout({ title, subtitle, image, children }) {
  return (
    <div className="pt-24 sm:pt-32 pb-16 sm:pb-24 min-h-screen bg-brand-dark overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`grid grid-cols-1 ${image ? 'lg:grid-cols-2' : ''} gap-8 sm:gap-16 items-center mb-12 sm:mb-20`}
        >
          <div className={image ? '' : 'max-w-4xl mx-auto text-center'}>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-white mb-4 sm:mb-6">
              {title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed">
              {subtitle}
            </p>
          </div>
          {image && (
            <div className="relative h-[240px] sm:h-[340px] lg:h-[400px] rounded-[2rem] overflow-hidden glass-panel">
              <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
            </div>
          )}
        </motion.div>

        
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.3 }}
        >
          {children}
        </motion.div>
      </div>

      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-cyan/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-cyan/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />
    </div>
  );
}
