import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { WhatsappLogo, LinkedinLogo } from '@phosphor-icons/react';

const tabs = [
  { name: 'Serviços', path: '/servicos' },
  { name: 'Parceiros', path: '/parceiros' },
  { name: 'Produtos', path: '/produtos' },
  { name: 'Indústrias', path: '/industrias' },
  { name: 'Imprensa', path: '/imprensa' },
  { name: 'Depoimentos', path: '/depoimentos' },
  { name: 'Casos de Uso', path: '/casos-de-uso' },
  { name: 'Sobre', path: '/sobre' },
  { name: 'Blog', path: '/blog' },
  { name: 'CEO', path: '/ceo' }
];

export function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-white/5 pt-24 pb-12">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
        
        {/* Bio Column */}
        <div className="md:col-span-4 lg:col-span-5">
          <Link to="/" className="text-3xl font-bold tracking-tighter text-brand-cyan mb-6 block hover:text-white transition-colors">
            GO.ALLTECH
          </Link>
          <h3 className="text-lg font-bold text-white mb-4 leading-tight">
            Especialistas em IA, Cloud e Engenharia de Software
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-md">
            Soluções corporativas escaláveis e seguras que transformam desafios tecnológicos em valor estratégico. 
            Atuamos no Brasil e no mercado internacional com foco em inovação sustentável e excelência técnica.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2.5 bg-white/5 border border-white/10 rounded-full text-white hover:text-brand-cyan transition-all hover:scale-105">
              <LinkedinLogo size={20} weight="fill" />
            </a>
            <a href="#" className="p-2.5 bg-white/5 border border-white/10 rounded-full text-white hover:text-brand-cyan transition-all hover:scale-105">
              <WhatsappLogo size={20} weight="fill" />
            </a>
          </div>
        </div>

        {/* Links Columns */}
        <div className="md:col-span-4 lg:col-span-4 grid grid-cols-2 gap-8 text-sm">
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-bold mb-1 uppercase tracking-widest text-[10px]">Empresa</h4>
            {tabs.slice(0, 5).map(t => (
              <Link key={t.name} to={t.path} className="text-gray-400 hover:text-brand-cyan transition-colors">{t.name}</Link>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-bold mb-1 uppercase tracking-widest text-[10px]">Links</h4>
            {tabs.slice(5).map(t => (
              <Link key={t.name} to={t.path} className="text-gray-400 hover:text-brand-cyan transition-colors">{t.name}</Link>
            ))}
          </div>
        </div>

        {/* Contact Column */}
        <div className="md:col-span-4 lg:col-span-3">
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-[10px]">Contato Corporativo</h4>
          <div className="space-y-4">
            <div>
              <p className="text-gray-500 text-[10px] uppercase font-bold mb-1">E-mail</p>
              <p className="text-gray-300 text-sm">chafic.matuck@goalltech.com.br</p>
            </div>
            <div>
              <p className="text-gray-500 text-[10px] uppercase font-bold mb-1">Telefones</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                +55 11 97441-2954<br/>
                +55 11 4492-8955
              </p>
            </div>
            <Link
              to="/contato"
              className="inline-flex mt-4 px-6 py-2.5 bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan rounded-lg text-xs font-bold hover:bg-brand-cyan hover:text-brand-dark transition-all active:scale-[0.98]"
            >
              Falar com Especialista
            </Link>
          </div>
        </div>
      </div>



      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <div className="flex flex-col gap-1">
          <p>© {new Date().getFullYear()} GO.ALLTECH. Technologies & AI Solution Providers.</p>
          <p>CHAFIC MATUCK - ME - CNPJ: 32.638.613/0001-45</p>
        </div>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-gray-300 transition-colors">Termos de Serviço</a>
          <a href="#" className="hover:text-gray-300 transition-colors">Política de Privacidade</a>
        </div>
      </div>
    </footer>
  );
}
