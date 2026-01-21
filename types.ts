export interface Speaker {
  name: string;
  photo: string;
  bio?: string; // Optional because Satram speakers might not have full bios displayed inline
}

export interface Event {
  id: string;
  title: string;
  startTime: string; // "HH:mm AM/PM"
  endTime: string;   // "HH:mm AM/PM"
  venue: string;
  speakers: Speaker[];
  youtubeLink?: string;
  description?: string;
  isConference?: boolean; // To trigger full bio display
}

export type PhaseType = 'Pre-Conference' | 'Conference' | 'Post-Conference';

export interface Day {
  dayNumber: number;
  date: string; // "YYYY-MM-DD"
  displayDate: string; // "March 28"
  dayName: string; // "Saturday"
  theme: string;
  phase: PhaseType;
  events: Event[];
}

export interface ScheduleData {
  days: Day[];
}