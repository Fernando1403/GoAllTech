import React from 'react';
import { PageLayout } from '../components/PageLayout';

export function ServicesPage() {
  const services = [
    {
      title: "Inteligência Artificial Aplicada",
      description: "Desenvolvemos soluções baseadas em IA para automação de processos, análise preditiva, atendimento inteligente e geração de insights estratégicos."
    },
    {
      title: "Infraestrutura em Nuvem (Cloud)",
      description: "Planejamento, implementação e gestão de ambientes cloud seguros, escaláveis e otimizados para alta disponibilidade."
    },
    {
      title: "Engenharia de Software Sob Medida",
      description: "Desenvolvimento de aplicações empresariais personalizadas, integradas aos sistemas existentes e alinhadas às necessidades específicas do negócio."
    },
    {
      title: "Modernização Tecnológica",
      description: "Atualização de sistemas legados para arquiteturas modernas, seguras e eficientes."
    },
    {
      title: "Consultoria Estratégica em Tecnologia",
      description: "Apoiamos empresas na definição de estratégias digitais, governança tecnológica e transformação digital."
    }
  ];

  return (
    <PageLayout 
      title="Serviços" 
      subtitle="Na GO.ALLTECH, entregamos soluções tecnológicas completas, projetadas para impulsionar eficiência, inovação e crescimento sustentável. Atuamos com foco em Inteligência Artificial, infraestrutura corporativa e engenharia de software sob medida."
      image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-400">
        {services.map((service, index) => (
          <div key={index} className="p-8 bg-brand-panel rounded-3xl border border-white/5 hover:border-brand-cyan/20 transition-colors group">
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-cyan transition-colors">
              {service.title}
            </h3>
            <p className="leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}

