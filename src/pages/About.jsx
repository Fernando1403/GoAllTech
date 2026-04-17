import React from 'react';
import { PageLayout } from '../components/PageLayout';

export function AboutPage() {
  return (
    <PageLayout 
      title="Sobre" 
      subtitle="A GO.ALLTECH I.T. Services & Cloud Solutions Providers é uma empresa especializada em soluções tecnológicas corporativas, com foco em Inteligência Artificial, infraestrutura cloud e engenharia de software."
      image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200"
    >
      <div className="max-w-4xl space-y-12 text-gray-400 text-lg md:text-xl leading-relaxed">
        <div className="p-6 sm:p-8 md:p-12 bg-brand-panel rounded-[2rem] sm:rounded-[3rem] border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/5 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2" />
          <p className="relative z-10 text-white font-medium mb-8">
            Nossa missão é transformar tecnologia em valor real para empresas, oferecendo soluções confiáveis, escaláveis e alinhadas às demandas do mundo digital.
          </p>
          <p>
            Trabalhamos com metodologias modernas, governança tecnológica e foco em resultados mensuráveis. Acreditamos que a evolução consciente é o caminho para o sucesso sustentável.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 pt-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white tracking-tight">Estratégia e Visão</h3>
            <p>
              Nossa atuação combina experiência prática, visão estratégica e compromisso com a excelência em cada entrega, garantindo que sua empresa esteja sempre à frente.
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white tracking-tight">Compromisso</h3>
            <p>
              Focamos em construir parcerias de longo prazo, baseadas na transparência e no domínio técnico das plataformas líderes de mercado.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

