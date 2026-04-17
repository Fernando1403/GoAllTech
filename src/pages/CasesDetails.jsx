import React from 'react';
import { PageLayout } from '../components/PageLayout';

export function CasesDetailsPage() {
  const cases = [
    {
      tag: "Infraestrutura",
      title: "Modernização de Infraestrutura Cloud",
      description: "Migração de sistemas legados para ambiente cloud seguro e escalável, reduzindo custos operacionais e aumentando disponibilidade.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200"
    },
    {
      tag: "Inteligência Artificial",
      title: "Automação com Inteligência Artificial",
      description: "Implementação de assistentes inteligentes para atendimento e análise de dados, otimizando o tempo de resposta e a precisão da informação.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200"
    },
    {
      tag: "Integração",
      title: "Integração de Sistemas Corporativos",
      description: "Unificação de plataformas distintas para melhorar produtividade e tomada de decisão através de fluxos de dados contínuos.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
    }
  ];

  return (
    <PageLayout 
      title="Casos de Uso" 
      subtitle="Transformamos desafios em soluções reais. Nesta seção apresentamos exemplos práticos de como nossas soluções são aplicadas em ambientes empresariais."
      image="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200"
    >
      <div className="flex flex-col gap-12">
        {cases.map((item, index) => (
          <div key={index} className="group overflow-hidden rounded-[2rem] sm:rounded-[3rem] bg-brand-panel border border-white/5 h-[300px] sm:h-[400px] md:h-[500px] relative">
            <img 
              src={item.image} 
              alt={item.title}
              className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
            />
            <div className="absolute inset-0 p-6 sm:p-8 md:p-16 flex flex-col justify-end bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent">
              <div className="relative z-10">
                <p className="text-brand-cyan text-sm font-bold mb-4 uppercase tracking-[0.2em]">{item.tag}</p>
                <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 sm:mb-6 group-hover:text-brand-cyan transition-colors duration-500 max-w-2xl leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg xl:text-xl text-gray-400 max-w-2xl leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute top-8 right-8 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-brand-cyan group-hover:border-brand-cyan transition-all duration-500">
               <svg className="w-6 h-6 text-white group-hover:text-brand-dark transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="9 5l7 7-7 7" />
               </svg>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}

