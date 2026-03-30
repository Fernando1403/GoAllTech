import React from 'react';
import { PageLayout } from '../components/PageLayout';

export function AboutPage() {
  return (
    <PageLayout 
      title="Inovação com Google Cloud" 
      subtitle="Somos integradores focados em performance, unindo o portfolio tecnológico Google com expertise AWS e Cyber Security."
      image="https://picsum.photos/seed/aboutcorp/1200/800"
    >
      <div className="max-w-3xl space-y-8 text-gray-400 text-lg leading-relaxed">
        <p>A GO.ALLTECH é uma parceira estratégica para empresas que buscam elevar sua maturidade digital. Especialistas em GCP e GWS, entregamos soluções que conectam Gemini, VEO e NanoBanana ao coração do seu negócio.</p>
        <p>Acreditamos que a tecnologia moderna deve ser robusta, segura e orientada a dados. Por isso, fundamentamos nossas entregas em pilares de SecOps, DevOps e infraestruturas resilientes via Fortinet e Pentest.</p>
      </div>
    </PageLayout>
  );
}
