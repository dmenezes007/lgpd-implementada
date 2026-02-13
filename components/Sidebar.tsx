import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserButton } from '@clerk/clerk-react';
import { Home, Shield, Users, Lock, FileCheck, AlertTriangle } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  to: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

export const Sidebar: React.FC = () => {
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
        <h2 className="hidden md:block text-xl font-bold text-indigo-600">
          LGPD Implementada
        </h2>
        <span className="md:hidden text-2xl">🔒</span>
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

      <div className="p-4 md:p-6 border-t border-slate-200 flex justify-center md:justify-start">
        <UserButton afterSignOutUrl="/sign-in" />
      </div>
    </aside>
  );
};
