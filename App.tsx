import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';
import { HomeView } from './components/views/HomeView';
import { PrincipiosView } from './components/views/PrincipiosView';
import { DireitosView } from './components/views/DireitosView';
import { SegurancaView } from './components/views/SegurancaView';
import { ComplianceView } from './components/views/ComplianceView';
import { IncidentesView } from './components/views/IncidentesView';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomeView />;
      case 'principios':
        return <PrincipiosView />;
      case 'direitos':
        return <DireitosView />;
      case 'seguranca':
        return <SegurancaView />;
      case 'compliance':
        return <ComplianceView />;
      case 'incidentes':
        return <IncidentesView />;
      default:
        return <HomeView />;
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar - Fixed Left */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <main className="flex-1 ml-20 md:ml-64 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 md:py-12 space-y-8 md:space-y-12 min-h-screen flex flex-col">
          <div className="flex-1">
            {renderContent()}
          </div>
          
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default App;
