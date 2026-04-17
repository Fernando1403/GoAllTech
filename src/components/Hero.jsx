import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu } from '@phosphor-icons/react';
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center pt-20 sm:pt-24 overflow-hidden" id="home">
      {/* Background Image/Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-brand-dark/40 sm:to-transparent z-10" />
        <img
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000"
          alt="IT Excellence"
          className="w-full h-full object-cover object-right opacity-80"
        />
      </div>

      <div className="max-w-[1400px] mx-auto w-full px-5 sm:px-6 md:px-12 relative z-10 block">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
            className="flex flex-col items-start gap-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-cyan/30 bg-brand-cyan/5 text-brand-cyan text-sm font-medium">
              <Cpu size={18} weight="duotone" />
              <span>I.T. Services & Cloud Solutions Providers</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[5rem] font-bold tracking-tighter leading-[1.05] text-white">
              Transformando tecnologia em <span className="text-brand-cyan">valor real</span> para sua empresa.
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-[50ch] leading-relaxed">
              Especialistas em Inteligência Artificial, Cloud Computing e Engenharia de Software sob medida. Soluções confiáveis, escaláveis e alinhadas às demandas do mundo digital.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
              <Link
                to="/contato"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-brand-cyan text-brand-dark font-semibold rounded-full hover:bg-white transition-all hover:-translate-y-[2px] active:scale-[0.98]"
              >
                <span>Nos Contate</span>
                <ArrowRight size={20} weight="bold" />
              </Link>

              <Link
                to="/sobre"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-all hover:-translate-y-[2px] active:scale-[0.98]"
              >
                Conheça a GO.ALLTECH
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
