import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GithubLogo, LinkedinLogo, TwitterLogo } from '@phosphor-icons/react';

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
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        <div className="md:col-span-1">
          <Link to="/" className="text-3xl font-bold tracking-tighter text-brand-cyan mb-6 block hover:text-white transition-colors">
            GO.ALLTECH
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed max-w-[250px]">
            Especialistas em Soluções IA, infraestrutura corporativa e engenharia de software sob medida.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="#" className="p-2 glass-panel rounded-full text-white hover:text-brand-cyan transition-colors hover:scale-110 active:scale-95">
              <LinkedinLogo size={20} weight="fill" />
            </a>
            <a href="#" className="p-2 glass-panel rounded-full text-white hover:text-brand-cyan transition-colors hover:scale-110 active:scale-95">
              <GithubLogo size={20} weight="fill" />
            </a>
            <a href="#" className="p-2 glass-panel rounded-full text-white hover:text-brand-cyan transition-colors hover:scale-110 active:scale-95">
              <TwitterLogo size={20} weight="fill" />
            </a>
          </div>
        </div>

        <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold">Empresa</h4>
            {tabs.slice(0, 4).map(t => (
              <Link key={t.name} to={t.path} className="text-gray-400 hover:text-brand-cyan transition-colors">{t.name}</Link>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold">Institucional</h4>
            {tabs.slice(4, 7).map(t => (
              <Link key={t.name} to={t.path} className="text-gray-400 hover:text-brand-cyan transition-colors">{t.name}</Link>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold">Insights</h4>
            {tabs.slice(7).map(t => (
              <Link key={t.name} to={t.path} className="text-gray-400 hover:text-brand-cyan transition-colors">{t.name}</Link>
            ))}
          </div>
        </div>

        <div className="md:col-span-1">
          <h4 className="text-white font-semibold mb-6">Contato Corporativo</h4>
          <p className="text-gray-400 text-sm mb-2">suporte@goalltech.com.br</p>
          <p className="text-gray-400 text-sm mb-4">+55 (11) 3333-3333</p>
          <Link 
            to="/contato" 
            className="w-full mt-4 py-3 bg-white/5 border border-white/10 hover:border-brand-cyan/40 text-white rounded-xl transition-all font-medium hover:bg-white/10 active:scale-[0.98] flex items-center justify-center"
          >
            Fale com um Especialista
          </Link>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>© {new Date().getFullYear()} GO.ALLTECH. Technologies & AI Solution Providers.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-gray-300 transition-colors">Termos de Serviço</a>
          <a href="#" className="hover:text-gray-300 transition-colors">Política de Privacidade</a>
        </div>
      </div>
    </footer>
  );
}
