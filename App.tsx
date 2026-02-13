import React from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { SignedIn, SignedOut } from '@clerk/clerk-react';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';
import { HomeView } from './components/views/HomeView';
import { PrincipiosView } from './components/views/PrincipiosView';
import { DireitosView } from './components/views/DireitosView';
import { SegurancaView } from './components/views/SegurancaView';
import { ComplianceView } from './components/views/ComplianceView';
import { IncidentesView } from './components/views/IncidentesView';
import { SignInView } from './components/views/SignInView';

const ProtectedLayout: React.FC = () => {
  return (
    <>
      <SignedOut>
        <Navigate to="/sign-in" replace />
      </SignedOut>
      <SignedIn>
        <div className="flex min-h-screen bg-slate-50">
          {/* Sidebar - Fixed Left */}
          <Sidebar />

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
      </SignedIn>
    </>
  );
};

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/sign-in/*" element={<SignInView />} />
      <Route path="/" element={<ProtectedLayout />}>
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
