import React from 'react';
import { Shield, CheckCircle, TrendingUp, Users } from 'lucide-react';

export const HomeView: React.FC = () => {
  return (
    <div className="space-y-8 md:space-y-12">
      {/* Hero Section */}
      <section className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6">
          <div className="space-y-2 max-w-2xl">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              LGPD Implementada: <br className="hidden sm:block" />
              <span className="text-indigo-600">Proteção de Dados na Prática</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-500 font-medium">
              Compliance, segurança e privacidade para sua organização.
            </p>
          </div>
        </div>

        <div className="p-6 md:p-8 lg:p-12 rounded-[2.5rem] bg-indigo-600 text-white shadow-2xl shadow-indigo-200 relative overflow-hidden group">
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-white opacity-[0.05] rounded-full blur-3xl group-hover:opacity-[0.1] transition-opacity duration-500" />
          <div className="relative z-10 max-w-3xl space-y-4 md:space-y-6">
            <span className="inline-block px-3 md:px-4 py-1 md:py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs md:text-sm font-bold tracking-wide uppercase">
              Lei Geral de Proteção de Dados
            </span>
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold leading-tight">
              A LGPD estabelece regras claras para coleta, uso, processamento e armazenamento de dados pessoais no Brasil.
            </h2>
            <p className="text-sm md:text-base text-indigo-100 leading-relaxed">
              Desde setembro de 2020, organizações públicas e privadas devem estar em conformidade com a lei, garantindo transparência, segurança e respeito aos direitos dos titulares de dados.
            </p>
          </div>
        </div>
      </section>

      {/* Metrics Grid */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
        {/* Card 1 */}
        <div className="md:col-span-6 p-6 md:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="space-y-3 md:space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center">
              <Shield className="text-indigo-600" size={28} />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-slate-800">
              10 Princípios Fundamentais
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              Finalidade, adequação, necessidade, livre acesso, qualidade dos dados, transparência, segurança, prevenção, não discriminação e responsabilização.
            </p>
            <div className="pt-3 border-t border-slate-200">
              <p className="text-2xl font-bold text-indigo-600">100%</p>
              <p className="text-xs text-slate-500 font-medium">Conformidade Obrigatória</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="md:col-span-6 p-6 md:p-8 rounded-3xl bg-green-50 border border-green-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="space-y-3 md:space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center">
              <Users className="text-green-600" size={28} />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-green-900">
              Direitos dos Titulares
            </h3>
            <p className="text-sm text-green-800/80 leading-relaxed">
              Confirmação, acesso, correção, anonimização, portabilidade, eliminação, informação, revogação e oposição ao tratamento de dados.
            </p>
            <div className="pt-3 border-t border-green-200">
              <p className="text-2xl font-bold text-green-600">9 Direitos</p>
              <p className="text-xs text-green-700 font-medium">Garantidos por Lei</p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="md:col-span-4 p-6 md:p-8 rounded-3xl bg-rose-50 border border-rose-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="space-y-3 md:space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-rose-100 flex items-center justify-center">
              <CheckCircle className="text-rose-600" size={28} />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-rose-900">
              Sanções e Multas
            </h3>
            <p className="text-sm text-rose-800/80 leading-relaxed">
              Multas de até R$ 50 milhões ou 2% do faturamento.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="md:col-span-8 p-6 md:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="space-y-3 md:space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center">
              <TrendingUp className="text-indigo-600" size={28} />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-slate-800">
              Investimento em Compliance
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              Empresas que investem em conformidade LGPD demonstram compromisso com privacidade, aumentam a confiança dos clientes e reduzem riscos legais e reputacionais.
            </p>
            <div className="grid grid-cols-2 gap-3 pt-3">
              <div className="p-3 bg-slate-50 rounded-2xl">
                <p className="text-xl md:text-2xl font-bold text-indigo-600">+45%</p>
                <p className="text-xs text-slate-500 font-medium">Confiança do Cliente</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-2xl">
                <p className="text-xl md:text-2xl font-bold text-indigo-600">-60%</p>
                <p className="text-xs text-slate-500 font-medium">Risco de Incidentes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="p-6 md:p-8 rounded-3xl bg-white border border-slate-200">
        <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">
          O que é a LGPD?
        </h2>
        <div className="prose prose-slate max-w-none">
          <p className="text-slate-600 leading-relaxed mb-4">
            A <strong>Lei Geral de Proteção de Dados (Lei nº 13.709/2018)</strong> é a legislação brasileira que regula o tratamento de dados pessoais, tanto no meio físico quanto digital, por pessoas naturais ou jurídicas de direito público ou privado.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            A lei foi criada para proteger os direitos fundamentais de liberdade e privacidade, e estabelece regras sobre coleta, armazenamento, tratamento e compartilhamento de dados pessoais.
          </p>
          <p className="text-slate-600 leading-relaxed">
            A Autoridade Nacional de Proteção de Dados (ANPD) é o órgão responsável por zelar, implementar e fiscalizar o cumprimento da LGPD no Brasil.
          </p>
        </div>
      </section>
    </div>
  );
};
