import React from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import { TerminalWindow, CloudArrowUp, ShieldCheck, Database, LightbulbFilament, ArrowRight } from '@phosphor-icons/react';

const services = [
  {
    icon: <LightbulbFilament size={32} weight="duotone" className="text-brand-cyan" />,
    title: "Inteligência Artificial",
    desc: "Soluções baseadas em IA para automação de processos, análise preditiva e atendimento inteligente.",
    colSpan: "md:col-span-2"
  },
  {
    icon: <CloudArrowUp size={32} weight="duotone" className="text-brand-cyan" />,
    title: "Infraestrutura em Nuvem",
    desc: "Ambientes cloud seguros, escaláveis e otimizados para alta disponibilidade (GCP/AWS).",
    colSpan: "md:col-span-1"
  },
  {
    icon: <TerminalWindow size={32} weight="duotone" className="text-brand-cyan" />,
    title: "Engenharia de Software",
    desc: "Aplicações empresariais personalizadas, integradas e alinhadas às necessidades do negócio.",
    colSpan: "md:col-span-1"
  },
  {
    icon: <Database size={32} weight="duotone" className="text-brand-cyan" />,
    title: "Modernização Tecnológica",
    desc: "Atualização de sistemas legados para arquiteturas modernas, seguras e eficientes.",
    colSpan: "md:col-span-1"
  },
  {
    icon: <ShieldCheck size={32} weight="duotone" className="text-brand-cyan" />,
    title: "Consultoria Estratégica",
    desc: "Definição de estratégias digitais, governança tecnológica e transformação digital.",
    colSpan: "md:col-span-1"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1, y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 }
  }
};

export function Services() {
  return (
    <section id="serviços" className="py-24 lg:py-32 relative overflow-hidden bg-brand-dark">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-8 justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tighter font-bold text-white mb-6">
              Soluções tecnológicas completas para sua empresa.
            </h2>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
              Entregamos soluções projetadas para impulsionar eficiência, inovação e crescimento sustentável, com foco em Inteligência Artificial, infraestrutura corporativa e engenharia de software sob medida.
            </p>
          </div>
          <Link
            to="/servicos"
            className="hidden md:flex items-center gap-2 text-brand-cyan font-medium border-b border-transparent hover:border-brand-cyan transition-all pb-1 whitespace-nowrap"
          >
            Ver todos os serviços <ArrowRight size={16} />
          </Link>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {services.map((svc, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={`p-10 rounded-[2rem] bg-brand-panel border border-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] hover:border-brand-cyan/20 transition-colors group flex flex-col justify-between min-h-[300px] ${svc.colSpan}`}
            >
              <div className="p-4 bg-brand-dark rounded-2xl w-fit mb-8 shadow-inner ring-1 ring-white/5 group-hover:-translate-y-2 group-hover:scale-105 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                {svc.icon}
              </div>
              <div className="mt-auto">
                <h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">{svc.title}</h3>
                <p className="text-gray-400 leading-relaxed">{svc.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
