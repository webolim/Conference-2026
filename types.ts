/* 
  In a no-build Babel Standalone setup, interfaces are stripped out.
  This file serves as a reference for development but isn't loaded by the browser.
*/

export interface Speaker {
  name: string;
  photo: string;
  bio?: string;
}

export interface Event {
  id: string;
  title: string;
  startTime: string; 
  endTime: string;
  venue: string;
  speakers: Speaker[];
  youtubeLink?: string;
  description?: string;
  isConference?: boolean;
}

export type PhaseType = 'Pre-Conference' | 'Conference' | 'Post-Conference';

export interface Day {
  dayNumber: number;
  date: string;
  displayDate: string;
  dayName: string;
  theme: string;
  phase: PhaseType;
  events: Event[];
}

export interface ScheduleData {
  days: Day[];
}
