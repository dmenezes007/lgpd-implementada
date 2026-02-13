import React from 'react';
import { Shield, Target, Eye, Lock, AlertCircle, Scale, CheckSquare, FileText, Users, Zap } from 'lucide-react';

export const PrincipiosView: React.FC = () => {
  const principios = [
    { icon: Target, title: 'Finalidade', description: 'Tratamento para propósitos legítimos, específicos e informados ao titular.' },
    { icon: CheckSquare, title: 'Adequação', description: 'Compatibilidade com as finalidades informadas ao titular.' },
    { icon: Zap, title: 'Necessidade', description: 'Limitação ao mínimo necessário para realização das finalidades.' },
    { icon: Eye, title: 'Livre Acesso', description: 'Garantia de consulta facilitada e gratuita sobre dados e tratamento.' },
    { icon: CheckSquare, title: 'Qualidade dos Dados', description: 'Exatidão, clareza, relevância e atualização dos dados.' },
    { icon: FileText, title: 'Transparência', description: 'Informações claras, precisas e acessíveis sobre o tratamento.' },
    { icon: Lock, title: 'Segurança', description: 'Medidas técnicas e administrativas para proteção de dados.' },
    { icon: AlertCircle, title: 'Prevenção', description: 'Adoção de medidas para prevenir danos ao titular.' },
    { icon: Users, title: 'Não Discriminação', description: 'Impossibilidade de tratamento para fins discriminatórios.' },
    { icon: Scale, title: 'Responsabilização', description: 'Demonstração de medidas eficazes de conformidade.' },
  ];

  return (
    <div className="space-y-8 md:space-y-12">
      <section className="space-y-4">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          10 Princípios da <span className="text-indigo-600">LGPD</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-slate-500 font-medium max-w-3xl">
          Fundamentos essenciais para o tratamento de dados pessoais conforme a Lei nº 13.709/2018.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {principios.map((principio, index) => {
          const Icon = principio.icon;
          return (
            <div key={index} className="p-6 md:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center">
                  <Icon className="text-indigo-600" size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-800">{principio.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{principio.description}</p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};
