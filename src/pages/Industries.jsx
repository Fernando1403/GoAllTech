import React from 'react';
import { PageLayout } from '../components/PageLayout';

export function IndustriesPage() {
  const industries = [
    { name: "Tecnologia da Informação", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" },
    { name: "Indústria e Manufatura", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" },
    { name: "Serviços Financeiros", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" },
    { name: "Educação", image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800" },
    { name: "Logística e Transportes", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800" },
    { name: "Saúde", image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&q=80&w=800" },
    { name: "Comércio e Varejo", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800" },
    { name: "Energia e Infraestrutura", image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800" },
    { name: "Serviços Profissionais", image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800" }

  ];

  return (
    <PageLayout 
      title="Indústrias" 
      subtitle="A GO.ALLTECH atende empresas de diversos setores, adaptando soluções tecnológicas às características e necessidades específicas de cada indústria."
    >
      <div className="space-y-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {industries.map((item, index) => (
            <div 
              key={index} 
              className="relative h-48 sm:h-56 lg:h-64 rounded-2xl sm:rounded-3xl overflow-hidden group border border-white/5 hover:border-brand-cyan/30 transition-all duration-500"
            >
              {/* Background Image */}
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative h-full flex items-end p-8 z-10">
                <h3 className="text-xl font-bold text-white group-hover:text-brand-cyan transition-colors">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="p-8 sm:p-12 bg-white/5 rounded-[2rem] sm:rounded-[3rem] border border-white/5 text-center max-w-4xl mx-auto backdrop-blur-sm">
          <p className="text-gray-400 text-xl leading-relaxed">
            Nossa abordagem é baseada em entendimento profundo do negócio, permitindo entregar soluções eficazes e sustentáveis.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}


