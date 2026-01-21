import React from 'react';
import { ASSETS } from '../constants.ts';
import { Menu } from 'lucide-react';

interface HeaderProps {
    onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-md shadow-md border-b-2 border-maroon">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center gap-3">
            <img src={ASSETS.logo} alt="Webolim" className="h-10 md:h-12" />
            <div className="flex flex-col">
                <span className="font-serif font-bold text-maroon leading-tight text-sm md:text-lg">Sri Ramayana Satram</span>
                <span className="text-[10px] md:text-xs text-charcoal uppercase tracking-wider">Conference 2026</span>
            </div>
        </div>
        
        <button onClick={onMenuClick} className="md:hidden text-maroon p-2">
            <Menu size={24} />
        </button>

        <nav className="hidden md:flex gap-6 font-medium text-maroon">
            <a href="#hero" className="hover:text-gold transition-colors">Home</a>
            <a href="#schedule" className="hover:text-gold transition-colors">Schedule</a>
            <a href="#donate" className="hover:text-gold transition-colors">Donate</a>
            <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
