import React from 'react';
import { motion } from 'framer-motion';

export function Values() {
  return (
    <section id="sobre" className="py-24 relative bg-brand-panel border-y border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Valores */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white">
              GO.ALLTECH <span className="text-brand-cyan hidden sm:inline">—</span> Robustez e Confiabilidade
            </h2>
            <ul className="space-y-6 mt-4">
              {[
                "Consultoria especializada de alto impacto corporativo.",
                "Parcerias estratégicas (Microsoft Partner, AWS, etc).",
                "Nosso foco é solucionar o problema raiz e acelerar seus resultados."
              ].map((text, i) => (
                <li key={i} className="flex gap-4 items-start text-gray-400 text-lg">
                  <span className="w-2 h-2 mt-2.5 rounded-full bg-brand-cyan shrink-0" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-[2rem] overflow-hidden"
          >
            <img 
              src="https://picsum.photos/seed/teamcollaboration/800/1000" 
              alt="Our Values" 
              className="w-full h-full object-cover mix-blend-luminosity opacity-80"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-brand-cyan/20 rounded-[2rem]" />
          </motion.div>
        </div>

        {/* Equipe / CEO */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center lg:flex-row-reverse" id="equipe">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-[2rem] overflow-hidden order-2 lg:order-1"
          >
            <img 
              src="https://picsum.photos/seed/executive/800/1000" 
              alt="Equipe" 
              className="w-full h-full object-cover mix-blend-luminosity opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-80" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 order-1 lg:order-2"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-white/10 bg-white/5 text-gray-300 text-sm font-medium w-fit">
              Equipe de Excelência
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white">
              Liderança e cultura voltada para <span className="text-brand-cyan">entregas de valor.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              A GO.ALLTECH possui em seu DNA um quadro de diretores e engenheiros seniores com profundo background de mercado. 
              Alinhamos nossa fundação técnica à visão de negócio do nosso cliente.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
