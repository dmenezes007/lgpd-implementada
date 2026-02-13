import React from 'react';
import { Home, Shield, Users, Lock, FileCheck, AlertTriangle } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const navItems: NavItem[] = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'principios', label: 'Princípios', icon: Shield },
    { id: 'direitos', label: 'Direitos', icon: Users },
    { id: 'seguranca', label: 'Segurança', icon: Lock },
    { id: 'compliance', label: 'Compliance', icon: FileCheck },
    { id: 'incidentes', label: 'Incidentes', icon: AlertTriangle },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-20 md:w-64 bg-white border-r border-slate-200 transition-all duration-300 z-50">
      {/* Logo */}
      <div className="p-4 md:p-6 border-b border-slate-200">
        <h2 className="hidden md:block text-xl font-bold text-indigo-600">
          LGPD Implementada
        </h2>
        <span className="md:hidden text-2xl">🔒</span>
      </div>

      {/* Navigation */}
      <nav className="p-2 md:p-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`
                w-full p-3 md:p-4 rounded-2xl flex items-center gap-3 transition-all
                ${isActive 
                  ? 'bg-indigo-600 text-white shadow-md' 
                  : 'text-slate-600 hover:bg-slate-100'
                }
              `}
            >
              <Icon size={24} />
              <span className="hidden md:inline font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
};
