import React from 'react';
import { PageLayout } from '../components/PageLayout';

export function ServicesPage() {
  return (
    <PageLayout 
      title="Nossos Serviços" 
      subtitle="Oferecemos uma gama completa de soluções tecnológicas para acelerar a transformação digital da sua empresa."
      image="https://picsum.photos/seed/services-it/1200/800"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-400">
        <div className="p-8 bg-brand-panel rounded-3xl border border-white/5">
          <h3 className="text-2xl font-bold text-white mb-4">Consultoria Estratégica</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
        <div className="p-8 bg-brand-panel rounded-3xl border border-white/5">
          <h3 className="text-2xl font-bold text-white mb-4">Desenvolvimento AI</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
        <div className="p-8 bg-brand-panel rounded-3xl border border-white/5">
          <h3 className="text-2xl font-bold text-white mb-4">Cloud Computing</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
      </div>
    </PageLayout>
  );
}
