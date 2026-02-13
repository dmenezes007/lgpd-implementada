import React from 'react';
import { SignIn } from '@clerk/clerk-react';

export const SignInView: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-12">
      <div className="w-full max-w-md">
        <div className="mb-6 text-center">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Bem-vindo de volta</h1>
          <p className="text-sm text-slate-500 mt-2">Entre para acessar a LGPD Implementada.</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-4 sm:p-6">
          <SignIn
            routing="path"
            path="/sign-in"
            fallbackRedirectUrl="/"
            forceRedirectUrl="/"
          />
        </div>
      </div>
    </div>
  );
};
