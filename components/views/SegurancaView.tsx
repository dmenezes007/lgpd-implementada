import React from 'react';
import { Lock, Shield, Key, Eye, Database, CloudLock, FileCheck, AlertTriangle } from 'lucide-react';

export const SegurancaView: React.FC = () => {
  return (
    <div className="space-y-8 md:space-y-12">
      <section className="space-y-4">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          Segurança da <span className="text-indigo-600">Informação</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-slate-500 font-medium max-w-3xl">
          Medidas técnicas e administrativas para proteção de dados pessoais.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
        <div className="md:col-span-8 p-6 md:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
          <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Lock className="text-indigo-600" size={24} />
            Medidas de Segurança
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <Shield className="text-green-600 mt-1 flex-shrink-0" size={20} />
              <span className="text-slate-600"><strong>Criptografia:</strong> Proteção de dados em trânsito e repouso</span>
            </li>
            <li className="flex items-start gap-3">
              <Key className="text-green-600 mt-1 flex-shrink-0" size={20} />
              <span className="text-slate-600"><strong>Controle de Acesso:</strong> Autenticação e autorização adequadas</span>
            </li>
            <li className="flex items-start gap-3">
              <Eye className="text-green-600 mt-1 flex-shrink-0" size={20} />
              <span className="text-slate-600"><strong>Monitoramento:</strong> Logs e auditoria de acessos</span>
            </li>
            <li className="flex items-start gap-3">
              <Database className="text-green-600 mt-1 flex-shrink-0" size={20} />
              <span className="text-slate-600"><strong>Backup:</strong> Cópias de segurança regulares</span>
            </li>
            <li className="flex items-start gap-3">
              <CloudLock className="text-green-600 mt-1 flex-shrink-0" size={20} />
              <span className="text-slate-600"><strong>Infraestrutura Segura:</strong> Ambientes protegidos e atualizados</span>
            </li>
          </ul>
        </div>

        <div className="md:col-span-4 p-6 md:p-8 rounded-3xl bg-indigo-50 border border-indigo-100">
          <FileCheck className="text-indigo-600 mb-4" size={32} />
          <h3 className="text-lg font-bold text-indigo-900 mb-2">Boas Práticas</h3>
          <p className="text-sm text-indigo-800/80 leading-relaxed mb-4">
            Implementar políticas de segurança, realizar avaliações de risco e treinar equipes regularmente.
          </p>
          <div className="p-3 bg-white rounded-2xl">
            <p className="text-2xl font-bold text-indigo-600">ISO 27001</p>
            <p className="text-xs text-indigo-700 font-medium">Padrão Internacional</p>
          </div>
        </div>
      </section>

      <section className="p-6 md:p-8 rounded-3xl bg-rose-50 border border-rose-100">
        <div className="flex items-start gap-4">
          <AlertTriangle className="text-rose-600 flex-shrink-0" size={32} />
          <div>
            <h3 className="text-lg font-bold text-rose-900 mb-2">Prevenção de Incidentes</h3>
            <p className="text-sm text-rose-800/80 leading-relaxed">
              Organizações devem adotar medidas preventivas e ter planos de resposta a incidentes de segurança. Em caso de vazamento ou acesso não autorizado, a ANPD e os titulares devem ser notificados em prazo razoável.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
