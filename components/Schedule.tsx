import React, { useEffect, useState } from 'react';
import { Day } from '../types.ts';
import EventCard from './EventCard.tsx';
import { getCurrentISTTime, getEventStatus } from '../utils/timeUtils.ts';

interface ScheduleProps {
  day: Day;
}

const Schedule: React.FC<ScheduleProps> = ({ day }) => {
  const [currentTime, setCurrentTime] = useState(getCurrentISTTime());

  // Update time periodically to refresh live status
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(getCurrentISTTime());
    }, 60000); // Every minute
    return () => clearInterval(timer);
  }, []);

  // Auto-scroll to live event logic
  useEffect(() => {
    // Only auto-scroll if an event is explicitly live or next up
    const liveEvent = day.events.find(e => getEventStatus(e, day.date, currentTime) === 'live');
    if (liveEvent) {
       setTimeout(() => {
         const el = document.getElementById(`event-${liveEvent.id}`);
         if (el) {
             const headerOffset = 180; // height of header + stepper
             const elementPosition = el.getBoundingClientRect().top;
             const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
             window.scrollTo({
                 top: offsetPosition,
                 behavior: "smooth"
             });
         }
       }, 500); // slight delay for render
    }
  }, [day, currentTime]);

  const isConference = day.phase === 'Conference';
  const timelineIcon = isConference ? '🪔' : '🌸';

  return (
    <section id="schedule" className={`py-12 relative min-h-screen ${isConference ? 'bg-cream' : 'bg-green-50'}`}>
      
      {/* Background Decor */}
      {isConference ? (
        // Diya/Lamp Motif for Conference
        <div className="absolute inset-0 pointer-events-none opacity-10" style={{ backgroundImage: `radial-gradient(#D4AF37 1px, transparent 1px)`, backgroundSize: '30px 30px' }}></div>
      ) : (
        // Vine Motif for Satram
        <div className="absolute inset-0 pointer-events-none opacity-5" style={{ backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwIDAgQzUgNSAxNSAxNSAxMCAyMCIgc3Ryb2tlPSIjMjI4QjIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=')`, backgroundSize: '60px 60px' }}></div>
      )}

      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
         
         <div className="text-center mb-12">
            <span className={`inline-block px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-2 ${isConference ? 'bg-gold/20 text-maroon' : 'bg-green-100 text-deepGreen'}`}>
                {day.phase}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-maroon font-bold">{day.theme}</h2>
            <p className="text-gray-600 mt-2">{day.dayName}, {day.displayDate}, 2026</p>
         </div>

         {/* Timeline Container */}
         <div className="relative pt-4 pb-4">
            
            <div className="flex flex-col">
                {day.events.map((event, index) => {
                    // Logic for alternating layout on desktop
                    const isEven = index % 2 === 0;
                    const isLast = index === day.events.length - 1;
                    const isFirst = index === 0;
                    
                    return (
                        <div key={event.id} className={`relative flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''} items-center w-full py-4`}>
                            
                            {/* Connector Line - Segmented per event to ensure it starts/ends at dots */}
                            {day.events.length > 1 && (
                                <div 
                                    className={`absolute left-4 md:left-1/2 w-1 -ml-0.5 z-0 ${isConference ? 'bg-gold/50' : 'bg-deepGreen/30'}`}
                                    style={{
                                        // If first, start from center (50%) to bottom (100%) -> height 50%, top 50%
                                        // If last, start from top (0%) to center (50%) -> height 50%, top 0%
                                        // Middle: full height
                                        top: isFirst ? '50%' : '0',
                                        height: (isFirst || isLast) ? '50%' : '100%',
                                    }}
                                ></div>
                            )}

                            {/* Timeline Dot/Icon */}
                            <div className="absolute left-4 md:left-1/2 top-1/2 -translate-y-1/2 w-8 h-8 -ml-4 rounded-full border-4 border-white shadow flex items-center justify-center z-10 bg-cream">
                                {isConference ? (
                                    <div className="text-xl animate-flicker">🪔</div>
                                ) : (
                                    <div className="text-xl">🌸</div>
                                )}
                            </div>

                            {/* Content Spacer for Alternating Layout */}
                            <div className="hidden md:block w-1/2"></div>
                            
                            {/* Card Container */}
                            <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-10 text-right' : 'md:pl-10 text-left'}`}>
                                <EventCard 
                                    event={event} 
                                    date={day.date} 
                                    align={isEven ? 'left' : 'right'} 
                                />
                            </div>
                        </div>
                    );
                })}
            </div>

            {day.events.length === 0 && (
                <div className="text-center py-20 text-gray-500 italic">
                    Schedule details coming soon.
                </div>
            )}
         </div>

      </div>
    </section>
  );
};

export default Schedule;