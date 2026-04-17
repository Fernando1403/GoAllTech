import React from 'react';
import { PageLayout } from '../components/PageLayout';
import { motion } from 'framer-motion';

export function PartnersPage() {
  const partners = [
    {
      name: "Google Cloud",
      description: "A Google Cloud é uma das principais plataformas globais de computação em nuvem, oferecendo infraestrutura altamente escalável, inteligência artificial avançada e ferramentas modernas para desenvolvimento de aplicações. A parceria permite à GO.ALLTECH desenvolver soluções inovadoras baseadas em dados e automação inteligente."
    },
    {
      name: "Microsoft",
      description: "Referência global em soluções empresariais e cloud computing. A GO.ALLTECH atua com tecnologias Microsoft voltadas à modernização de ambientes empresariais, integração de sistemas e desenvolvimento de soluções corporativas inteligentes e seguras."
    },
    {
      name: "Amazon Web Services",
      description: "Líder mundial em infraestrutura cloud. Por meio dessa parceria, oferecemos soluções robustas para migração, modernização e gestão de ambientes tecnológicos em nuvem, garantindo alta disponibilidade e flexibilidade operacional."
    },
    {
      name: "Fênix Consultoria",
      description: "Especialista em soluções Microsoft e Dynamics 365 Business Central com mais de duas décadas de trajetória. Com presença no Brasil, EUA e Portugal, fortalece nossa entrega de soluções robustas para o mercado corporativo internacional."
    },
    {
      name: "Oracle",
      description: "Uma das maiores empresas globais de software corporativo e banco de dados. A parceria amplia nossas possibilidades técnicas para entrega de aplicações críticas e automação de processos com alto nível de confiabilidade."
    },
    {
      name: "C.E.S.A.R.",
      description: "Um dos principais centros de inovação tecnológica do Brasil, reconhecido por sua atuação em pesquisa aplicada e engenharia de software avançada. Reforça o compromisso da GO.ALLTECH com a inovação contínua."
    },
    {
      name: "Instituto Eldorado",
      description: "Referência brasileira em P&D e inovação tecnológica. A interação com o Instituto Eldorado fortalece nossa capacidade em entregar soluções inovadoras e tecnologicamente robustas com alto padrão técnico."
    }
  ];

  return (
    <PageLayout 
      title="Parceiros" 
      subtitle="A GO.ALLTECH constrói suas soluções com base em alianças estratégicas com empresas líderes globais e instituições reconhecidas em tecnologia, inovação e engenharia de software. Essas parcerias permitem entregar soluções modernas e alinhadas às melhores práticas internacionais."
      image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1200"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-gray-400 mb-16 sm:mb-24">
        {partners.map((partner, index) => (
          <div key={index} className="p-6 sm:p-8 bg-brand-panel rounded-2xl sm:rounded-3xl border border-white/5 hover:border-brand-cyan/20 transition-all group">
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-cyan transition-colors">
              {partner.name}
            </h3>
            <p className="leading-relaxed">
              {partner.description}
            </p>
          </div>
        ))}
      </div>

      {/* NEXXTRA Featured Section */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative p-8 sm:p-12 lg:p-16 rounded-[2rem] sm:rounded-[3rem] overflow-hidden glass-panel border border-white/10 group"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/10 via-brand-dark/50 to-brand-dark" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-cyan/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-sm font-medium mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
              </span>
              Featured Portal
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 tracking-tight">
              MegaPortal <span className="text-brand-cyan">NEXXTRA</span>
            </h2>
            
            <p className="text-xl text-brand-cyan/80 font-medium mb-4">
              Conectando o Futuro com você!
            </p>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl">
              O MegaPortal de Serviços e Soluções NEXXTRA está pronto para suportar qualquer ambiente de T.I. 
              Trabalhe com a máxima eficiência e inteligência tecnológica.
            </p>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <button className="px-8 py-4 bg-brand-cyan text-brand-dark font-bold rounded-2xl hover:bg-white transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                Acessar Portal
              </button>
              
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">Powered by</span>
                <span className="text-brand-cyan font-black tracking-tighter">GO.ALLTECH</span>
              </div>
            </div>
          </div>

          <div className="relative aspect-video lg:aspect-square flex items-center justify-center p-8">
            <div className="w-full h-full rounded-[2.5rem] bg-brand-dark/40 border border-white/5 flex flex-col items-center justify-center p-12 text-center relative group-hover:border-brand-cyan/30 transition-all duration-500 overflow-hidden">
               {/* Visual Placeholder for NEXXTRA logo */}
               <div className="absolute inset-0 bg-gradient-to-tr from-brand-cyan/5 to-transparent opacity-50" />
               <div className="relative z-10 scale-100 sm:scale-125 lg:scale-150">
                  <div className="text-4xl sm:text-7xl font-black text-white tracking-tighter mb-2 italic">
                    NEX<span className="text-brand-cyan">X</span>TRA
                  </div>
                  <div className="h-1 w-full bg-gradient-to-r from-brand-cyan to-transparent rounded-full" />
               </div>
               <p className="absolute bottom-12 text-sm text-gray-500 uppercase tracking-widest font-medium group-hover:text-brand-cyan/60 transition-colors">
                 MegaPortal de Serviços
               </p>
            </div>
          </div>
        </div>
      </motion.div>
    </PageLayout>
  );
}
