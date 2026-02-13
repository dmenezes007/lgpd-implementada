import React from 'react';
import { CheckCircle, Eye, Edit, Trash2, Download, XCircle, Info, Shield, FileText } from 'lucide-react';

export const DireitosView: React.FC = () => {
  const direitos = [
    { icon: CheckCircle, title: 'Confirmação', description: 'Confirmar a existência de tratamento de dados pessoais.' },
    { icon: Eye, title: 'Acesso', description: 'Acessar seus dados pessoais tratados pela organização.' },
    { icon: Edit, title: 'Correção', description: 'Corrigir dados incompletos, inexatos ou desatualizados.' },
    { icon: Shield, title: 'Anonimização', description: 'Solicitar anonimização, bloqueio ou eliminação de dados.' },
    { icon: Download, title: 'Portabilidade', description: 'Solicitar portabilidade dos dados a outro fornecedor.' },
    { icon: Trash2, title: 'Eliminação', description: 'Requisitar eliminação de dados tratados com consentimento.' },
    { icon: Info, title: 'Informação', description: 'Obter informações sobre compartilhamento de dados.' },
    { icon: XCircle, title: 'Revogação', description: 'Revogar o consentimento dado anteriormente.' },
    { icon: FileText, title: 'Oposição', description: 'Opor-se ao tratamento em casos específicos previstos na lei.' },
  ];

  return (
    <div className="space-y-8 md:space-y-12">
      <section className="space-y-4">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          Direitos dos <span className="text-indigo-600">Titulares</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-slate-500 font-medium max-w-3xl">
          A LGPD garante aos titulares de dados uma série de direitos fundamentais sobre suas informações pessoais.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {direitos.map((direito, index) => {
          const Icon = direito.icon;
          return (
            <div key={index} className="p-6 rounded-3xl bg-green-50 border border-green-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center">
                  <Icon className="text-green-600" size={24} />
                </div>
                <h3 className="text-lg font-bold text-green-900">{direito.title}</h3>
                <p className="text-sm text-green-800/80 leading-relaxed">{direito.description}</p>
              </div>
            </div>
          );
        })}
      </section>

      <section className="p-6 md:p-8 rounded-3xl bg-white border border-slate-200">
        <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">
          Como Exercer seus Direitos
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          Os titulares podem exercer seus direitos mediante requisição ao controlador de dados através dos canais de atendimento disponibilizados pela organização.
        </p>
        <p className="text-slate-600 leading-relaxed">
          O controlador deve responder às solicitações de forma <strong>gratuita</strong>, em formato <strong>simplificado</strong> e dentro de <strong>prazo adequado</strong>, não podendo ser superior a 15 dias.
        </p>
      </section>
    </div>
  );
};
