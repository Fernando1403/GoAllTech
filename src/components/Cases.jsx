import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from '@phosphor-icons/react';

const cases = [
  { img: "https://picsum.photos/seed/cybersecurity/800/600", title: "Defesa Autônoma", category: "Cyber Security", colSpan: "md:col-span-2" },
  { img: "https://picsum.photos/seed/fintechai/800/600", title: "Análise Preditiva", category: "Fintech", colSpan: "md:col-span-1" },
  { img: "https://picsum.photos/seed/agrotech/800/600", title: "Smart Agro IoT", category: "Indústria de Base", colSpan: "md:col-span-1" },
  { img: "https://picsum.photos/seed/retaildata/800/600", title: "Retail Hub", category: "Data Analytics", colSpan: "md:col-span-2" }
];

export function Cases() {
  return (
    <section id="casos-de-uso" className="py-24 relative bg-brand-dark">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tighter font-bold text-white mb-6">
            Casos de Uso
          </h2>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl">
            Projetos reais onde aplicamos nossa engenharia e inteligência artificial para destravar o valor corporativo de grandes indústrias.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((item, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, type: "spring", stiffness: 80 }}
              key={idx}
              className={`group relative overflow-hidden rounded-[2rem] min-h-[400px] cursor-pointer ${item.colSpan}`}
            >
              <div className="absolute inset-0 bg-brand-dark z-0">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:scale-105 group-hover:opacity-80 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent z-10" />
              
              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-brand-cyan text-sm font-semibold tracking-wide uppercase mb-2 block">
                      {item.category}
                    </span>
                    <h3 className="text-3xl font-bold text-white tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                  <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500 text-white">
                    <ArrowUpRight size={24} weight="bold" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
