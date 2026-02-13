import React from 'react';
import ReactDOM from 'react-dom/client';
import { ClerkProvider } from '@clerk/clerk-react';
import { ptBR } from '@clerk/localizations';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import App from './App';
import './index.css';

const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (import.meta.env.DEV && publishableKey) {
  const keyPreview = `${publishableKey.slice(0, 8)}...${publishableKey.slice(-4)}`;
  console.info(`Clerk publishable key loaded: ${keyPreview}`);
}

const ClerkProviderWithRouter: React.FC = () => {
  const navigate = useNavigate();

  if (!publishableKey) {
    throw new Error('Missing VITE_CLERK_PUBLISHABLE_KEY in the environment.');
  }

  return (
    <ClerkProvider
      publishableKey={publishableKey}
      navigate={(to) => navigate(to)}
      localization={ptBR}
      appearance={{
        variables: {
          colorPrimary: '#4f46e5',
          colorText: '#0f172a',
          colorTextSecondary: '#475569',
          colorBackground: '#f8fafc',
          colorInputBackground: '#ffffff',
          colorInputText: '#0f172a',
          colorSuccess: '#16a34a',
          colorDanger: '#dc2626',
          borderRadius: '16px',
          fontFamily: 'inherit',
        },
        elements: {
          card: 'rounded-3xl shadow-sm border border-slate-200',
          headerTitle: 'text-slate-900 font-extrabold',
          headerSubtitle: 'text-slate-500',
          socialButtonsBlockButton: 'rounded-2xl border-slate-200 hover:bg-slate-50',
          formButtonPrimary: 'bg-indigo-600 hover:bg-indigo-700',
          formFieldInput: 'rounded-2xl border-slate-200 focus:ring-indigo-500',
          footerActionLink: 'text-indigo-600 hover:text-indigo-700',
        },
      }}
    >
      <App />
    </ClerkProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ClerkProviderWithRouter />
    </BrowserRouter>
  </React.StrictMode>,
);
