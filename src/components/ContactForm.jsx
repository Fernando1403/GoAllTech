import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PaperPlaneTilt, CheckCircle } from '@phosphor-icons/react';
import emailjs from '@emailjs/browser';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    reason: '',
    message: ''
  });

  function handleChange(e) {
    const { id, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      email: formData.email,
      telefone: formData.phone,
      assunto: formData.reason,
      mensagem: formData.message
    };

    try {
      await emailjs.send(
        "service_fw0kw66",
        "template_6vesvh9",
        templateParams,
        "r5haNZZbpwNSoMdz1"
      );

      setSubmitted(true);

      setFormData({
        email: '',
        phone: '',
        reason: '',
        message: ''
      });

    } catch (err) {
      console.error(err);
      alert("Erro ao enviar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center text-center py-20"
      >
        <div className="p-4 bg-brand-cyan/20 text-brand-cyan rounded-full mb-6">
          <CheckCircle size={64} weight="fill" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">Mensagem Enviada!</h2>
        <p className="text-gray-400 max-w-[250px]">
          Obrigado por entrar em contato. Retornaremos em breve.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-8 text-brand-cyan font-medium underline underline-offset-4"
        >
          Enviar nova mensagem
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium text-gray-300 ml-1">
          Seu melhor E-mail
        </label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-brand-dark border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-cyan/20 focus:border-brand-cyan/50 transition-all placeholder:text-gray-600"
          placeholder="email@corporativo.com.br"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="phone" className="text-sm font-medium text-gray-300 ml-1">
          Telefone / WhatsApp
        </label>
        <input
          type="tel"
          id="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          className="w-full bg-brand-dark border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-cyan/20 focus:border-brand-cyan/50 transition-all placeholder:text-gray-600"
          placeholder="+55 (11) 99999-9999"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="reason" className="text-sm font-medium text-gray-300 ml-1">
          Motivo do Contato
        </label>
        <select
          id="reason"
          required
          value={formData.reason}
          onChange={handleChange}
          className="w-full bg-brand-dark border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-cyan/20 focus:border-brand-cyan/50 transition-all appearance-none cursor-pointer"
        >
          <option value="" disabled>Selecione um assunto</option>
          <option value="software">Engenharia de Software</option>
          <option value="ai">Desenvolvimento de IA</option>
          <option value="cloud">Cloud & DevOps</option>
          <option value="cyber">Cyber Security</option>
          <option value="other">Outros assuntos</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-gray-300 ml-1">
          Conte um pouco mais (opcional)
        </label>
        <textarea
          id="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-brand-dark border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-cyan/20 focus:border-brand-cyan/50 transition-all placeholder:text-gray-600 resize-none"
          placeholder="Quais são os seus principais objetivos técnicos?"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="flex items-center justify-center gap-2 px-8 py-4 bg-brand-cyan text-brand-dark font-bold rounded-xl mt-4 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-70"
      >
        {loading ? (
          <span>Enviando...</span>
        ) : (
          <>
            <PaperPlaneTilt size={20} weight="bold" />
            <span>Enviar Solicitação</span>
          </>
        )}
      </button>
    </form>
  );
}