import React from 'react';
import { PageLayout } from '../components/PageLayout';

export function CEOPage() {
  return (
    <PageLayout 
      title="Visão de Liderança" 
      subtitle="Nossa visão para o futuro da tecnologia e nosso compromisso com a excelência técnica em multi-cloud."
      image="https://picsum.photos/seed/ceovision/1200/800"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
         <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
            <p className="text-white font-bold text-2xl italic">"Tecnologia sem propósito é apenas ruído."</p>
            <p>Na GO.ALLTECH, focamos em integrar soluções Google Cloud e AWS com precisão técnica absoluta. Não buscamos apenas implementar o que há de mais novo, mas sim o que há de mais eficaz para a evolução digital de nossos clientes.</p>
            <p>Nossa jornada nos ensinou que a integração inteligente de IA com Gemini e a robustez de arquiteturas SecOps são a base para o crescimento sustentável. É esse o valor que entregamos em cada projeto através de DevOps e automação estratégica.</p>
            <div className="pt-8">
               <p className="text-white font-black text-3xl tracking-tighter uppercase italic">Chafic</p>
               <p className="text-brand-cyan font-medium">Fundador & CEO, GO.ALLTECH</p>
            </div>
         </div>
      </div>
    </PageLayout>
  );
}
