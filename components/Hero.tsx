import React from 'react';
import { ASSETS } from '../constants';
import { MapPin, ChevronDown, ExternalLink } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-maroon via-maroon to-black text-gold min-h-[500px] md:min-h-screen flex flex-col items-center justify-center pt-12 pb-10 md:pt-8 md:pb-20 px-4">
      
      {/* Pillars - Absolute positioned to take full height of hero */}
      <img 
        src={ASSETS.pillarLeft} 
        alt="Pillar" 
        className="hidden lg:block absolute left-0 top-0 h-full w-auto object-cover z-0 opacity-90 drop-shadow-2xl" 
      />
      <img 
        src={ASSETS.pillarRight} 
        alt="Pillar" 
        className="hidden lg:block absolute right-0 top-0 h-full w-auto object-cover z-0 opacity-90 drop-shadow-2xl" 
      />

      <div className="relative z-10 flex flex-col items-center justify-center gap-3 md:gap-6 w-full max-w-5xl">
        
        {/* Center Content */}
        <div className="flex flex-col items-center text-center w-full max-w-3xl">
            
            {/* Deity Image Container with Centered Radiance */}
            {/* Reduced margin-bottom on mobile */}
            <div className="relative flex justify-center items-center mb-2 md:mb-6 w-fit mx-auto">
                
                {/* Rotating Rays Pattern 1 (Main) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[128vw] h-[128vw] md:w-[720px] md:h-[720px] pointer-events-none z-0">
                    <div 
                        className="w-full h-full animate-spin-slow rounded-full"
                        style={{
                            background: 'repeating-conic-gradient(from 0deg, rgba(212, 175, 55, 0.4) 0deg 15deg, transparent 15deg 30deg)',
                            maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 70%)',
                            WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 70%)'
                        }}
                    ></div>
                </div>

                {/* Rotating Rays Pattern 2 (Inner Reverse) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] md:w-[550px] md:h-[550px] pointer-events-none z-0">
                    <div 
                        className="w-full h-full animate-spin-reverse-medium rounded-full"
                        style={{
                            background: 'repeating-conic-gradient(from 0deg, rgba(212, 175, 55, 0.25) 0deg 10deg, transparent 10deg 20deg)',
                            maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 70%)',
                            WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 70%)'
                        }}
                    ></div>
                </div>

                {/* Gold Glow behind image */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[320px] md:h-[320px] bg-gold/50 blur-[60px] md:blur-[70px] rounded-full z-10"></div>
                
                {/* White Pulsing Glow behind image */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] md:w-[280px] md:h-[280px] bg-white/60 blur-[40px] md:blur-[50px] rounded-full z-10 animate-pulse"></div>
                
                {/* Core Intensity Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] md:w-[220px] md:h-[220px] bg-white/40 blur-[25px] rounded-full z-10"></div>

                {/* Deity Image: Reduced height on mobile */}
                <img src={ASSETS.heroImage} alt="Kalyana Ramar" className="h-[220px] md:h-[420px] object-contain drop-shadow-[0_0_30px_rgba(212,175,55,0.8)] z-20 relative transform hover:scale-105 transition-transform duration-700" />
            </div>

            <div className="space-y-2 md:space-y-4 z-20">
                <p className="font-serif italic text-cream text-base md:text-2xl tracking-widest drop-shadow-md">Webolim Presents</p>
                <h1 className="font-serif font-extrabold text-3xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-200 to-gold leading-tight drop-shadow-sm">
                    Sri Ramayana Satram & <br/> Valmiki Ramayana Conference 2026
                </h1>
                
                <div className="flex items-center justify-center gap-4 my-3 md:my-6">
                   <div className="h-[2px] w-8 md:w-12 bg-gold/50"></div>
                   <div className="h-1.5 w-1.5 md:h-2 md:w-2 rotate-45 bg-gold"></div>
                   <div className="h-[2px] w-8 md:w-12 bg-gold/50"></div>
                </div>

                <p className="font-sans text-cream text-base md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed drop-shadow px-2">
                    Theme: Recensions / Readings and Commentaries of Valmiki Ramayana
                </p>
            </div>

            {/* Dates Grid: Reduced gaps and margins */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mt-5 md:mt-8 w-full max-w-4xl px-2 md:px-4 mb-5 md:mb-8">
                <div className="bg-black/40 backdrop-blur-md border border-gold/30 p-3 md:p-4 rounded-xl flex flex-col items-center justify-center shadow-lg transform hover:-translate-y-1 transition-transform">
                    <span className="text-gold font-bold text-base md:text-lg uppercase tracking-wider mb-0.5 md:mb-1">Pre-Conference</span>
                    <span className="text-cream text-2xl md:text-4xl font-serif font-bold tracking-tight">Mar 28 – Apr 3</span>
                </div>
                <div className="bg-maroon/70 backdrop-blur-md border-2 border-gold p-3 md:p-5 rounded-xl flex flex-col items-center justify-center shadow-xl scale-100 md:scale-105 z-10">
                    <span className="text-gold font-bold text-lg md:text-xl uppercase tracking-wider mb-0.5 md:mb-1">Conference</span>
                    <span className="text-white text-4xl md:text-6xl font-serif font-extrabold tracking-tight drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)]">Apr 4 – 5</span>
                </div>
                <div className="bg-black/40 backdrop-blur-md border border-gold/30 p-3 md:p-4 rounded-xl flex flex-col items-center justify-center shadow-lg transform hover:-translate-y-1 transition-transform">
                    <span className="text-gold font-bold text-base md:text-lg uppercase tracking-wider mb-0.5 md:mb-1">Post-Conference</span>
                    <span className="text-cream text-2xl md:text-4xl font-serif font-bold tracking-tight">Apr 6 – 7</span>
                </div>
            </div>

            {/* Buttons Container */}
            <div className="flex flex-col md:flex-row gap-3 md:gap-4 w-full justify-center items-center z-20 px-4">
                 {/* Accommodation Link */}
                 <a 
                    href="https://docs.google.com/forms/d/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 bg-gold hover:bg-yellow-400 text-maroon py-2.5 md:py-3 px-6 md:px-8 rounded-full font-bold text-base md:text-lg shadow-lg hover:scale-105 transition-all w-full md:w-auto"
                >
                    Accommodation Registration <ExternalLink size={18} />
                </a>

                {/* Location Link with ID for scroll tracking */}
                <a 
                    id="hero-location-trigger"
                    href="https://www.google.com/maps/search/?api=1&query=Srimad+Valmiki+Ashrama+WEBOLIM+Ragihalli+Village+Bengaluru"
                    target="_blank"
                    rel="noreferrer"
                    className="group relative flex items-center justify-center gap-2 bg-charcoal/80 hover:bg-black/90 backdrop-blur-sm text-cream py-2.5 md:py-3 px-6 rounded-full border border-gold/30 transition-all hover:border-gold hover:scale-105 shadow-lg w-full md:w-auto"
                >
                    <MapPin size={16} className="text-gold group-hover:animate-bounce -mt-0.5" />
                    <span className="text-xs md:text-base font-medium tracking-wide">Srimad Valmiki Ashrama WEBOLIM, Bengaluru</span>
                </a>
            </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-3 md:bottom-6 left-1/2 -translate-x-1/2 animate-bounce z-20 text-gold/70">
          <div className="flex flex-col items-center gap-0 md:gap-1">
              <span className="text-[9px] md:text-[10px] uppercase tracking-widest">Scroll</span>
              <ChevronDown size={16} className="md:w-5 md:h-5" />
          </div>
      </div>
    </div>
  );
};

export default Hero;
