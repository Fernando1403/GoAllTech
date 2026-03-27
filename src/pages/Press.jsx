import React from 'react';
import { PageLayout } from '../components/PageLayout';

export function PressPage() {
  return (
    <PageLayout 
      title="Sala de Imprensa" 
      subtitle="As últimas notícias, releases e conquistas da GO.ALLTECH no mercado nacional e internacional."
      image="https://picsum.photos/seed/pressnews/1200/800"
    >
      <div className="space-y-6">
        {[1, 2, 3].map(i => (
          <div key={i} className="py-8 border-b border-white/5 flex justify-between items-center group cursor-pointer">
            <div>
              <p className="text-brand-cyan text-sm mb-1 font-bold">24 de Março, 2026</p>
              <h3 className="text-2xl font-bold text-white group-hover:translate-x-2 transition-transform">GO.ALLTECH anuncia nova parceria estratégica de IA.</h3>
            </div>
            <div className="text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">Leia mais →</div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
