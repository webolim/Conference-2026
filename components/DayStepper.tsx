import React, { useEffect, useRef } from 'react';
import { Day } from '../types';

interface DayStepperProps {
  days: Day[];
  currentDay: number;
  onDaySelect: (day: number) => void;
}

const DayStepper: React.FC<DayStepperProps> = ({ days, currentDay, onDaySelect }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      const selectedElement = document.getElementById(`day-btn-${currentDay}`);
      if (selectedElement) {
        const container = scrollRef.current;
        // Center the selected item
        const scrollLeft = selectedElement.offsetLeft - container.offsetWidth / 2 + selectedElement.offsetWidth / 2;
        container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
      }
    }
  }, [currentDay]);

  return (
    <div className="w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm relative z-30">
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto no-scrollbar py-3 px-4 gap-3 items-stretch w-full md:justify-center"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {days.map((day) => {
          const isActive = day.dayNumber === currentDay;
          const isConference = day.phase === 'Conference';
          
          const [month, dateStr] = day.displayDate.split(' ');
          const shortMonth = month.substring(0, 3);
          const shortDayName = day.dayName.substring(0, 3).toUpperCase();

          return (
            <button
              key={day.dayNumber}
              id={`day-btn-${day.dayNumber}`}
              onClick={() => onDaySelect(day.dayNumber)}
              className={`
                flex-shrink-0 flex flex-col items-center justify-center
                min-w-[160px] md:min-w-[180px] py-3 rounded-lg transition-all duration-300
                snap-center border-2 cursor-pointer
                relative overflow-hidden
                ${isActive 
                  ? 'bg-maroon border-gold text-white shadow-lg scale-105 ring-2 ring-gold/40 z-10' 
                  : isConference 
                    ? 'bg-yellow-50 border-yellow-400/60 text-charcoal hover:bg-yellow-100 hover:border-yellow-500 hover:shadow-md' 
                    : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hover:border-gold/60 hover:shadow-sm'
                }
              `}
              aria-label={`Select ${day.dayName}, ${day.displayDate}, Theme: ${day.theme}`}
              aria-current={isActive ? 'date' : undefined}
            >
              {/* Optional: Small visual indicator for Conference days in inactive state */}
              {!isActive && isConference && (
                 <div className="absolute top-0 right-0 w-4 h-4 bg-gold/40 rounded-bl-full"></div>
              )}

              {/* Date Info Row: MONTH DATE DAY */}
              <div className="flex items-baseline gap-2 leading-none mb-1">
                 <span className={`text-xs md:text-sm font-bold tracking-wider uppercase ${isActive ? 'text-gold' : 'text-gray-400'}`}>
                   {shortMonth}
                 </span>
                 <span className={`text-3xl md:text-4xl font-serif font-bold ${isActive ? 'text-white' : 'text-gray-800'}`}>
                   {dateStr}
                 </span>
                 <span className={`text-xs md:text-sm font-bold tracking-wider uppercase ${isActive ? 'text-gray-300' : 'text-gray-400'}`}>
                   {shortDayName}
                 </span>
              </div>

              {/* Theme Row */}
              <span className={`text-xs md:text-sm font-bold uppercase tracking-wide text-center w-full whitespace-nowrap overflow-hidden text-ellipsis px-2 mt-1 ${isActive ? 'text-gold' : 'text-gray-600'}`}>
                {day.theme}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default DayStepper;
