import React from 'react';
import { PageLayout } from '../components/PageLayout';

export function AboutPage() {
  return (
    <PageLayout 
      title="Sobre a GO.ALLTECH" 
      subtitle="Nossa missão é prover o arcabouço tecnológico necessário para que o futuro aconteça hoje."
      image="https://picsum.photos/seed/aboutcorp/1200/800"
    >
      <div className="max-w-3xl space-y-8 text-gray-400 text-lg leading-relaxed">
        <p>Fundada por veteranos da indústria, a GO.ALLTECH nasceu com o propósito de unir engenharia de software rigorosa com as possibilidades infinitas da Inteligência Artificial.</p>
        <p>Acreditamos que a tecnologia deve ser um facilitador invisível e poderoso, removendo fricções e potencializando a criatividade humana através da automação inteligente e dados estruturados.</p>
      </div>
    </PageLayout>
  );
}
