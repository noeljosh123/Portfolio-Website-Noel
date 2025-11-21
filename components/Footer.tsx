import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-white/5 bg-zinc-950">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-zinc-500 text-sm">
          © {new Date().getFullYear()} Noel Josh Casin. Built with React & Tailwind.
        </p>
        <p className="text-zinc-600 text-sm font-mono">
          Mandaluyong, PH
        </p>
      </div>
    </footer>
  );
};

export default Footer;