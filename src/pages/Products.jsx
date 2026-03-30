import React from 'react';
import { PageLayout } from '../components/PageLayout';

export function ProductsPage() {
  return (
    <PageLayout 
      title="Nossos Ativos" 
      subtitle="Plataformas proprietárias desenhadas para orquestração de nuvem e inteligência artificial corporativa."
      image="https://picsum.photos/seed/productsdev/1200/800"
    >
      <div className="space-y-12">
        <div className="flex flex-col md:flex-row gap-8 items-center bg-brand-panel p-8 rounded-[2.5rem] border border-white/5">
           <div className="w-full md:w-1/3 h-48 bg-brand-dark rounded-2xl overflow-hidden capitalize flex items-center justify-center text-brand-cyan text-4xl font-black text-center px-4">AI Orchestrator</div>
           <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-2">Google Cloud AI Hub</h3>
              <p className="text-gray-400">Integração nativa com Gemini e VEO para processos de decisão automatizados e análise preditiva avançada.</p>
           </div>
        </div>
      </div>
    </PageLayout>
  );
}
