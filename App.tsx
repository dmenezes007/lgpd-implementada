import React, { useEffect, useState } from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';
import { HomeView } from './components/views/HomeView';
import { PrincipiosView } from './components/views/PrincipiosView';
import { DireitosView } from './components/views/DireitosView';
import { SegurancaView } from './components/views/SegurancaView';
import { ComplianceView } from './components/views/ComplianceView';
import { IncidentesView } from './components/views/IncidentesView';
import { SignInView } from './components/views/SignInView';

type AuthStatus = 'checking' | 'authenticated' | 'unauthenticated';

interface ProtectedLayoutProps {
  onLogout: () => void;
}

const ProtectedLayout: React.FC<ProtectedLayoutProps> = ({ onLogout }) => {
  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar - Fixed Left */}
      <Sidebar onLogout={onLogout} />

      {/* Main Content Area */}
      <main className="flex-1 ml-20 md:ml-64 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 md:py-12 space-y-8 md:space-y-12 min-h-screen flex flex-col">
          <div className="flex-1">
            <Outlet />
        </div>

          <Footer />
        </div>
      </main>
    </div>
  );
};

const App: React.FC = () => {
  const [authStatus, setAuthStatus] = useState<AuthStatus>('checking');

  useEffect(() => {
    const verifySession = async (): Promise<void> => {
      try {
        const response = await fetch('/api/auth/session', {
          method: 'GET',
          credentials: 'same-origin',
        });

        setAuthStatus(response.ok ? 'authenticated' : 'unauthenticated');
      } catch {
        setAuthStatus('unauthenticated');
      }
    };

    void verifySession();
  }, []);

  const handleLogin = async (password: string): Promise<{ success: boolean; error?: string }> => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'same-origin',
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        setAuthStatus('authenticated');
        return { success: true };
      }

      const payload = (await response.json().catch(() => null)) as { error?: string } | null;
      return { success: false, error: payload?.error ?? 'Falha no login' };
    } catch {
      return { success: false, error: 'Não foi possível conectar ao servidor de autenticação' };
    }
  };

  const handleLogout = async (): Promise<void> => {
    try {
      await fetch('/api/auth/logout', {
        method: 'POST',
        credentials: 'same-origin',
      });
    } finally {
      setAuthStatus('unauthenticated');
    }
  };

  if (authStatus === 'checking') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
        <p className="text-slate-600">Verificando acesso...</p>
      </div>
    );
  }

  if (authStatus !== 'authenticated') {
    return (
      <Routes>
        <Route path="/sign-in" element={<SignInView onLogin={handleLogin} />} />
        <Route path="*" element={<Navigate to="/sign-in" replace />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/sign-in" element={<Navigate to="/" replace />} />
      <Route path="/" element={<ProtectedLayout onLogout={handleLogout} />}>
        <Route index element={<HomeView />} />
        <Route path="principios" element={<PrincipiosView />} />
        <Route path="direitos" element={<DireitosView />} />
        <Route path="seguranca" element={<SegurancaView />} />
        <Route path="compliance" element={<ComplianceView />} />
        <Route path="incidentes" element={<IncidentesView />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
