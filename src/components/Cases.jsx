import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from '@phosphor-icons/react';

const cases = [
  { img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800", title: "Modernização de Infraestrutura Cloud", category: "Infraestrutura", colSpan: "md:col-span-2" },
  { img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800", title: "Automação com IA", category: "Inteligência Artificial", colSpan: "md:col-span-1" },
  { img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800", title: "Integração de Sistemas Corporativos", category: "Integração", colSpan: "md:col-span-3" }
];

export function Cases() {
  return (
    <section id="casos-de-uso" className="py-16 sm:py-24 relative bg-brand-dark">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-8 justify-between items-end mb-16">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tighter font-bold text-white mb-4 sm:mb-6">
              Casos de Uso
            </h2>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl">
              Transformamos desafios em soluções reais. Veja exemplos práticos de como nossas soluções são aplicadas em ambientes empresariais.
            </p>
          </div>
          <Link
            to="/casos-de-uso"
            className="hidden md:flex items-center gap-2 text-brand-cyan font-medium border-b border-transparent hover:border-brand-cyan transition-all pb-1 whitespace-nowrap"
          >
            Ver todos os casos <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((item, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, type: "spring", stiffness: 80 }}
              key={idx}
              className={`group relative overflow-hidden rounded-[2rem] min-h-[280px] sm:min-h-[350px] md:min-h-[400px] cursor-pointer ${item.colSpan}`}
            >
              <div className="absolute inset-0 bg-brand-dark z-0">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent z-10" />
              
              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-brand-cyan text-sm font-semibold tracking-wide uppercase mb-2 block">
                      {item.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight">
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
