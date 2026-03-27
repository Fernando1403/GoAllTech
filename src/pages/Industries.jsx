import React from 'react';
import { PageLayout } from '../components/PageLayout';

export function IndustriesPage() {
  return (
    <PageLayout 
      title="Indústrias" 
      subtitle="Atuação verticalizada em diversos setores da economia, trazendo know-how específico para cada desafio."
      image="https://picsum.photos/seed/industrytech/1200/800"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {['Finanças', 'Varejo', 'Agronegócio', 'Saúde', 'Logística', 'Energia', 'Manufatura', 'Educação'].map(ind => (
          <div key={ind} className="p-10 glass-panel rounded-3xl text-center font-bold text-xl hover:text-brand-cyan transition-colors">
            {ind}
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
