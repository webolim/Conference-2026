import React from 'react';
import { ASSETS } from '../constants';
import { Mail, Phone, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal text-gray-300 py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex items-center gap-3">
            <img src={ASSETS.logo} alt="Webolim" className="h-12 grayscale opacity-80" />
            <div className="flex flex-col">
                <span className="font-serif font-bold text-white leading-tight">WEBOLIM</span>
                <span className="text-[10px] uppercase tracking-wider">Web of Life Makers</span>
            </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-12 text-sm text-center md:text-left">
            <div className="flex items-center justify-center gap-2 hover:text-gold transition-colors">
                <Phone size={16} /> <span>+91 93696 37283</span>
            </div>
            <a href="mailto:webolimclasses@gmail.com" className="flex items-center justify-center gap-2 hover:text-gold transition-colors">
                <Mail size={16} /> <span>webolimclasses@gmail.com</span>
            </a>
            <a href="https://webolim.org" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 hover:text-gold transition-colors">
                <Globe size={16} /> <span>webolim.org</span>
            </a>
        </div>
        
        <div className="text-xs text-gray-500">
            &copy; 2026 WEBOLIM Trust.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
