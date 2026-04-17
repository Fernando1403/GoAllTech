import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { List, X } from '@phosphor-icons/react';

const tabs = [
  { name: 'Serviços', path: '/servicos' },
  { name: 'Parceiros', path: '/parceiros' },
  { name: 'Produtos', path: '/produtos' },
  { name: 'Indústrias', path: '/industrias' },
  { name: 'Imprensa', path: '/imprensa' },
  { name: 'Depoimentos', path: '/depoimentos' },
  { name: 'Casos de Uso', path: '/casos-de-uso' },
  { name: 'Sobre', path: '/sobre' },
  { name: 'Blog', path: '/blog' },
  { name: 'CEO', path: '/ceo' }
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        className="fixed top-0 inset-x-0 z-50 py-4 bg-brand-dark/95 backdrop-blur-md border-b border-white/5 transition-all duration-300"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link to="/" className="flex-shrink-0 group">
            <span className="text-3xl md:text-4xl font-black tracking-tighter text-brand-cyan group-hover:text-white transition-all duration-300">
              GO.ALLTECH
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6">
            {tabs.map((tab) => (
              <Link
                key={tab.name}
                to={tab.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === tab.path ? 'text-brand-cyan' : 'text-gray-300 hover:text-white'
                }`}
              >
                {tab.name}
              </Link>
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
                <motion.div
                  key={tab.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link
                    to={tab.path}
                    className={`hover:text-brand-cyan ${location.pathname === tab.path ? 'text-brand-cyan' : 'text-white'}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {tab.name}
                  </Link>
                </motion.div>
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
