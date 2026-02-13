import React from 'react';
import ReactDOM from 'react-dom/client';
import { ClerkProvider } from '@clerk/clerk-react';
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
    <ClerkProvider publishableKey={publishableKey} navigate={(to) => navigate(to)}>
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
