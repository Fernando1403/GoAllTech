import React from 'react';
import { PageLayout } from '../components/PageLayout';

export function IndustriesPage() {
  return (
    <PageLayout 
      title="Segmentos de Atuação" 
      subtitle="Transformação digital em escala para mercados que exigem alta disponibilidade e segurança de dados."
      image="https://picsum.photos/seed/industrytech/1200/800"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-400">
        <div className="p-8 bg-brand-panel rounded-3xl border border-white/5 space-y-4">
          <h3 className="text-2xl font-bold text-white">Setor Financeiro & Fintechs</h3>
          <p>Implementação de arquiteturas Google Cloud ultra-seguras, compliance com normas regulatórias e proteção via SecOps avançado.</p>
        </div>
        <div className="p-8 bg-brand-panel rounded-3xl border border-white/5 space-y-4">
          <h3 className="text-2xl font-bold text-white">Varejo & E-commerce</h3>
          <p>Escalabilidade elástica em AWS para picos de demanda, análise preditiva com Gemini e integração de inventário em tempo real.</p>
        </div>
      </div>
    </PageLayout>
  );
}
