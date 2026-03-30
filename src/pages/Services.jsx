import React from 'react';
import { PageLayout } from '../components/PageLayout';

export function ServicesPage() {
  return (
    <PageLayout 
      title="Nossas Torres de Negócio" 
      subtitle="Soluções integradas em Nuvem, Cyber Security e Desenvolvimento Especialista para impulsionar seu ROI."
      image="https://picsum.photos/seed/services-it/1200/800"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-400">
        <div className="p-8 bg-brand-panel rounded-3xl border border-white/5">
          <h3 className="text-2xl font-bold text-white mb-4">Cloud & Infrastructure</h3>
          <p>Expertise certificada em Google Cloud (GCP) e AWS. Migração, otimização de custos e arquitetura serveless escalável.</p>
        </div>
        <div className="p-8 bg-brand-panel rounded-3xl border border-white/5">
          <h3 className="text-2xl font-bold text-white mb-4">SecOps & Cibersegurança</h3>
          <p>Implementação de soluções Fortinet e serviços contínuos de Pentest para garantir a segurança em todas as camadas da operação.</p>
        </div>
        <div className="p-8 bg-brand-panel rounded-3xl border border-white/5">
          <h3 className="text-2xl font-bold text-white mb-4">Especialistas em Dev</h3>
          <p>Desenvolvimento ágil de aplicações críticas e corporativas, utilizando stacks modernas focadas em performance e segurança.</p>
        </div>
      </div>
    </PageLayout>
  );
}
