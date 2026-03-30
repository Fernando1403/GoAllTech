import React from 'react';
import { PageLayout } from '../components/PageLayout';

export function CasesDetailsPage() {
  return (
    <PageLayout 
      title="Casos de Sucesso" 
      subtitle="Explore em profundidade os desafios técnicos que superamos através de Google Cloud, AWS e SecOps."
      image="https://picsum.photos/seed/casesdetailed/1200/800"
    >
      <div className="grid grid-cols-1 gap-12">
        <div className="group overflow-hidden rounded-[2.5rem] bg-brand-panel border border-white/5 h-[500px] relative">
           <img src="https://picsum.photos/seed/case1det/1200/800" className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700" />
           <div className="absolute inset-0 p-12 flex flex-col justify-end bg-gradient-to-t from-brand-dark to-transparent">
              <p className="text-brand-cyan text-sm font-bold mb-2 uppercase tracking-widest">Transformação Cloud</p>
              <h3 className="text-4xl font-bold text-white mb-4">Eficiência com GCP & Terraform</h3>
              <p className="text-gray-400 max-w-xl">Migração completa de infraestrutura legada para um ambiente Google Cloud autogerenciado, resultando em 45% de economia operacional.</p>
           </div>
        </div>
      </div>
    </PageLayout>
  );
}
