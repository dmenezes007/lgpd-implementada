import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Shield, Users, Lock, FileCheck, AlertTriangle, LogOut } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  to: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

interface SidebarProps {
  onLogout: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ onLogout }) => {
  const navItems: NavItem[] = [
    { id: 'home', label: 'Home', to: '/', icon: Home },
    { id: 'principios', label: 'Princípios', to: '/principios', icon: Shield },
    { id: 'direitos', label: 'Direitos', to: '/direitos', icon: Users },
    { id: 'seguranca', label: 'Segurança', to: '/seguranca', icon: Lock },
    { id: 'compliance', label: 'Compliance', to: '/compliance', icon: FileCheck },
    { id: 'incidentes', label: 'Incidentes', to: '/incidentes', icon: AlertTriangle },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-20 md:w-64 bg-white border-r border-slate-200 transition-all duration-300 z-50 flex flex-col">
      {/* Logo */}
      <div className="p-4 md:p-6 border-b border-slate-200">
        <div className="flex items-center justify-center md:justify-start gap-3">
          <img
            src="/assets/logo.png"
            alt="Logo LGPD Implementada"
            className="h-10 w-auto"
          />
          <h2 className="hidden md:block text-xl font-bold text-indigo-600">
            LGPD Implementada
          </h2>
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-2 md:p-4 space-y-1 flex-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          
          return (
            <NavLink
              key={item.id}
              to={item.to}
              className={({ isActive }) => `
                w-full p-3 md:p-4 rounded-2xl flex items-center gap-3 transition-all
                ${isActive 
                  ? 'bg-indigo-600 text-white shadow-md' 
                  : 'text-slate-600 hover:bg-slate-100'
                }
              `}
              end={item.to === '/'}
            >
              <Icon size={24} />
              <span className="hidden md:inline font-medium">{item.label}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="p-2 md:p-4 border-t border-slate-200">
        <button
          type="button"
          onClick={onLogout}
          className="w-full p-3 md:p-4 rounded-2xl flex items-center gap-3 text-slate-600 hover:bg-slate-100 transition-all"
        >
          <LogOut size={24} />
          <span className="hidden md:inline font-medium">Sair</span>
        </button>
      </div>
    </aside>
  );
};
