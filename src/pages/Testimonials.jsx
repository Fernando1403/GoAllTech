import React from 'react';
import { PageLayout } from '../components/PageLayout';
import { motion } from 'framer-motion';

export function TestimonialsPage() {
  const testimonials = [
    {
      sector: "Setor Industrial",
      role: "Diretor de Tecnologia",
      company: "Empresa do Setor Industrial",
      quote: "A parceria com a GO.ALLTECH representou um avanço significativo na modernização tecnológica de nossa operação industrial. Nossa empresa enfrentava desafios relacionados à integração de sistemas e à necessidade de maior visibilidade operacional. A equipe demonstrou profundo conhecimento técnico e uma abordagem altamente estruturada, conduzindo o projeto com segurança e eficiência. Como resultado, conseguimos integrar nossas plataformas, melhorar o fluxo de informações e aumentar a confiabilidade de nossos processos produtivos. A experiência técnica e o comprometimento da equipe fizeram toda a diferença para o sucesso da iniciativa."
    },
    {
      sector: "Serviços Financeiros",
      role: "Gerente Executivo de Tecnologia",
      company: "Instituição do Setor Financeiro",
      quote: "A GO.ALLTECH foi essencial para fortalecer nossa infraestrutura tecnológica e preparar nossa organização para novos desafios digitais. Precisávamos de uma solução segura, escalável e alinhada às exigências regulatórias do setor financeiro. Desde o início, a equipe demonstrou elevado nível de profissionalismo, clareza na comunicação e compromisso com a entrega de resultados. A implementação realizada trouxe ganhos expressivos em segurança, disponibilidade e desempenho dos nossos sistemas críticos. Além disso, a orientação estratégica recebida contribuiu diretamente para a melhoria da governança tecnológica da empresa."
    },
    {
      sector: "Empresa de Tecnologia",
      role: "Diretor de Engenharia",
      company: "Empresa do Setor de Tecnologia",
      quote: "A GO.ALLTECH contribuiu de forma decisiva para acelerar nossa jornada de inovação e modernização tecnológica. Buscávamos um parceiro capaz de compreender rapidamente nossas necessidades e propor soluções eficientes para automação e integração de sistemas. A equipe demonstrou elevada capacidade técnica, agilidade e visão estratégica ao longo de todo o projeto. Com a implementação das soluções propostas, obtivemos ganhos relevantes em produtividade, redução de retrabalho e melhoria da qualidade operacional. A atuação da GO.ALLTECH reforçou nossa confiança em projetos tecnológicos conduzidos com excelência e responsabilidade."
    }
  ];

  return (
    <PageLayout 
      title="Depoimentos" 
      subtitle="A confiança de nossos clientes é nosso maior patrimônio. Reunimos relatos reais de empresas que confiaram na GO.ALLTECH para transformar seus ambientes tecnológicos e impulsionar resultados."
      image="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=1200"
    >
      <div className="flex flex-col gap-12 max-w-5xl mx-auto">
        {testimonials.map((t, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="p-7 sm:p-10 lg:p-12 bg-brand-panel rounded-[2rem] sm:rounded-[3rem] border border-white/5 relative overflow-hidden group hover:border-brand-cyan/20 transition-all duration-500"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/5 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-cyan/10 transition-colors" />
            <span className="text-6xl sm:text-8xl text-brand-cyan/10 absolute top-6 left-6 sm:top-8 sm:left-8 font-serif">"</span>
            
            <div className="relative z-10">
              <div className="inline-block px-4 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-bold uppercase tracking-widest mb-8">
                {t.sector}
              </div>
              
              <p className="text-base sm:text-xl md:text-2xl text-gray-300 leading-relaxed italic mb-8 sm:mb-10 font-light">
                {t.quote}
              </p>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-8 border-t border-white/5">
                <div>
                  <p className="text-white font-bold text-lg">{t.role}</p>
                  <p className="text-brand-cyan/60 font-medium">{t.company}</p>
                </div>
                <div className="h-px md:h-8 w-12 md:w-px bg-brand-cyan/20 hidden md:block" />
                <div className="text-sm text-gray-500 font-medium tracking-wide">
                  DEPOIMENTO PROFISSIONAL — GO.ALLTECH
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </PageLayout>
  );
}

