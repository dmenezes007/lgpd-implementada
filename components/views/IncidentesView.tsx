import React from 'react';
import { AlertTriangle, Bell, FileText, Clock, Users, CheckCircle } from 'lucide-react';

export const IncidentesView: React.FC = () => {
  return (
    <div className="space-y-8 md:space-y-12">
      <section className="space-y-4">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          Gestão de <span className="text-rose-600">Incidentes</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-slate-500 font-medium max-w-3xl">
          Resposta rápida e adequada a incidentes de segurança envolvendo dados pessoais.
        </p>
      </section>

      <section className="p-6 md:p-8 lg:p-12 rounded-[2.5rem] bg-rose-600 text-white shadow-2xl shadow-rose-200">
        <AlertTriangle size={48} className="mb-4" />
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
          O que é um Incidente de Segurança?
        </h2>
        <p className="text-sm md:text-base text-rose-100 leading-relaxed">
          Qualquer evento adverso confirmado relacionado à violação da segurança de dados pessoais, como acesso não autorizado, destruição, perda, alteração, comunicação ou qualquer forma de tratamento inadequado ou ilícito.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm">
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center mb-3">
            <Bell className="text-indigo-600" size={24} />
          </div>
          <h4 className="font-bold text-slate-800 mb-2">1. Detecção</h4>
          <p className="text-sm text-slate-600">Identificar o incidente rapidamente através de monitoramento.</p>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm">
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center mb-3">
            <FileText className="text-indigo-600" size={24} />
          </div>
          <h4 className="font-bold text-slate-800 mb-2">2. Contenção</h4>
          <p className="text-sm text-slate-600">Isolar sistemas afetados e prevenir propagação.</p>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm">
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center mb-3">
            <Users className="text-indigo-600" size={24} />
          </div>
          <h4 className="font-bold text-slate-800 mb-2">3. Notificação</h4>
          <p className="text-sm text-slate-600">Comunicar ANPD e titulares em prazo razoável.</p>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm">
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center mb-3">
            <CheckCircle className="text-indigo-600" size={24} />
          </div>
          <h4 className="font-bold text-slate-800 mb-2">4. Remediação</h4>
          <p className="text-sm text-slate-600">Corrigir vulnerabilidades e prevenir reincidência.</p>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="p-6 md:p-8 rounded-3xl bg-amber-50 border border-amber-100">
          <Clock className="text-amber-600 mb-4" size={32} />
          <h3 className="text-lg font-bold text-amber-900 mb-2">Prazo de Notificação</h3>
          <p className="text-sm text-amber-800/80 leading-relaxed mb-4">
            A LGPD não estabelece prazo específico, mas determina que seja em "prazo razoável". A boa prática indica notificação em até <strong>72 horas</strong> após a ciência do incidente.
          </p>
          <div className="p-3 bg-white rounded-2xl">
            <p className="text-2xl font-bold text-amber-600">≤ 72h</p>
            <p className="text-xs text-amber-700 font-medium">Prazo Recomendado</p>
          </div>
        </div>

        <div className="p-6 md:p-8 rounded-3xl bg-white border border-slate-200">
          <FileText className="text-indigo-600 mb-4" size={32} />
          <h3 className="text-lg font-bold text-slate-800 mb-2">Informações a Comunicar</h3>
          <ul className="space-y-2 text-sm text-slate-600">
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 mt-1">•</span>
              <span>Descrição da natureza dos dados afetados</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 mt-1">•</span>
              <span>Informações sobre os titulares envolvidos</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 mt-1">•</span>
              <span>Medidas técnicas de segurança utilizadas</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 mt-1">•</span>
              <span>Riscos relacionados ao incidente</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 mt-1">•</span>
              <span>Medidas adotadas para mitigar os efeitos</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};
