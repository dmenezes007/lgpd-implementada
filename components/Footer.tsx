import React from 'react';
import { Github, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto pt-8 md:pt-12 border-t border-slate-200">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
        <p className="flex items-center gap-2">
          Feito com <Heart size={16} className="text-red-500" fill="currentColor" /> para compliance LGPD
        </p>
        
        <div className="flex items-center gap-4">
          <p>© {currentYear} LGPD Implementada</p>
          <a
            href="https://github.com/dmenezes007"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-indigo-600 transition-colors"
          >
            <Github size={16} />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
