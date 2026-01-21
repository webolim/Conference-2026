// Removed imports to rely on globals
// import { SCHEDULE_DATA } from '../constants.ts';
// import { Day, Event } from '../types.ts';

const getCurrentISTTime = () => {
  const now = new Date();
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const istOffset = 5.5 * 60 * 60000; // IST is UTC + 5:30
  return new Date(utc + istOffset);
};

const getEventStatus = (event, dayDate, currentTime) => {
  const parseTime = (timeStr) => {
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
  
  if (currentTime < start) return 'upcoming';
  if (currentTime >= start && currentTime <= end) return 'live';
  return 'past';
};

const calculateCurrentDay = (currentTime) => {
  const currentDateStr = currentTime.toISOString().split('T')[0];
  
  const foundDay = window.SCHEDULE_DATA.days.find(d => d.date === currentDateStr);
  
  if (foundDay) return foundDay.dayNumber;
  
  // If before event, return 1
  if (currentTime < new Date(window.SCHEDULE_DATA.days[0].date)) return 1;
  
  // If after event, return last day
  if (currentTime > new Date(window.SCHEDULE_DATA.days[window.SCHEDULE_DATA.days.length - 1].date)) return 11;

  return 1;
};

const getYouTubeButtonState = (event, dayDate, currentTime) => {
    if (!event.youtubeLink) return 'hidden';

    const parseTime = (timeStr) => {
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

// Attach to window
window.getCurrentISTTime = getCurrentISTTime;
window.getEventStatus = getEventStatus;
window.calculateCurrentDay = calculateCurrentDay;
window.getYouTubeButtonState = getYouTubeButtonState;
