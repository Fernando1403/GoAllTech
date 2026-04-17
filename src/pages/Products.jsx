import React from 'react';
import { PageLayout } from '../components/PageLayout';

export function ProductsPage() {
  const products = [
    {
      title: "Portais Inteligentes Corporativos",
      description: "Plataformas digitais para centralização de informações, automação de processos e integração eficiente entre equipes."
    },
    {
      title: "Soluções de Automação Empresarial",
      description: "Ferramentas que reduzem tarefas manuais e aumentam drasticamente a produtividade através de fluxos inteligentes."
    },
    {
      title: "Dashboards Inteligentes",
      description: "Painéis de visualização em tempo real que transformam grandes volumes de dados em decisões estratégicas claras."
    },
    {
      title: "Plataformas Baseadas em IA",
      description: "Soluções que utilizam modelos inteligentes de última geração para análise, previsão e otimização contínua de processos."
    }
  ];

  return (
    <PageLayout 
      title="Produtos" 
      subtitle="A GO.ALLTECH oferece produtos tecnológicos desenvolvidos para resolver desafios reais de empresas modernas, projetados com foco em automação, eficiência operacional e integração total."
      image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-400">
        {products.map((product, index) => (
          <div key={index} className="p-8 bg-brand-panel rounded-3xl border border-white/5 hover:border-brand-cyan/20 transition-all group">
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-cyan transition-colors">
              {product.title}
            </h3>
            <p className="leading-relaxed">
              {product.description}
            </p>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}

