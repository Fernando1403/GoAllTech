import React from 'react';
import { PageLayout } from '../components/PageLayout';

export function PartnersPage() {
  return (
    <PageLayout 
      title="Ecossistema de Parceiros" 
      subtitle="Trabalhamos em conjunto com os líderes globais em infraestrutura, cloud e segurança."
      image="https://picsum.photos/seed/partnersbus/1200/800"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {[ "Google Cloud", "AWS", "Fortinet", "Terraform", "HashiCorp", "SentinelOne", "GWS", "GCP" ].map(partner => (
          <div key={partner} className="p-8 bg-brand-panel rounded-2xl border border-white/5 flex items-center justify-center text-xl font-bold text-white/40 hover:text-brand-cyan transition-all">
            {partner}
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
