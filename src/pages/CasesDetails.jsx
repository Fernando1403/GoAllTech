import React from 'react';
import { PageLayout } from '../components/PageLayout';

export function CasesDetailsPage() {
  return (
    <PageLayout 
      title="Casos de Uso" 
      subtitle="Explore em profundidade os desafios técnicos que superamos e os resultados de negócio que geramos."
      image="https://picsum.photos/seed/casesdetailed/1200/800"
    >
      <div className="grid grid-cols-1 gap-12">
        <div className="group overflow-hidden rounded-[2.5rem] bg-brand-panel border border-white/5 h-[500px] relative">
           <img src="https://picsum.photos/seed/case1det/1200/800" className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700" />
           <div className="absolute inset-0 p-12 flex flex-col justify-end bg-gradient-to-t from-brand-dark to-transparent">
              <h3 className="text-4xl font-bold text-white mb-4">Transformação Digital @ Banco Global</h3>
              <p className="text-gray-400 max-w-xl">Migração completa de legado para nuvem distribuída com redução de 40% em latência.</p>
           </div>
        </div>
      </div>
    </PageLayout>
  );
}
