import React from 'react';
import { SignUp } from '@clerk/clerk-react';

export const SignUpView: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-12">
      <div className="w-full max-w-md">
        <div className="mb-6 text-center">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Criar conta</h1>
          <p className="text-sm text-slate-500 mt-2">Cadastre-se para acessar a LGPD Implementada.</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-4 sm:p-6">
          <SignUp routing="path" path="/sign-up" signInUrl="/sign-in" />
        </div>
      </div>
    </div>
  );
};
