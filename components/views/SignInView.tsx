import React, { useState } from 'react';

interface SignInViewProps {
  onLogin: (password: string) => void;
}

export const SignInView: React.FC<SignInViewProps> = ({ onLogin }) => {
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    onLogin(password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-12">
      <div className="w-full max-w-md">
        <div className="mb-6 text-center">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Bem-vindo de volta</h1>
          <p className="text-sm text-slate-500 mt-2">Entre para acessar a LGPD Implementada.</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-6 sm:p-8">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-slate-700">
                Senha de acesso
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Digite sua senha"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-2xl bg-indigo-600 text-white font-semibold px-4 py-3 hover:bg-indigo-700 transition-colors"
            >
              Acessar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
