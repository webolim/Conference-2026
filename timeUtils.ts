import { SCHEDULE_DATA } from '../constants';
import { Day, Event } from '../types';

// Helper to get current time in IST (Indian Standard Time)
// Since the browser might be in any timezone, we force convert to IST for display logic
export const getCurrentISTTime = (): Date => {
  const now = new Date();
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const istOffset = 5.5 * 60 * 60000; // IST is UTC + 5:30
  return new Date(utc + istOffset);
};

export const getEventStatus = (event: Event, dayDate: string, currentTime: Date): 'upcoming' | 'live' | 'past' => {
  // Parse event times relative to the day's date
  // dayDate format: YYYY-MM-DD
  // event time format: "HH:mm AM/PM"
  
  const parseTime = (timeStr: string): Date => {
    const [time, modifier] = timeStr.split(' ');
    let [hours, minutes] = time.split(':').map(Number);
    
    if (hours === 12) {
      hours = 0;
    }
    if (modifier === 'PM') {
      hours += 12;
    }
    
    const date = new Date(dayDate);
    date.setHours(hours, minutes, 0, 0);
    return date;
  };

  const start = parseTime(event.startTime);
  const end = parseTime(event.endTime);
  
  // Adjust for cases where an event might span past midnight (unlikely in this schedule but good practice)
  // For this app, we assume events are within the day.

  if (currentTime < start) return 'upcoming';
  if (currentTime >= start && currentTime <= end) return 'live';
  return 'past';
};

export const calculateCurrentDay = (currentTime: Date): number => {
  const currentDateStr = currentTime.toISOString().split('T')[0];
  
  const foundDay = SCHEDULE_DATA.days.find(d => d.date === currentDateStr);
  
  if (foundDay) return foundDay.dayNumber;
  
  // If before event, return 1
  if (currentTime < new Date(SCHEDULE_DATA.days[0].date)) return 1;
  
  // If after event, return last day
  if (currentTime > new Date(SCHEDULE_DATA.days[SCHEDULE_DATA.days.length - 1].date)) return 11;

  return 1;
};

export const getYouTubeButtonState = (event: Event, dayDate: string, currentTime: Date) => {
    if (!event.youtubeLink) return 'hidden';

    const parseTime = (timeStr: string): Date => {
        const [time, modifier] = timeStr.split(' ');
        let [hours, minutes] = time.split(':').map(Number);
        if (hours === 12) hours = 0;
        if (modifier === 'PM') hours += 12;
        const date = new Date(dayDate);
        date.setHours(hours, minutes, 0, 0);
        return date;
    };

    const start = parseTime(event.startTime);
    const end = parseTime(event.endTime);
    const fifteenMinsBefore = new Date(start.getTime() - 15 * 60000);

    if (currentTime < fifteenMinsBefore) return 'disabled';
    if (currentTime >= fifteenMinsBefore && currentTime <= end) return 'live'; // Covers 15 mins before + during
    return 'recording'; // After event
};
