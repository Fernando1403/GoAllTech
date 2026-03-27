import React from 'react';
import { PageLayout } from '../components/PageLayout';

export function TestimonialsPage() {
  return (
    <PageLayout 
      title="Depoimentos" 
      subtitle="O que nossos clientes e parceiros líderes de mercado dizem sobre nossas entregas e cultura."
      image="https://picsum.photos/seed/testimonials-ceo/1200/800"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { name: "Carlos Santos", role: "CTO @ FintechX", quote: "A GO.ALLTECH transformou nossa infraestrutura com uma agilidade impressionante." },
          { name: "Amanda Lima", role: "Diretora de Inovação", quote: "A expertise em IA da equipe AllTech é o que nos permitiu escalar nosso produto este ano." }
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
