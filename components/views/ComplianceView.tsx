import React from 'react';
import { FileCheck, Users, Book, Target, Gavel, CheckCircle } from 'lucide-react';

export const ComplianceView: React.FC = () => {
  return (
    <div className="space-y-8 md:space-y-12">
      <section className="space-y-4">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          Programa de <span className="text-indigo-600">Compliance</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-slate-500 font-medium max-w-3xl">
          Estrutura e processos para garantir conformidade contínua com a LGPD.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="p-6 md:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
          <Users className="text-indigo-600 mb-4" size={32} />
          <h3 className="text-lg font-bold text-slate-800 mb-2">DPO - Data Protection Officer</h3>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Encarregado de proteção de dados pessoais, responsável por orientar colaboradores, receber comunicações da ANPD e dos titulares, e atuar como canal de comunicação.
          </p>
          <div className="p-3 bg-slate-50 rounded-2xl">
            <p className="text-xs text-slate-500 font-medium">Obrigatório</p>
            <p className="text-lg font-bold text-indigo-600">Nomeação e Divulgação</p>
          </div>
        </div>

        <div className="p-6 md:p-8 rounded-3xl bg-indigo-50 border border-indigo-100 shadow-sm">
          <Book className="text-indigo-600 mb-4" size={32} />
          <h3 className="text-lg font-bold text-indigo-900 mb-2">Políticas e Procedimentos</h3>
          <p className="text-sm text-indigo-800/80 leading-relaxed mb-4">
            Documentação de políticas de privacidade, termos de uso, processos de tratamento de dados e procedimentos de resposta a requisições de titulares.
          </p>
          <div className="p-3 bg-white rounded-2xl">
            <p className="text-xs text-indigo-700 font-medium">Documentação</p>
            <p className="text-lg font-bold text-indigo-600">Essencial</p>
          </div>
        </div>

        <div className="p-6 md:p-8 rounded-3xl bg-green-50 border border-green-100 shadow-sm">
          <Target className="text-green-600 mb-4" size={32} />
          <h3 className="text-lg font-bold text-green-900 mb-2">Mapeamento de Dados</h3>
          <p className="text-sm text-green-800/80 leading-relaxed">
            Inventário completo de dados pessoais, identificando tipos, finalidades, bases legais, fluxos, compartilhamentos e retenção.
          </p>
        </div>

        <div className="p-6 md:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
          <CheckCircle className="text-green-600 mb-4" size={32} />
          <h3 className="text-lg font-bold text-slate-800 mb-2">Treinamentos</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Capacitação contínua de colaboradores sobre princípios da LGPD, boas práticas e responsabilidades no tratamento de dados.
          </p>
        </div>
      </section>

      <section className="p-6 md:p-8 rounded-3xl bg-white border border-slate-200">
        <Gavel className="text-indigo-600 mb-4" size={32} />
        <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">
          Bases Legais para Tratamento
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-slate-700 mb-2">Consentimento</h4>
            <p className="text-sm text-slate-600">Manifestação livre, informada e inequívoca do titular.</p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-700 mb-2">Cumprimento de Obrigação Legal</h4>
            <p className="text-sm text-slate-600">Tratamento necessário por lei ou regulamento.</p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-700 mb-2">Execução de Contrato</h4>
            <p className="text-sm text-slate-600">Tratamento necessário para contrato do titular.</p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-700 mb-2">Legítimo Interesse</h4>
            <p className="text-sm text-slate-600">Para fins legítimos do controlador ou terceiros.</p>
          </div>
        </div>
      </section>
    </div>
  );
};
