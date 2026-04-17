import React from 'react';
import { motion } from 'framer-motion';
import { Envelope, Phone, MapPin } from '@phosphor-icons/react';
import { ContactForm } from '../components/ContactForm';

export function Contact() {
  return (
    <section className="pt-24 sm:pt-32 pb-16 sm:pb-24 min-h-screen relative overflow-hidden bg-brand-dark">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-start">
          
          {/* Header & Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="flex flex-col gap-8"
          >
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-white mb-4 sm:mb-6">
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
                  <p className="text-white font-medium text-sm">chafic.matuck@goalltech.com.br</p>
                  <p className="text-white font-medium text-sm">goalltech@goalltech.com.br</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-gray-400 p-4 rounded-2xl bg-brand-panel border border-white/5 shadow-inner">
                <div className="p-3 bg-brand-dark rounded-xl text-brand-cyan">
                  <Phone size={24} weight="duotone" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Telefone</p>
                  <p className="text-white font-medium text-sm">Cel: +55 11 97441-2954</p>
                  <p className="text-white font-medium text-sm">Head Office: +55 11 4492-8955</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-gray-400 p-4 rounded-2xl bg-brand-panel border border-white/5 shadow-inner">
                <div className="p-3 bg-brand-dark rounded-xl text-brand-cyan">
                  <MapPin size={24} weight="duotone" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Sede</p>
                  <p className="text-white font-medium text-sm">Rua Miguel Rossi, 92</p>
                  <p className="text-white font-medium text-sm">Jundiaí - SP, CEP: 13.211-412</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
            className="glass-panel p-6 sm:p-8 md:p-12 rounded-[2rem] sm:rounded-[2.5rem] relative overflow-hidden"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
      
      {/* Background blobs for premium feel */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-cyan/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-cyan/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />
    </section>
  );
}
