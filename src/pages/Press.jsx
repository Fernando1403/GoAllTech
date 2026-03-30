import React from 'react';
import { PageLayout } from '../components/PageLayout';

export function PressPage() {
  return (
    <PageLayout 
      title="AllTech na Mídia" 
      subtitle="Acompanhe nossa presença nos principais veículos de tecnologia e negócios do país."
      image="https://picsum.photos/seed/pressnews/1200/800"
    >
      <div className="space-y-8">
        {[
          { media: "EXAME / TECH", title: "GO.ALLTECH expande operação com foco em IA Generativa e Google Cloud.", desc: "A consultoria anuncia nova vertical focada em orquestração de Agentes Gemini para o setor financeiro." },
          { media: "VALOR ECONÔMICO", title: "Integração GCP e AWS: A estratégia de eficiência da GO.ALLTECH.", desc: "Como a automação via Terraform e SecOps está transformando a infraestrutura de grandes varejistas." }
        ].map((item, i) => (
          <div key={i} className="p-8 bg-brand-panel rounded-3xl border border-white/5 flex flex-col md:flex-row gap-8 items-start hover:border-brand-cyan/30 transition-colors">
             <div className="text-sm font-bold text-brand-cyan uppercase tracking-tighter whitespace-nowrap">{item.media}</div>
             <div>
                <h3 className="text-2xl font-bold text-white mb-2 italic small-caps">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
             </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
