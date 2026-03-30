import React from 'react';
import { PageLayout } from '../components/PageLayout';

export function TestimonialsPage() {
  return (
    <PageLayout 
      title="Voz do Cliente" 
      subtitle="O que dizem os líderes de tecnologia que confiam na GO.ALLTECH para sua evolução digital consciente."
      image="https://picsum.photos/seed/testimonials-ceo/1200/800"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { name: "Thiago Rocha", role: "CTO @ Fintech Solutions", quote: "A expertise da GO.ALLTECH em Google Cloud (GCP) e SecOps foi fundamental para nossa escala sem comprometer a segurança." },
          { name: "Mariana Silva", role: "Head of IT @ Retail Corp", quote: "A migração AWS orquestrada via Terraform nos trouxe uma agilidade que não imaginávamos ser possível para nossa operação crítica." }
        ].map((t, idx) => (
          <div key={idx} className="p-10 bg-brand-panel rounded-[2rem] border border-white/5 relative italic text-lg text-gray-300">
             <span className="text-6xl text-brand-cyan/20 absolute top-4 left-4">"</span>
             <p className="relative z-10 mb-6">{t.quote}</p>
             <div className="not-italic">
                <p className="text-white font-bold">{t.name}</p>
                <p className="text-sm text-brand-cyan">{t.role}</p>
             </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
