import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { List, X } from '@phosphor-icons/react';

const tabs = ['Serviços', 'Parceiros', 'Produtos', 'Indústrias', 'Imprensa', 'Depoimentos', 'Casos de Uso', 'Sobre', 'Blog', 'CEO'];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLink = (tab) => {
    const slug = tab.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-');
    return isHome ? `#${slug}` : `/#${slug}`;
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled || !isHome ? 'py-4 glass-panel' : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link to="/" className="flex-shrink-0 group">
            <span className="text-2xl font-bold tracking-tighter text-brand-cyan group-hover:text-white transition-colors">
              GO.ALLTECH
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-8">
            {tabs.map((tab) => (
              <a
                key={tab}
                href={getLink(tab)}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                onClick={() => {
                   if (isHome) {
                      const id = tab.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-');
                      const element = document.getElementById(id);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                   }
                }}
              >
                {tab}
              </a>
            ))}
            <Link 
              to="/contato"
              className="ml-2 px-6 py-2.5 bg-brand-cyan text-brand-dark font-semibold rounded-full hover:bg-white hover:-translate-y-[1px] transition-all active:scale-[0.98]"
            >
              Contato
            </Link>
          </div>

          {/* Mobile Nav Toggle */}
          <button
            className="lg:hidden text-gray-300 hover:text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <List size={28} weight="bold" />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            className="fixed inset-0 z-[60] glass-panel flex flex-col pt-24 px-6"
          >
            <button
              className="absolute top-6 right-6 text-gray-300 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            <div className="flex flex-col gap-6 text-2xl font-medium tracking-tight overflow-y-auto pb-24">
              <Link to="/" className="text-white hover:text-brand-cyan" onClick={() => setMobileMenuOpen(false)}>Início</Link>
              {tabs.map((tab, idx) => (
                <motion.a
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={tab}
                  href={getLink(tab)}
                  className="text-white hover:text-brand-cyan"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {tab}
                </motion.a>
              ))}
              <Link 
                to="/contato" 
                className="text-brand-cyan font-bold mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contato
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
