import React, { useState, useEffect } from 'react';
import { SCHEDULE_DATA, EVENT_START_DATE, EVENT_END_DATE, ASSETS } from './constants.ts';
import { calculateCurrentDay, getCurrentISTTime } from './utils/timeUtils.ts';
import Hero from './components/Hero.tsx';
import DayStepper from './components/DayStepper.tsx';
import Schedule from './components/Schedule.tsx';
import Donation from './components/Donation.tsx';
import Footer from './components/Footer.tsx';
import { Menu, X, ExternalLink } from 'lucide-react';

const App: React.FC = () => {
  // Initialize current day based on real time
  const [currentDayNumber, setCurrentDayNumber] = useState(1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState<{days: number, hours: number, minutes: number, seconds: number} | null>(null);
  const [isEventLive, setIsEventLive] = useState(false);
  const [isStickyHeaderVisible, setIsStickyHeaderVisible] = useState(false);
  const [isCountdownVisible, setIsCountdownVisible] = useState(true);

  useEffect(() => {
    // Determine the correct day to show initially
    const now = getCurrentISTTime();
    const dayNum = calculateCurrentDay(now);
    setCurrentDayNumber(dayNum);

    // Countdown Logic
    const timer = setInterval(() => {
      const currentTime = getCurrentISTTime();
      const start = EVENT_START_DATE;
      const end = EVENT_END_DATE;

      if (currentTime >= start && currentTime <= end) {
        setIsEventLive(true);
        setTimeLeft(null);
        setIsCountdownVisible(false); // Hide countdown automatically when live
      } else if (currentTime < start) {
        setIsEventLive(false);
        const diff = start.getTime() - currentTime.getTime();
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setIsEventLive(false);
        setTimeLeft(null); // Post event
        setIsCountdownVisible(false);
      }
    }, 1000);

    // Scroll Observer for Sticky Header
    const observer = new IntersectionObserver(
        ([entry]) => {
            // Show sticky header when the location element (in Hero) scrolls out of view to the top
            setIsStickyHeaderVisible(entry.boundingClientRect.top < 0 && !entry.isIntersecting);
        },
        { threshold: 0 }
    );

    const target = document.querySelector('#hero-location-trigger');
    if (target) observer.observe(target);

    return () => {
        clearInterval(timer);
        observer.disconnect();
    };
  }, []);

  const currentDayData = SCHEDULE_DATA.days.find(d => d.dayNumber === currentDayNumber) || SCHEDULE_DATA.days[0];

  const handleDaySelect = (dayNum: number) => {
    setCurrentDayNumber(dayNum);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-cream relative">
      
      {/* Hero Menu Button (Fixed top-right, hidden when sticky header is visible) */}
      <button 
        onClick={() => setIsMenuOpen(true)}
        className={`fixed top-4 right-4 z-50 bg-black/20 backdrop-blur-md text-gold p-3 rounded-full border border-gold/20 shadow-lg hover:bg-black/40 transition-all duration-300 ${isStickyHeaderVisible ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        aria-label="Open Menu"
      >
        <Menu size={24} />
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-maroon/95 text-white flex flex-col items-center justify-center space-y-8 backdrop-blur-md">
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-6 right-6 text-white/80 hover:text-white">
                <X size={32} />
            </button>
            <a href="#hero" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif font-bold text-gold">Home</a>
            <a href="#schedule" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif font-bold text-gold">Schedule</a>
            <a href="#donate" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif font-bold text-gold">Donate</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif font-bold text-gold">Contact</a>
            <a href="https://docs.google.com/forms/d/" target="_blank" rel="noreferrer" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif font-bold text-gold flex items-center gap-2 bg-white/10 px-6 py-2 rounded-full border border-gold/50">
                Accommodation <ExternalLink size={24} />
            </a>
        </div>
      )}

      {/* Floating Countdown Popup */}
      {isCountdownVisible && timeLeft && !isEventLive && (
        <div className="fixed bottom-4 right-4 md:right-8 z-50 animate-in slide-in-from-bottom-5 fade-in duration-500">
            <div className="bg-[#4a0404]/95 backdrop-blur-md border border-gold/30 rounded-xl shadow-2xl overflow-hidden min-w-[300px] relative">
                {/* Close Button */}
                <button 
                    onClick={() => setIsCountdownVisible(false)}
                    className="absolute top-2 right-2 text-gold/50 hover:text-gold transition-colors p-1"
                >
                    <X size={16} />
                </button>

                <div className="p-4 pt-6 text-center">
                    <p className="text-gold text-xs font-bold uppercase tracking-widest mb-2">Event Starts In</p>
                    <div className="flex justify-center gap-4 font-mono font-bold text-gold">
                        <div className="flex flex-col items-center">
                            <span className="text-2xl">{String(timeLeft.days).padStart(2, '0')}</span>
                            <span className="text-[9px] uppercase opacity-70">Days</span>
                        </div>
                        <span className="text-xl opacity-50 mt-1">:</span>
                        <div className="flex flex-col items-center">
                            <span className="text-2xl">{String(timeLeft.hours).padStart(2, '0')}</span>
                            <span className="text-[9px] uppercase opacity-70">Hrs</span>
                        </div>
                        <span className="text-xl opacity-50 mt-1">:</span>
                        <div className="flex flex-col items-center">
                            <span className="text-2xl">{String(timeLeft.minutes).padStart(2, '0')}</span>
                            <span className="text-[9px] uppercase opacity-70">Min</span>
                        </div>
                        <span className="text-xl opacity-50 mt-1">:</span>
                        <div className="flex flex-col items-center">
                            <span className="text-2xl text-white">{String(timeLeft.seconds).padStart(2, '0')}</span>
                            <span className="text-[9px] uppercase opacity-70">Sec</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )}

      <main className="flex-grow">
        <div id="hero">
            <Hero />
        </div>

        {/* Sticky Header Section */}
        <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gold/30 shadow-md transition-all duration-300">
            
            {/* 0. Sticky Brand Header (Visible on scroll) */}
            <div className={`overflow-hidden transition-all duration-500 ease-in-out bg-maroon border-b border-gold/20 ${isStickyHeaderVisible ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'}`}>
                 <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    
                    {/* Left: Logo + Text */}
                    <div className="flex items-center gap-3 md:gap-4">
                        <img src={ASSETS.logo} alt="Webolim" className="h-10 w-auto object-contain" />
                        <div className="flex flex-col md:flex-row md:items-baseline md:gap-3 text-left">
                            <span className="font-serif font-bold text-gold text-lg md:text-xl leading-none">
                                Sri Ramayana Satram
                            </span>
                            <span className="font-serif font-bold text-gold text-lg md:text-xl leading-none">
                                Conference 2026
                            </span>
                        </div>
                    </div>

                    {/* Right: Hamburger Menu inside sticky nav */}
                    <button 
                        onClick={() => setIsMenuOpen(true)}
                        className="text-gold p-2 hover:bg-white/10 rounded-full transition-colors"
                        aria-label="Menu"
                    >
                        <Menu size={24} />
                    </button>
                 </div>
            </div>

            {/* LIVE Banner (Only if event is live) */}
            {isEventLive && (
                 <div className="bg-red-700 text-white text-center py-2 text-base md:text-lg font-bold animate-pulse">
                    🔴 EVENT LIVE NOW
                 </div>
            )}

            {/* 2. Day Stepper */}
            <DayStepper 
                days={SCHEDULE_DATA.days} 
                currentDay={currentDayNumber} 
                onDaySelect={handleDaySelect}
            />
        </div>

        <Schedule day={currentDayData} />

        <Donation />
      </main>

      <Footer />
    </div>
  );
};

export default App;