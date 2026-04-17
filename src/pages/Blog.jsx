import React from 'react';
import { PageLayout } from '../components/PageLayout';

export function BlogPage() {
  const topics = [
    { 
      name: "Inteligência Artificial", 
      summary: "Agentes inteligentes e IA Generativa transformando processos críticos e tomadas de decisão.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      name: "Cloud Computing", 
      summary: "Estratégias multi-cloud para escalabilidade, performance e modernização de infraestrutura.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      name: "Engenharia de Software", 
      summary: "Arquiteturas resilientes e práticas de desenvolvimento de alto desempenho para escala global.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      name: "Transformação Digital", 
      summary: "O roadmap completo para empresas que buscam elevar sua maturidade digital e processos.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      name: "Segurança da Informação", 
      summary: "Proteção de ativos críticos, governança de dados e resiliência cibernética empresarial.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      name: "Inovação Empresarial", 
      summary: "Cultura de inovação sustentável que antecipa demandas e gera valor competitivo real.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      name: "Automação Inteligente", 
      summary: "Indo além da RPA: automação de decisões complexas integrada a modelos de IA avançados.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800" 
    }
  ];

  return (
    <PageLayout 
      title="Blog" 
      subtitle="O Blog da GO.ALLTECH é um espaço dedicado ao compartilhamento de conhecimento, tendências e boas práticas em tecnologia."
    >
      <div className="space-y-16">
        <div>
          <h2 className="text-2xl font-bold text-white mb-10">Aqui publicamos conteúdos sobre:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {topics.map((topic, index) => (
              <div key={index} className="group cursor-pointer flex flex-col h-full">
                <div className="h-64 rounded-3xl overflow-hidden mb-6 bg-brand-panel border border-white/5 relative">
                  <img 
                    src={topic.image} 
                    alt={topic.name}
                    className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-60" />
                </div>
                
                <div className="flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-white group-hover:text-brand-cyan transition-colors duration-300 mb-3 leading-tight">
                    {topic.name}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-6 line-clamp-3">
                    {topic.summary}
                  </p>
                  
                  <div className="mt-auto">
                    <span className="inline-flex items-center text-brand-cyan font-bold text-sm uppercase tracking-widest group-hover:text-white transition-colors">
                      Ler Conteúdo
                      <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                    <div className="w-full h-px bg-white/10 mt-4 group-hover:bg-brand-cyan transition-colors" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-12 bg-white/5 rounded-[3rem] border border-white/5 text-center max-w-4xl mx-auto backdrop-blur-sm">
          <p className="text-gray-400 text-xl leading-relaxed">
            Nosso objetivo é ajudar empresas e profissionais a compreender e aplicar tecnologia de forma estratégica.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
