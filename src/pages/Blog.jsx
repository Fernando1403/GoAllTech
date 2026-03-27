import React from 'react';
import { PageLayout } from '../components/PageLayout';

export function BlogPage() {
  return (
    <PageLayout 
      title="Blog AllTech" 
      subtitle="Pensamentos, tutoriais e visões sobre o mercado de TI e o impacto da IA nas corporações."
      image="https://picsum.photos/seed/blogtechit/1200/800"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map(i => (
          <div key={i} className="group cursor-pointer">
            <div className="h-64 rounded-3xl overflow-hidden mb-6 bg-brand-panel border border-white/5">
              <img src={`https://picsum.photos/seed/post${i}ai/600/400`} className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-500" />
            </div>
            <p className="text-brand-cyan text-sm font-bold mb-2 uppercase tracking-widest">Tech Insights</p>
            <h3 className="text-xl font-bold text-white group-hover:text-brand-cyan transition-colors">Como os LLMs estão mudando o DevOps tradicional.</h3>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
