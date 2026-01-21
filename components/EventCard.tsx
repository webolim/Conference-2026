import React from 'react';
import { Event } from '../types.ts';
import { getYouTubeButtonState, getCurrentISTTime } from '../utils/timeUtils.ts';
import { Play, Youtube, MapPin, Clock } from 'lucide-react';

interface EventCardProps {
  event: Event;
  date: string; // YYYY-MM-DD
  isAlternating?: boolean; // For desktop alternating layout
  align?: 'left' | 'right'; // Alignment for desktop
}

const EventCard: React.FC<EventCardProps> = ({ event, date, isAlternating, align = 'right' }) => {
  const now = getCurrentISTTime();
  const ytState = getYouTubeButtonState(event, date, now);
  const isConference = event.isConference;
  const hasVideo = !!event.youtubeLink;
  const ICON_SIZE = 20;

  return (
    <div 
        id={`event-${event.id}`}
        className={`
            relative overflow-hidden transition-all duration-300 group text-left
            ${hasVideo 
                ? 'bg-white rounded-xl shadow-lg border-l-4 border-maroon hover:shadow-xl p-5 md:p-6' 
                : 'bg-transparent border-l-4 border-transparent pl-5 py-4 md:pl-6' // No background, transparent border (no accent)
            }
            ${ytState === 'live' ? 'ring-2 ring-red-500 ring-offset-2' : ''}
        `}
    >
      {/* Live Indicator */}
      {ytState === 'live' && hasVideo && (
        <div className="absolute top-3 right-3 flex items-center gap-1 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse z-10">
            <span className="w-2 h-2 bg-white rounded-full"></span> LIVE
        </div>
      )}

      <div className="flex flex-col h-full">
        {/* Time, Title & Venue Section */}
        <div className={`${hasVideo ? 'border-b border-gray-100 pb-4 mb-4' : 'mb-2'}`}>
            
            {/* Time */}
            <div className="flex items-start gap-3 mb-2">
                <div className="w-5 shrink-0 flex items-center justify-center mt-0.5">
                    <Clock size={ICON_SIZE} className="text-gold" />
                </div>
                <span className="font-bold text-lg md:text-xl text-maroon leading-tight">{event.startTime} – {event.endTime}</span>
            </div>

            {/* Title */}
            <div className="flex items-start gap-3 mb-2">
                 <div className="w-5 shrink-0"></div> {/* Spacer for alignment */}
                 <h3 className="font-serif leading-tight text-2xl md:text-3xl font-bold text-gray-900">
                    {event.title}
                 </h3>
            </div>
            
            {/* Conditional Venue Rendering */}
            {event.venue && event.venue !== 'Venue' && (
                <div className="flex items-start gap-3">
                    <div className="w-5 shrink-0 flex items-center justify-center -mt-1">
                        <MapPin size={ICON_SIZE} className="text-gray-400" />
                    </div>
                    <span className="font-medium text-gray-600 text-base leading-tight">{event.venue}</span>
                </div>
            )}
        </div>

        {/* Speaker Section */}
        {event.speakers.length > 0 && hasVideo && (
            <div className="flex flex-col gap-6 mb-5 mt-4">
                {event.speakers.map((speaker, idx) => (
                    <div key={idx} className="flex flex-col items-start text-left gap-4 w-full">
                         <div className="relative flex-shrink-0">
                            <img 
                                src={speaker.photo} 
                                alt={speaker.name} 
                                className={`
                                    object-cover rounded-xl border-2 border-gold shadow-md bg-gray-100
                                    ${isConference ? 'w-40 h-40' : 'w-24 h-24'}
                                `}
                            />
                         </div>
                         <div className="w-full">
                             <p className="font-bold text-maroon text-lg md:text-xl leading-tight">{speaker.name}</p>
                             {/* Full Bio for Conference Events without Scroll */}
                             {isConference && speaker.bio && (
                                 <div className="mt-2 text-sm md:text-base text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-lg border border-gray-100">
                                     {speaker.bio}
                                 </div>
                             )}
                         </div>
                    </div>
                ))}
            </div>
        )}

        {/* Action Button */}
        {hasVideo && (
            <div className="mt-auto pt-2">
                {ytState === 'hidden' ? null : (
                    <a 
                        href={event.youtubeLink} 
                        target="_blank" 
                        rel="noreferrer"
                        className={`
                            flex items-center justify-center gap-2 w-full py-4 rounded-lg font-bold text-base md:text-lg transition-all shadow-sm
                            ${ytState === 'disabled' ? 'bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200' : ''}
                            ${ytState === 'live' ? 'bg-red-600 text-white hover:bg-red-700 animate-pulse shadow-md' : ''}
                            ${ytState === 'recording' ? 'bg-gradient-to-r from-gold to-yellow-500 text-maroon hover:shadow-md hover:scale-[1.01]' : ''}
                        `}
                        onClick={(e) => ytState === 'disabled' && e.preventDefault()}
                    >
                        {ytState === 'disabled' && (
                            <>
                                <Youtube size={22} /> Coming Soon
                            </>
                        )}
                        {ytState === 'live' && (
                            <>
                                <Play size={22} fill="currentColor" /> Watch LIVE Now
                            </>
                        )}
                        {ytState === 'recording' && (
                            <>
                                <Youtube size={22} /> Watch Recording
                            </>
                        )}
                    </a>
                )}
                {ytState === 'disabled' && (
                    <p className="text-xs text-center text-gray-500 mt-2 font-medium">
                        Link available 15 mins before session
                    </p>
                )}
            </div>
        )}
      </div>
    </div>
  );
};

export default EventCard;