import React, { useState } from 'react';

interface SignInViewProps {
  onLogin: (password: string) => Promise<{ success: boolean; error?: string }>;
}

export const SignInView: React.FC<SignInViewProps> = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    const result = await onLogin(password);

    if (!result.success) {
      setErrorMessage(result.error ?? 'Senha incorreta');
    }

    setIsSubmitting(false);
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
              disabled={isSubmitting}
              className="w-full rounded-2xl bg-indigo-600 text-white font-semibold px-4 py-3 hover:bg-indigo-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Validando...' : 'Acessar'}
            </button>

            {errorMessage && (
              <p className="text-sm text-red-600">{errorMessage}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
