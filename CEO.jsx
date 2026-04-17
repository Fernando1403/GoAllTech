import React from 'react';
import { motion } from 'framer-motion';
import { PageLayout } from '../components/PageLayout';
import ceoPhoto from '../assets/images/FotoCEO.png';

export function CEOPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <PageLayout title="" subtitle="">
      {/* Cinematic Header Section */}
      <section className="relative mb-24 -mt-12 lg:-mt-20">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none overflow-hidden">
          <span className="text-[20vw] font-black tracking-tighter uppercase leading-none">EXECUTIVE</span>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 text-center"
        >
          <h2 className="text-brand-cyan font-bold tracking-[0.3em] uppercase text-sm mb-4">Liderança & Visão</h2>
          <h1 className="text-3xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white">
            CHAFIC <span className="text-brand-cyan">MATUCK</span>
          </h1>
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="h-px w-12 bg-white/20" />
            <p className="text-gray-400 font-medium uppercase tracking-widest text-xs">Fundador & CEO, GO.ALLTECH</p>
            <div className="h-px w-12 bg-white/20" />
          </div>
        </motion.div>
      </section>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-start max-w-7xl mx-auto">
        
        {/* Profile Text Side */}
        <div className="xl:col-span-7 space-y-10 sm:space-y-12 order-2 xl:order-1">
          <motion.div {...fadeInUp} className="p-6 sm:p-10 md:p-14 glass-panel rounded-[2rem] sm:rounded-[3.5rem] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-cyan/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-cyan/10 transition-colors duration-700" />
            <p className="relative z-10 text-white font-medium italic text-xl sm:text-2xl md:text-3xl leading-snug">
              "Chafic Matuck é profissional sênior da área de Tecnologia da Informação, com décadas de experiência em projetos corporativos, engenharia de sistemas e soluções empresariais."
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-brand-cyan/10 flex items-center justify-center border border-brand-cyan/20">
                <svg className="w-6 h-6 text-brand-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed">
                Ao longo de sua trajetória, atuou em ambientes tecnológicos complexos e em projetos estratégicos voltados à modernização tecnológica e transformação digital.
              </p>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-brand-cyan/10 flex items-center justify-center border border-brand-cyan/20">
                <svg className="w-6 h-6 text-brand-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed">
                Especialista em soluções cloud, inteligência artificial e integração de sistemas corporativos, lidera com foco em qualidade técnica e geração de valor real.
              </p>
            </motion.div>
          </div>

          <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="pt-8 border-t border-white/5 space-y-6">
            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
              Sua visão combina experiência prática, disciplina técnica e compromisso com resultados sustentáveis, transformando tecnologia em um motor de eficiência corporativa.
            </p>
            <div className="flex items-center gap-6">
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                <p className="text-brand-cyan font-bold text-3xl">20+</p>
                <p className="text-gray-500 text-[10px] uppercase tracking-tighter">Anos de Expertise</p>
              </div>
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                <p className="text-white font-bold text-3xl">100%</p>
                <p className="text-gray-500 text-[10px] uppercase tracking-tighter">Compromisso Técnico</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Executive Portrait Side */}
        <div className="xl:col-span-5 relative order-1 xl:order-2">
          <div className="sticky top-24">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-brand-cyan/15 blur-[60px] rounded-[5rem] group-hover:bg-brand-cyan/25 transition-all duration-1000 animate-pulse-slow" />
              
              <div className="relative rounded-[4rem] overflow-hidden border border-white/10 shadow-2xl transition-transform duration-1000 group-hover:scale-[1.01]">
                <img 
                  src={ceoPhoto} 
                  alt="Chafic Matuck - CEO Portrait" 
                  className="w-full h-auto object-cover transition-all duration-1000 scale-100 group-hover:scale-105"
                  style={{ filter: 'none' }} // Explicitly disabling any grayscale
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-transparent to-transparent opacity-60" />
                
                {/* Floating Badge */}
                <div className="absolute top-8 right-8 px-6 py-2 bg-brand-cyan/90 text-brand-dark font-black text-xs uppercase tracking-widest rounded-full backdrop-blur-sm">
                  CEO
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </PageLayout>
  );
}
