import React from 'react';
import { PageLayout } from '../components/PageLayout';

export function CEOPage() {
  return (
    <PageLayout
      title="Mensagem do CEO"
      subtitle="Nossa visão para o futuro da tecnologia e nosso compromisso com a excelência técnica."
      image="https://picsum.photos/seed/ceovision/1200/800"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
          <p className="text-white font-bold text-2xl italic">"Tecnologia sem propósito é apenas ruído."</p>
          <p>Na GO.ALLTECH, focamos em entregar o que realmente move o ponteiro para nossos parceiros. Não buscamos apenas implementar o que há de mais novo, mas sim o que há de mais eficaz.</p>
          <p>Minha jornada na computação me ensinou que a simplicidade bem executada é a forma mais alta de sofisticação tecnológica. É esse o valor que incutimos em cada um de nossos engenheiros.</p>
          <div className="pt-8">
            <p className="text-white font-black text-3xl tracking-tighter uppercase italic">Chafic</p>
            <p className="text-brand-cyan font-medium">Fundador & CEO, GO.ALLTECH</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
