import React from 'react';
import { PageLayout } from '../components/PageLayout';

export function ProductsPage() {
  return (
    <PageLayout 
      title="Produtos & Soluções" 
      subtitle="Conheça nossos softwares e plataformas proprietárias desenvolvidas para resolver gargalos operacionais específicos."
      image="https://picsum.photos/seed/productsdev/1200/800"
    >
      <div className="space-y-12">
        <div className="flex flex-col md:flex-row gap-8 items-center bg-brand-panel p-8 rounded-[2.5rem] border border-white/5">
           <div className="w-full md:w-1/3 h-48 bg-brand-dark rounded-2xl overflow-hidden capitalize flex items-center justify-center text-brand-cyan text-4xl font-black">AllTech AI</div>
           <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-2">Plataforma AllTech AI</h3>
              <p className="text-gray-400">Uma solução completa para orquestração de agentes e fluxos de dados corporativos com segurança máxima.</p>
           </div>
        </div>
      </div>
    </PageLayout>
  );
}
