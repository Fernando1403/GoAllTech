import React from 'react';
import { PageLayout } from '../components/PageLayout';

export function PartnersPage() {
  return (
    <PageLayout 
      title="Nossos Parceiros" 
      subtitle="Trabalhamos em conjunto com os líderes globais de tecnologia para entregar a melhor experiência e robustez."
      image="https://picsum.photos/seed/partnersbus/1200/800"
    >
      <div className="flex flex-wrap gap-12 justify-center opacity-50 contrast-125 grayscale">
        {/* Placeholder Logos */}
        <div className="text-4xl font-bold">MICROSOFT</div>
        <div className="text-4xl font-bold">AWS</div>
        <div className="text-4xl font-bold">GOOGLE</div>
        <div className="text-4xl font-bold">ORACLE</div>
      </div>
    </PageLayout>
  );
}
