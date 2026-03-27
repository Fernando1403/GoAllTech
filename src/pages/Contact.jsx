import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Envelope, Phone, MapPin, PaperPlaneTilt, CheckCircle } from '@phosphor-icons/react';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, you'd send the form data here.
  };

  return (
    <section className="pt-32 pb-24 min-h-screen relative overflow-hidden bg-brand-dark">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Header & Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="flex flex-col gap-8"
          >
            <div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
                Vamos transformar sua <span className="text-brand-cyan">TI?</span>
              </h1>
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-md">
                Estamos prontos para ouvir seus desafios e sugerir as melhores soluções em IA e infraestrutura.
              </p>
            </div>

            <div className="flex flex-col gap-6 mt-4">
              <div className="flex items-center gap-4 text-gray-400 p-4 rounded-2xl bg-brand-panel border border-white/5 shadow-inner">
                <div className="p-3 bg-brand-dark rounded-xl text-brand-cyan">
                  <Envelope size={24} weight="duotone" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Email</p>
                  <p className="text-white font-medium">contato@goalltech.com.br</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-gray-400 p-4 rounded-2xl bg-brand-panel border border-white/5 shadow-inner">
                <div className="p-3 bg-brand-dark rounded-xl text-brand-cyan">
                  <Phone size={24} weight="duotone" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Telefone</p>
                  <p className="text-white font-medium">+55 (11) 3333-3333</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-gray-400 p-4 rounded-2xl bg-brand-panel border border-white/5 shadow-inner">
                <div className="p-3 bg-brand-dark rounded-xl text-brand-cyan">
                  <MapPin size={24} weight="duotone" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Sede</p>
                  <p className="text-white font-medium">Av. Paulista, 1000 - São Paulo, SP</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
            className="glass-panel p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden"
          >
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-20"
              >
                <div className="p-4 bg-brand-cyan/20 text-brand-cyan rounded-full mb-6">
                  <CheckCircle size={64} weight="fill" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Mensagem Enviada!</h2>
                <p className="text-gray-400 max-w-[250px]">Obrigado por entrar em contato. Retornaremos em breve.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-brand-cyan font-medium underline underline-offset-4"
                >
                  Enviar nova mensagem
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300 ml-1">Seu melhor E-mail</label>
                  <input 
                    type="email" 
                    id="email" 
                    required 
                    className="w-full bg-brand-dark border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-cyan/20 focus:border-brand-cyan/50 transition-all placeholder:text-gray-600"
                    placeholder="email@corporativo.com.br"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-300 ml-1">Telefone / WhatsApp</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    required 
                    className="w-full bg-brand-dark border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-cyan/20 focus:border-brand-cyan/50 transition-all placeholder:text-gray-600"
                    placeholder="+55 (11) 99999-9999"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="reason" className="text-sm font-medium text-gray-300 ml-1">Motivo do Contato</label>
                  <select 
                    id="reason" 
                    required
                    className="w-full bg-brand-dark border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-cyan/20 focus:border-brand-cyan/50 transition-all appearance-none cursor-pointer"
                  >
                    <option value="" disabled selected>Selecione um assunto</option>
                    <option value="software">Engenharia de Software</option>
                    <option value="ai">Desenvolvimento de IA</option>
                    <option value="cloud">Cloud & DevOps</option>
                    <option value="cyber">Cyber Security</option>
                    <option value="other">Outros assuntos</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-300 ml-1">Conte um pouco mais (opcional)</label>
                  <textarea 
                    id="message" 
                    rows="4" 
                    className="w-full bg-brand-dark border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-cyan/20 focus:border-brand-cyan/50 transition-all placeholder:text-gray-600 resize-none"
                    placeholder="Quais são os seus principais objetivos técnicos?"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-brand-cyan text-brand-dark font-bold rounded-xl mt-4 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <PaperPlaneTilt size={20} weight="bold" />
                  <span>Enviar Solicitação</span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
      
      {/* Background blobs for premium feel */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-cyan/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-cyan/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />
    </section>
  );
}
