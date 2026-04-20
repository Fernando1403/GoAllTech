import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from '@phosphor-icons/react';
import ceoPhoto from '../assets/images/FotoCEO.png';

export function Values() {
  return (
    <section id="sobre" className="py-16 sm:py-24 relative bg-brand-panel border-y border-white/5">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 md:px-12">

        {/* Valores */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center mb-16 sm:mb-24 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tighter text-white">
              Nossa missão é transformar <span className="text-brand-cyan">tecnologia em valor real.</span>
            </h2>
            <ul className="space-y-6 mt-4">
              {[
                "Metodologias modernas e governança tecnológica com foco em resultados mensuráveis.",
                "Parcerias estratégicas com líderes globais: Google Cloud, AWS, Microsoft e Oracle.",
                "Atendemos organizações no Brasil e no mercado internacional com excelência técnica."
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
            className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-[2rem] overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
              alt="Our Values"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-brand-cyan/20 rounded-[2rem]" />
          </motion.div>
        </div>

        {/* Equipe / CEO */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center lg:flex-row-reverse" id="equipe">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[280px] sm:h-[340px] lg:h-[400px] rounded-[2rem] overflow-hidden order-2 lg:order-1"
          >
            <img
              src={ceoPhoto}
              alt="CEO"
              className="w-full h-full object-cover opacity-70"
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
              Liderança Executiva
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tighter text-white">
              Chafic Matuck — <span className="text-brand-cyan">Fundador & CEO</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Profissional sênior com décadas de experiência em TI, lidera a GO.ALLTECH com foco em inovação responsável, qualidade técnica e geração de valor real para os clientes.
            </p>
            <Link
              to="/ceo"
              className="flex items-center gap-2 text-brand-cyan font-medium border-b border-transparent hover:border-brand-cyan transition-all pb-1 w-fit mt-2"
            >
              Conheça o CEO <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
