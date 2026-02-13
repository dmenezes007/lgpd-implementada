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

const CORRECT_PASSWORD = 'PGI_INPI_2025';

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
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedAuth = sessionStorage.getItem('isAuthenticated');
    if (storedAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (password: string): void => {
    if (password === CORRECT_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem('isAuthenticated', 'true');
      return;
    }

    alert('Senha incorreta');
  };

  const handleLogout = (): void => {
    sessionStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
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
