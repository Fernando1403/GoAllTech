import React from 'react';
import { PageLayout } from '../components/PageLayout';

export function PressPage() {
  const categories = [
    "Comunicados oficiais",
    "Lançamentos de produtos",
    "Participações em eventos",
    "Entrevistas",
    "Artigos e publicações",
    "Reconhecimentos e certificações"
  ];

  return (
    <PageLayout 
      title="Imprensa" 
      subtitle="A GO.ALLTECH mantém um relacionamento transparente e colaborativo com veículos de comunicação, parceiros e comunidade tecnológica."
      image="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1200"
    >
      <div className="space-y-16">
        <div>
          <h2 className="text-2xl font-bold text-white mb-8">Nesta seção, compartilhamos:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div 
                key={index} 
                className="p-6 bg-brand-panel rounded-2xl border border-white/5 hover:border-brand-cyan/20 transition-all group"
              >
                <div className="w-8 h-1 bg-brand-cyan/30 rounded-full mb-4 group-hover:w-full transition-all duration-500" />
                <h3 className="text-lg font-bold text-white group-hover:text-brand-cyan transition-colors">
                  {category}
                </h3>
              </div>
            ))}
          </div>
        </div>

        <div className="p-12 bg-brand-panel rounded-[3rem] border border-brand-cyan/20 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-brand-cyan/5 blur-3xl rounded-full translate-x-1/2" />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-2">Contato com a Imprensa</h2>
            <p className="text-gray-400">Entre em contato para solicitações de mídia e entrevistas.</p>
          </div>
          <a 
            href="mailto:contato@goalltech.com.br" 
            className="relative z-10 px-8 py-4 bg-brand-cyan text-brand-dark font-bold rounded-2xl hover:bg-white transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(34,211,238,0.2)]"
          >
            contato@goalltech.com.br
          </a>
        </div>
      </div>
    </PageLayout>
  );
}

