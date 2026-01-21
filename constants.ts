import { ScheduleData } from './types.ts';

export const ASSETS = {
  heroImage: 'https://raw.githubusercontent.com/webolim/Valmiki-Ramayana-Conference-2026/refs/heads/main/KalyanaRamar.gif',
  pillarLeft: 'https://raw.githubusercontent.com/webolim/Valmiki-Ramayana-Conference-2026/refs/heads/main/Pillar-left.gif',
  pillarRight: 'https://raw.githubusercontent.com/webolim/Valmiki-Ramayana-Conference-2026/refs/heads/main/Pillar-right.gif',
  logo: 'https://webolim.org/wp-content/uploads/2025/08/WEBOLIM_RGBLogo_20250521.png',
  placeholderSpeaker: 'https://picsum.photos/200/200',
};

export const SCHEDULE_DATA: ScheduleData = {
  days: [
    {
      dayNumber: 1,
      date: '2026-03-28',
      displayDate: 'March 28',
      dayName: 'Saturday',
      theme: 'Inauguration',
      phase: 'Pre-Conference',
      events: [
        { id: 'd1-e1', startTime: '4:30 PM', endTime: '6:30 PM', title: 'Abhishekham', venue: 'Kalyana Ramar Sannidhi', speakers: [], youtubeLink: 'https://youtu.be/Abhishekham1' },
        { id: 'd1-e2', startTime: '6:30 PM', endTime: '7:30 PM', title: 'Prasadam', venue: 'Premika Madhura Bhavanam', speakers: [] },
        { id: 'd1-e3', startTime: '7:30 PM', endTime: '8:30 PM', title: 'Inauguration', venue: 'Ramayana Shala', speakers: [], youtubeLink: 'https://youtu.be/inaguration' },
        { id: 'd1-e4', startTime: '8:30 PM', endTime: '9:00 PM', title: 'Dolotsavam', venue: 'Kalyana Ramar Sannidhi', speakers: [], youtubeLink: 'https://youtu.be/dolotsavam_d1' },
      ]
    },
    {
      dayNumber: 2,
      date: '2026-03-29',
      displayDate: 'March 29',
      dayName: 'Sunday',
      theme: 'Ayodhya Kandam',
      phase: 'Pre-Conference',
      events: [
        { id: 'd2-e0', startTime: '5:30 AM', endTime: '6:15 AM', title: 'Sandhyavandanam', venue: 'Venue', speakers: [] },
        { id: 'd2-e0b', startTime: '6:15 AM', endTime: '6:30 AM', title: 'Suprabhatam', venue: 'Ramayana Shala', speakers: [] },
        { id: 'd2-e0c', startTime: '6:30 AM', endTime: '8:00 AM', title: 'Parayanam', venue: 'Ramayana Shala', speakers: [] },
        { id: 'd2-e0d', startTime: '8:00 AM', endTime: '8:30 AM', title: 'Breakfast', venue: 'Premika Madhura Bhavanam', speakers: [] },
        { id: 'd2-e1', startTime: '8:30 AM', endTime: '9:30 AM', title: 'Pattabhishekha Prarambha', venue: 'Ramayana Shala', speakers: [{ name: 'Dr. Rangan', photo: ASSETS.placeholderSpeaker }], youtubeLink: 'https://youtu.be/rangan_d1' },
        { id: 'd2-e1b', startTime: '9:30 AM', endTime: '10:30 AM', title: 'Parayanam', venue: 'Ramayana Shala', speakers: [] },
        { id: 'd2-e2', startTime: '10:30 AM', endTime: '11:30 AM', title: 'Kausalya Mangalashasanam', venue: 'Ramayana Shala', speakers: [{ name: 'Kum. Subhankriya', photo: ASSETS.placeholderSpeaker }, { name: 'Kum. Daksha', photo: ASSETS.placeholderSpeaker }], youtubeLink: 'https://youtu.be/Subhankriya' },
        { id: 'd2-e2b', startTime: '11:30 AM', endTime: '12:00 PM', title: 'Poojai', venue: 'Kalyana Ramar Sannidhi', speakers: [] },
        { id: 'd2-e2c', startTime: '12:00 PM', endTime: '1:00 PM', title: 'Lunch', venue: 'Premika Madhura Bhavanam', speakers: [] },
        { id: 'd2-e2d', startTime: '1:00 PM', endTime: '3:00 PM', title: 'Parayanam', venue: 'Ramayana Shala', speakers: [] },
        { id: 'd2-e3', startTime: '3:00 PM', endTime: '4:00 PM', title: 'Pitruvakya Paripalanam', venue: 'Ramayana Shala', speakers: [{ name: 'Kum. Shrinidhi Narendran', photo: ASSETS.placeholderSpeaker }, { name: 'Kum. Niharika', photo: ASSETS.placeholderSpeaker }], youtubeLink: 'https://youtu.be/Shrinidhi' },
        { id: 'd2-e3b', startTime: '4:00 PM', endTime: '5:00 PM', title: 'Parayanam', venue: 'Ramayana Shala', speakers: [] },
        { id: 'd2-e4', startTime: '5:00 PM', endTime: '6:00 PM', title: 'Guha Sakhyam', venue: 'Ramayana Shala', speakers: [{ name: 'Shri Harish', photo: ASSETS.placeholderSpeaker }], youtubeLink: 'https://youtu.be/Harish' },
        { id: 'd2-e5', startTime: '6:00 PM', endTime: '6:30 PM', title: 'Sandhyavandanam', venue: 'Venue', speakers: [] },
        { id: 'd2-e6', startTime: '6:00 PM', endTime: '7:30 PM', title: 'Dinner', venue: 'Premika Madhura Bhavanam', speakers: [] },
        { id: 'd2-e7', startTime: '7:30 PM', endTime: '8:30 PM', title: 'Badhai', venue: 'Ramayana Shala', speakers: [], youtubeLink: 'https://youtu.be/Bahai' },
        { id: 'd2-e8', startTime: '8:30 PM', endTime: '9:00 PM', title: 'Dolotsavam', venue: 'Kalyana Ramar Sannidhi', speakers: [], youtubeLink: 'https://youtu.be/dolotsavam_d2' },
      ]
    },
    {
      dayNumber: 3,
      date: '2026-03-30',
      displayDate: 'March 30',
      dayName: 'Monday',
      theme: 'Ayodhya Kandam',
      phase: 'Pre-Conference',
      events: [
        { id: 'd3-e0', startTime: '5:30 AM', endTime: '6:15 AM', title: 'Sandhyavandanam', venue: 'Venue', speakers: [] },
        { id: 'd3-e0b', startTime: '6:15 AM', endTime: '6:30 AM', title: 'Suprabhatam', venue: 'Ramayana Shala', speakers: [] },
        { id: 'd3-e0c', startTime: '6:30 AM', endTime: '8:00 AM', title: 'Parayanam', venue: 'Ramayana Shala', speakers: [] },
        { id: 'd3-e0d', startTime: '8:00 AM', endTime: '8:30 AM', title: 'Breakfast', venue: 'Premika Madhura Bhavanam', speakers: [] },
        { id: 'd3-e1', startTime: '8:30 AM', endTime: '9:30 AM', title: 'Dasharatha Bhakti', venue: 'Ramayana Shala', speakers: [{ name: 'Dr. Rangan', photo: ASSETS.placeholderSpeaker }], youtubeLink: 'https://youtu.be/rangan_d3' },
        { id: 'd3-e1b', startTime: '9:30 AM', endTime: '10:30 AM', title: 'Parayanam', venue: 'Ramayana Shala', speakers: [] },
        { id: 'd3-e2', startTime: '10:30 AM', endTime: '11:30 AM', title: 'Bharatha Bhakti', venue: 'Ramayana Shala', speakers: [{ name: 'Shri Giridharan', photo: ASSETS.placeholderSpeaker }, { name: 'Kum. Amrita', photo: ASSETS.placeholderSpeaker }], youtubeLink: 'https://youtu.be/giri' },
        { id: 'd3-e2b', startTime: '11:30 AM', endTime: '12:00 PM', title: 'Poojai', venue: 'Kalyana Ramar Sannidhi', speakers: [] },
        { id: 'd3-e2c', startTime: '12:00 PM', endTime: '1:00 PM', title: 'Lunch', venue: 'Premika Madhura Bhavanam', speakers: [] },
        { id: 'd3-e2d', startTime: '1:00 PM', endTime: '3:00 PM', title: 'Parayanam', venue: 'Ramayana Shala', speakers: [] },
        { id: 'd3-e3', startTime: '3:00 PM', endTime: '4:00 PM', title: 'Chitrakuta', venue: 'Ramayana Shala', speakers: [{ name: 'Kum. Ananya A', photo: ASSETS.placeholderSpeaker }, { name: 'Kum. Ananya G', photo: ASSETS.placeholderSpeaker }], youtubeLink: 'https://youtu.be/ananya_a' },
        { id: 'd3-e3b', startTime: '4:00 PM', endTime: '5:00 PM', title: 'Parayanam', venue: 'Ramayana Shala', speakers: [] },
        { id: 'd3-e4', startTime: '5:00 PM', endTime: '6:00 PM', title: 'Paduka Pattabhishekha', venue: 'Ramayana Shala', speakers: [{ name: 'Shri Srikanth', photo: ASSETS.placeholderSpeaker }], youtubeLink: 'https://youtu.be/srikanth' },
        { id: 'd3-e5', startTime: '6:00 PM', endTime: '6:30 PM', title: 'Sandhyavandanam', venue: 'Venue', speakers: [] },
        { id: 'd3-e6', startTime: '6:00 PM', endTime: '7:30 PM', title: 'Dinner', venue: 'Premika Madhura Bhavanam', speakers: [] },
        { id: 'd3-e7', startTime: '7:30 PM', endTime: '8:30 PM', title: 'Sita Kalyanam', venue: 'Ramayana Shala', speakers: [], youtubeLink: 'https://youtu.be/sitakalyanam' },
        { id: 'd3-e8', startTime: '8:30 PM', endTime: '9:00 PM', title: 'Dolotsavam', venue: 'Kalyana Ramar Sannidhi', speakers: [], youtubeLink: 'https://youtu.be/dolotsavam_d3' },
      ]
    },
    {
      dayNumber: 4,
      date: '2026-03-31',
      displayDate: 'March 31',
      dayName: 'Tuesday',
      theme: 'Aranya Kandam',
      phase: 'Pre-Conference',
      events: [
        { id: 'd4-e0', startTime: '5:30 AM', endTime: '6:15 AM', title: 'Sandhyavandanam', venue: 'Venue', speakers: [] },
        { id: 'd4-e0b', startTime: '6:15 AM', endTime: '6:30 AM', title: 'Suprabhatam', venue: 'Ramayana Shala', speakers: [] },
        { id: 'd4-e0c', startTime: '6:30 AM', endTime: '8:00 AM', title: 'Parayanam', venue: 'Ramayana Shala', speakers: [] },
        { id: 'd4-e0d', startTime: '8:00 AM', endTime: '8:30 AM', title: 'Breakfast', venue: 'Premika Madhura Bhavanam', speakers: [] },
        { id: 'd4-e1', startTime: '8:30 AM', endTime: '9:30 AM', title: 'Agatya Ashrama', venue: 'Ramayana Shala', speakers: [{ name: 'Dr. Rangan', photo: ASSETS.placeholderSpeaker }], youtubeLink: 'https://youtu.be/rangan_d4' },
        { id: 'd4-e1b', startTime: '9:30 AM', endTime: '10:30 AM', title: 'Parayanam', venue: 'Ramayana Shala', speakers: [] },
        { id: 'd4-e2', startTime: '10:30 AM', endTime: '11:30 AM', title: 'Panchavati', venue: 'Ramayana Shala', speakers: [{ name: 'Shri. Madhavan', photo: ASSETS.placeholderSpeaker }, { name: 'Shri. Raghavan', photo: ASSETS.placeholderSpeaker }], youtubeLink: 'https://youtu.be/madhavan' },
        { id: 'd4-e2b', startTime: '11:30 AM', endTime: '12:00 PM', title: 'Poojai', venue: 'Kalyana Ramar Sannidhi', speakers: [] },
        { id: 'd4-e2c', startTime: '12:00 PM', endTime: '1:00 PM', title: 'Lunch', venue: 'Premika Madhura Bhavanam', speakers: [] },
        { id: 'd4-e2d', startTime: '1:00 PM', endTime: '3:00 PM', title: 'Parayanam', venue: 'Ramayana Shala', speakers: [] },
        { id: 'd4-e3', startTime: '3:00 PM', endTime: '4:00 PM', title: 'Sita Apaharanam', venue: 'Ramayana Shala', speakers: [{ name: 'Shri. Rishi', photo: ASSETS.placeholderSpeaker }, { name: 'Shri. Dharanidharan', photo: ASSETS.placeholderSpeaker }], youtubeLink: 'https://youtu.be/rishi' },
        { id: 'd4-e3b', startTime: '4:00 PM', endTime: '5:00 PM', title: 'Parayanam', venue: 'Ramayana Shala', speakers: [] },
        { id: 'd4-e4', startTime: '5:00 PM', endTime: '6:00 PM', title: 'Jatayu & Sabari Moksham', venue: 'Ramayana Shala', speakers: [{ name: 'Smt. Kalpana Harikrishnan', photo: ASSETS.placeholderSpeaker }], youtubeLink: 'https://youtu.be/kalpana' },
        { id: 'd4-e5', startTime: '6:00 PM', endTime: '6:30 PM', title: 'Sandhyavandanam', venue: 'Venue', speakers: [] },
        { id: 'd4-e6', startTime: '6:00 PM', endTime: '7:30 PM', title: 'Dinner', venue: 'Premika Madhura Bhavanam', speakers: [] },
        { id: 'd4-e7', startTime: '7:30 PM', endTime: '8:30 PM', title: 'Nikujotsavam Bharatanatyam', venue: 'Ramayana Shala', speakers: [{ name: 'Dr. Meghana Venkat', photo: ASSETS.placeholderSpeaker }], youtubeLink: 'https://youtu.be/bharathanatyam' },
        { id: 'd4-e8', startTime: '8:30 PM', endTime: '9:00 PM', title: 'Dolotsavam', venue: 'Kalyana Ramar Sannidhi', speakers: [], youtubeLink: 'https://youtu.be/dolotsavam_d4' },
      ]
    },
    {
      dayNumber: 5,
      date: '2026-04-01',
      displayDate: 'April 01',
      dayName: 'Wednesday',
      theme: 'Kishkindha Kandam',
      phase: 'Pre-Conference',
      events: [
        { id: 'd5-e0', startTime: '5:30 AM', endTime: '6:15 AM', title: 'Sandhyavandanam', venue: 'Venue', speakers: [] },
        { id: 'd5-e0b', startTime: '6:15 AM', endTime: '6:30 AM', title: 'Suprabhatam', venue: 'Ramayana Shala', speakers: [] },
        { id: 'd5-e0c', startTime: '6:30 AM', endTime: '8:00 AM', title: 'Parayanam', venue: 'Ramayana Shala', speakers: [] },
        { id: 'd5-e0d', startTime: '8:00 AM', endTime: '8:30 AM', title: 'Breakfast', venue: 'Premika Madhura Bhavanam', speakers: [] },
        { id: 'd5-e1', startTime: '8:30 AM', endTime: '9:30 AM', title: 'Sugriva Sakhyam', venue: 'Ramayana Shala', speakers: [{ name: 'Dr. Rangan', photo: ASSETS.placeholderSpeaker }], youtubeLink: 'https://youtu.be/rangan_d5' },
        { id: 'd5-e1b', startTime: '9:30 AM', endTime: '10:30 AM', title: 'Parayanam', venue: 'Ramayana Shala', speakers: [] },
        { id: 'd5-e2', startTime: '10:30 AM', endTime: '11:30 AM', title: 'Vali Moksha', venue: 'Ramayana Shala', speakers: [{ name: 'Shri. Sanjay', photo: ASSETS.placeholderSpeaker }, { name: 'Kum. Mythili', photo: ASSETS.placeholderSpeaker }], youtubeLink: 'https://youtu.be/sanjay' },
        { id: 'd5-e2b', startTime: '11:30 AM', endTime: '12:00 PM', title: 'Poojai', venue: 'Kalyana Ramar Sannidhi', speakers: [] },
        { id: 'd5-e2c', startTime: '12:00 PM', endTime: '1:00 PM', title: 'Lunch', venue: 'Premika Madhura Bhavanam', speakers: [] },
        { id: 'd5-e2d', startTime: '1:00 PM', endTime: '3:00 PM', title: 'Parayanam', venue: 'Ramayana Shala', speakers: [] },
        { id: 'd5-e3', startTime: '3:00 PM', endTime: '4:00 PM', title: 'Sugriva Pattabhishekham', venue: 'Ramayana Shala', speakers: [{ name: 'Kum. Prachi', photo: ASSETS.placeholderSpeaker }, { name: 'Kum. Vishakha', photo: ASSETS.placeholderSpeaker }], youtubeLink: 'https://youtu.be/prachi' },
        { id: 'd5-e3b', startTime: '4:00 PM', endTime: '5:00 PM', title: 'Parayanam', venue: 'Ramayana Shala', speakers: [] },
        { id: 'd5-e4', startTime: '5:00 PM', endTime: '6:00 PM', title: 'Sita Anveshanam', venue: 'Ramayana Shala', speakers: [{ name: 'Kum. Akshaya', photo: ASSETS.placeholderSpeaker }, { name: 'Kum. Kamakshi', photo: ASSETS.placeholderSpeaker }], youtubeLink: 'https://youtu.be/akshaya' },
        { id: 'd5-e5', startTime: '6:00 PM', endTime: '6:30 PM', title: 'Sandhyavandanam', venue: 'Venue', speakers: [] },
        { id: 'd5-e6', startTime: '6:00 PM', endTime: '7:30 PM', title: 'Dinner', venue: 'Premika Madhura Bhavanam', speakers: [] },
        { id: 'd5-e7', startTime: '7:30 PM', endTime: '8:30 PM', title: 'Hanumantha Vahanam', venue: 'Ramayana Shala', speakers: [], youtubeLink: 'https://youtu.be/HanumanthaVahanam' },
        { id: 'd5-e8', startTime: '8:30 PM', endTime: '9:00 PM', title: 'Dolotsavam', venue: 'Kalyana Ramar Sannidhi', speakers: [], youtubeLink: 'https://youtu.be/dolotsavam_d5' },
      ]
    },
    {
      dayNumber: 6,
      date: '2026-04-02',
      displayDate: 'April 02',
      dayName: 'Thursday',
      theme: 'Sundara Kandam',
      phase: 'Pre-Conference',
      events: [
        { id: 'd6-e0', startTime: '5:30 AM', endTime: '6:15 AM', title: 'Sandhyavandanam', venue: 'Venue', speakers: [] },
        { id: 'd6-e0b', startTime: '6:15 AM', endTime: '6:30 AM', title: 'Suprabhatam', venue: 'Ramayana Shala', speakers: [] },
        { id: 'd6-e0c', startTime: '6:30 AM', endTime: '8:00 AM', title: 'Parayanam', venue: 'Ramayana Shala', speakers: [] },
        { id: 'd6-e0d', startTime: '8:00 AM', endTime: '8:30 AM', title: 'Breakfast', venue: 'Premika Madhura Bhavanam', speakers: [] },
        { id: 'd6-e1', startTime: '8:30 AM', endTime: '9:30 AM', title: 'Hanumath Prabhava', venue: 'Ramayana Shala', speakers: [{ name: 'Dr. Rangan', photo: ASSETS.placeholderSpeaker }], youtubeLink: 'https://youtu.be/rangan_d6' },
        { id: 'd6-e1b', startTime: '9:30 AM', endTime: '10:30 AM', title: 'Parayanam', venue: 'Ramayana Shala', speakers: [] },
        { id: 'd6-e2', startTime: '10:30 AM', endTime: '11:30 AM', title: 'Trijata Swapnam', venue: 'Ramayana Shala', speakers: [{ name: 'Kum. Megha', photo: ASSETS.placeholderSpeaker }, { name: 'Kum. Pushpa', photo: ASSETS.placeholderSpeaker }], youtubeLink: 'https://youtu.be/megha' },
        { id: 'd6-e2b', startTime: '11:30 AM', endTime: '12:00 PM', title: 'Poojai', venue: 'Kalyana Ramar Sannidhi', speakers: [] },
        { id: 'd6-e2c', startTime: '12:00 PM', endTime: '1:00 PM', title: 'Lunch', venue: 'Premika Madhura Bhavanam', speakers: [] },
        { id: 'd6-e2d', startTime: '1:00 PM', endTime: '3:00 PM', title: 'Parayanam', venue: 'Ramayana Shala', speakers: [] },
        { id: 'd6-e3', startTime: '3:00 PM', endTime: '4:00 PM', title: 'Anguliya Pradanam', venue: 'Ramayana Shala', speakers: [{ name: 'Kum. Vaidehi Sridhar', photo: ASSETS.placeholderSpeaker }, { name: 'Kum. Ranganayaki', photo: ASSETS.placeholderSpeaker }], youtubeLink: 'https://youtu.be/dvaidehi' },
        { id: 'd6-e3b', startTime: '4:00 PM', endTime: '5:00 PM', title: 'Parayanam', venue: 'Ramayana Shala', speakers: [] },
        { id: 'd6-e4', startTime: '5:00 PM', endTime: '6:00 PM', title: 'Choodamani Pradanam', venue: 'Ramayana Shala', speakers: [{ name: 'Smt. Drushya Rangan', photo: ASSETS.placeholderSpeaker }], youtubeLink: 'https://youtu.be/drushya' },
        { id: 'd6-e5', startTime: '6:00 PM', endTime: '6:30 PM', title: 'Sandhyavandanam', venue: 'Venue', speakers: [] },
        { id: 'd6-e6', startTime: '6:00 PM', endTime: '7:30 PM', title: 'Dinner', venue: 'Premika Madhura Bhavanam', speakers: [] },
        { id: 'd6-e7', startTime: '7:30 PM', endTime: '8:30 PM', title: 'Sundarakandam Utsavam (Yana Vahanam)', venue: 'Ramayana Shala', speakers: [], youtubeLink: 'https://youtu.be/SudarakandamUtsavam' },
        { id: 'd6-e8', startTime: '8:30 PM', endTime: '9:00 PM', title: 'Dolotsavam', venue: 'Kalyana Ramar Sannidhi', speakers: [], youtubeLink: 'https://youtu.be/dolotsavam_d6' },
      ]
    },
    {
      dayNumber: 7,
      date: '2026-04-03',
      displayDate: 'April 03',
      dayName: 'Friday',
      theme: 'Yuddha Kandam',
      phase: 'Pre-Conference',
      events: [
        { id: 'd7-e0', startTime: '5:30 AM', endTime: '6:15 AM', title: 'Sandhyavandanam', venue: 'Venue', speakers: [] },
        { id: 'd7-e0b', startTime: '6:15 AM', endTime: '6:30 AM', title: 'Suprabhatam', venue: 'Ramayana Shala', speakers: [] },
        { id: 'd7-e0c', startTime: '6:30 AM', endTime: '8:30 AM', title: 'Parayanam', venue: 'Ramayana Shala', speakers: [] },
        { id: 'd7-e0d', startTime: '8:00 AM', endTime: '8:30 AM', title: 'Breakfast', venue: 'Premika Madhura Bhavanam', speakers: [] },
        { id: 'd7-e1', startTime: '8:30 AM', endTime: '9:30 AM', title: 'Vibheeshana Sharanagati', venue: 'Ramayana Shala', speakers: [{ name: 'Dr. Rangan', photo: ASSETS.placeholderSpeaker }], youtubeLink: 'https://youtu.be/rangan_d7' },
        { id: 'd7-e1b', startTime: '9:30 AM', endTime: '10:30 AM', title: 'Parayanam', venue: 'Ramayana Shala', speakers: [] },
        { id: 'd7-e2', startTime: '10:30 AM', endTime: '11:30 AM', title: 'Abhayapradhanam', venue: 'Ramayana Shala', speakers: [{ name: 'Kum. Soumya', photo: ASSETS.placeholderSpeaker }, { name: 'Shri. Ramanan', photo: ASSETS.placeholderSpeaker }], youtubeLink: 'https://youtu.be/soumya' },
        { id: 'd7-e2b', startTime: '11:30 AM', endTime: '12:00 PM', title: 'Poojai', venue: 'Kalyana Ramar Sannidhi', speakers: [] },
        { id: 'd7-e2c', startTime: '12:00 PM', endTime: '1:00 PM', title: 'Lunch', venue: 'Premika Madhura Bhavanam', speakers: [] },
        { id: 'd7-e2d', startTime: '1:00 PM', endTime: '3:00 PM', title: 'Parayanam', venue: 'Ramayana Shala', speakers: [] },
        { id: 'd7-e3', startTime: '3:00 PM', endTime: '4:00 PM', title: 'Sethu Bandhanam', venue: 'Ramayana Shala', speakers: [{ name: 'Kum. Sai', photo: ASSETS.placeholderSpeaker }, { name: 'Shri. Balasimhan', photo: ASSETS.placeholderSpeaker }], youtubeLink: 'https://youtu.be/sai' },
        { id: 'd7-e3b', startTime: '4:00 PM', endTime: '5:00 PM', title: 'Parayanam', venue: 'Ramayana Shala', speakers: [] },
        { id: 'd7-e4', startTime: '5:00 PM', endTime: '6:00 PM', title: 'Ravana Prathama Yudhham', venue: 'Ramayana Shala', speakers: [{ name: 'Shri. Amudan', photo: ASSETS.placeholderSpeaker }, { name: 'Shri. Srinivasan', photo: ASSETS.placeholderSpeaker }], youtubeLink: 'https://youtu.be/damudan' },
        { id: 'd7-e5', startTime: '6:00 PM', endTime: '6:30 PM', title: 'Sandhyavandanam', venue: 'Venue', speakers: [] },
        { id: 'd7-e6', startTime: '6:00 PM', endTime: '7:30 PM', title: 'Dinner', venue: 'Premika Madhura Bhavanam', speakers: [] },
        { id: 'd7-e7', startTime: '7:30 PM', endTime: '8:30 PM', title: 'Vibheeshana Sharanagati Utsavam', venue: 'Ramayana Shala', speakers: [], youtubeLink: 'https://youtu.be/vibheeshanaSharanagatiUtsavam' },
        { id: 'd7-e8', startTime: '8:30 PM', endTime: '9:00 PM', title: 'Dolotsavam', venue: 'Kalyana Ramar Sannidhi', speakers: [], youtubeLink: 'https://youtu.be/dolotsavam_d7' },
      ]
    },
    {
      dayNumber: 8,
      date: '2026-04-04',
      displayDate: 'April 04',
      dayName: 'Saturday',
      theme: 'Conference Day 1',
      phase: 'Conference',
      events: [
        { id: 'd8-e0', startTime: '5:30 AM', endTime: '6:15 AM', title: 'Sandhyavandanam', venue: 'Venue', speakers: [] },
        { id: 'd8-e0b', startTime: '6:15 AM', endTime: '6:30 AM', title: 'Suprabhatam', venue: 'Ramayana Shala', speakers: [] },
        { id: 'd8-e0c', startTime: '6:30 AM', endTime: '7:00 AM', title: 'Meditation', venue: 'Venue', speakers: [] },
        { 
          id: 'd8-e1', 
          startTime: '7:00 AM', 
          endTime: '8:00 AM', 
          title: 'Critical Edition of Valmiki Ramayana (Part 1)', 
          venue: 'Ramayana Shala', 
          isConference: true,
          speakers: [{ name: 'Dr. Rangan', photo: ASSETS.placeholderSpeaker, bio: 'Dr. Rangan (To be updated shortly)' }],
          youtubeLink: 'https://youtu.be/Rangan_c1'
        },
        { id: 'd8-e1b', startTime: '8:00 AM', endTime: '9:00 AM', title: 'Breakfast', venue: 'Premika Madhura Bhavanam', speakers: [] },
        { 
          id: 'd8-e2', 
          startTime: '9:00 AM', 
          endTime: '10:00 AM', 
          title: "Bori's Critical Edition of Valmiki Ramayana", 
          venue: 'Ramayana Shala', 
          isConference: true,
          speakers: [{ 
            name: 'Prof. Dr. Siddharth Y. Wakankar', 
            photo: ASSETS.placeholderSpeaker, 
            bio: 'Dr Sidhartha Wakankar, an eminent scholar of Sanskrit specialising in manuscriptology and palaeography, authored several books and guided many in their post-doctoral work, an expert in games in Sanskrit literature, recipient of Ramakrishna Sanskrit Award from the Canadian World Education Foundation.' 
          }],
          youtubeLink: 'https://youtu.be/Wakankar'
        },
        {
          id: 'd8-e3',
          startTime: '10:00 AM',
          endTime: '11:00 AM',
          title: 'Different Editions of Valmiki Ramayana',
          venue: 'Ramayana Shala',
          isConference: true,
          speakers: [{
            name: 'Dr. Shakuntala Gawde',
            photo: ASSETS.placeholderSpeaker,
            bio: "Dr Shakuntala Gawde, an Associate Professor and former Head of the Department of Sanskrit at the University of Mumbai, an accomplished academician, researcher, and educator, a recipient of multiple coveted awards like Academisthan Best Teacher of the year award in 2021, author of several masterpieces like 'Narrative Analysis of Bhagavata Purana'."
          }],
          youtubeLink: 'https://youtu.be/Gawde'
        },
        { id: 'd8-e3b', startTime: '11:00 AM', endTime: '11:30 AM', title: 'Madyanikam', venue: 'Venue', speakers: [] },
        { id: 'd8-e3c', startTime: '11:30 AM', endTime: '12:00 PM', title: 'Poojai', venue: 'Kalyana Ramar Sannidhi', speakers: [] },
        { id: 'd8-e3d', startTime: '12:00 PM', endTime: '1:30 PM', title: 'Lunch', venue: 'Premika Madhura Bhavanam', speakers: [] },
        {
          id: 'd8-e4',
          startTime: '1:30 PM',
          endTime: '2:30 PM',
          title: "Sri Krishnasuri's Commentary",
          venue: 'Ramayana Shala',
          isConference: true,
          speakers: [{
            name: 'Smt. Krishnakrupa',
            photo: ASSETS.placeholderSpeaker,
            bio: "R.Krishna Krupa, B.Sc (CS) & M.A; M.phil. (Vaishnavam) & Diploma in Sanskrit & Manuscriptology, performer of Vishnu Temple Uthsavam's Commentary Works in dd-Tamil, Spiritual discouser in Temples, Sabhas & TV channels like dd-Podhigai, Jaya Plus & Thanthi Tv. Author of books like 'Swami Periyavacchan Pillai's Manikka Malai' (a textbook in the Vaishnavism department of Alagappa University) & Awarded as Kavi kurisil (by Thanjavur - Tamil University) & Vaishnava Ratna."
          }],
          youtubeLink: 'https://youtu.be/krishnakrupa'
        },
        {
          id: 'd8-e5',
          startTime: '2:30 PM',
          endTime: '3:30 PM',
          title: "Sri Govindaraja's Commentary",
          venue: 'Ramayana Shala',
          isConference: true,
          speakers: [{
            name: 'Smt. Prabha Senesh',
            photo: ASSETS.placeholderSpeaker,
            bio: "Smt. Prabha Senesh, the disciple and daughter in law of Sri. U.Ve. Dr. Karunakaracharya Swami (recent recipient of President award for Sanskrit), a deep scholar of Divyaprabandham and Desika Stotrams and other Srivaishnavite literature, a gold medalist in biotechnology from the University of Mumbai, Co-ordinator of Sampradaya Manjari e Pathashala of GSPK group & editor of an online e Magazine \"Sadhvishaya Vani\" released by SPVST Sabha, Mumbai."
          }],
          youtubeLink: 'https://youtu.be/Senesh'
        },
        {
          id: 'd8-e6',
          startTime: '3:30 PM',
          endTime: '4:30 PM',
          title: "Sri Tilaka's Commentary",
          venue: 'Ramayana Shala',
          isConference: true,
          speakers: [{
            name: 'Shri. Ashruth Suryanarayanan',
            photo: ASSETS.placeholderSpeaker,
            bio: 'Shri. Ashruth Suryanarayanan (To be updated shortly)'
          }],
          youtubeLink: 'https://youtu.be/ashruth'
        },
        { id: 'd8-e6b', startTime: '4:30 PM', endTime: '5:00 PM', title: 'Tea Break', venue: 'Venue', speakers: [] },
        {
          id: 'd8-e7',
          startTime: '5:00 PM',
          endTime: '6:00 PM',
          title: "Sri Shivashaya's Commentary",
          venue: 'Ramayana Shala',
          isConference: true,
          speakers: [{
            name: 'Shri. Vishal Pandey',
            photo: ASSETS.placeholderSpeaker,
            bio: 'Shri. Vishal Pandey (To be updated shortly)'
          }],
          youtubeLink: 'https://youtu.be/vishal'
        },
        { id: 'd8-e7b', startTime: '6:00 PM', endTime: '6:30 PM', title: 'Sandhyavandanam', venue: 'Venue', speakers: [] },
        { id: 'd8-e7c', startTime: '6:00 PM', endTime: '7:30 PM', title: 'Dinner', venue: 'Premika Madhura Bhavanam', speakers: [] },
        { id: 'd8-e8', startTime: '7:30 PM', endTime: '8:30 PM', title: 'Theppam Utsavam', venue: "Vijayji's Backyard", speakers: [], youtubeLink: 'https://youtu.be/theppamUtsavam' },
        { id: 'd8-e9', startTime: '8:30 PM', endTime: '9:00 PM', title: 'Dolotsavam', venue: 'Kalyana Ramar Sannidhi', speakers: [], youtubeLink: 'https://youtu.be/dolotsavam_d8' },
      ]
    },
    {
      dayNumber: 9,
      date: '2026-04-05',
      displayDate: 'April 05',
      dayName: 'Sunday',
      theme: 'Conference Day 2',
      phase: 'Conference',
      events: [
        { id: 'd9-e0', startTime: '5:30 AM', endTime: '6:15 AM', title: 'Sandhyavandanam', venue: 'Venue', speakers: [] },
        { id: 'd9-e0b', startTime: '6:15 AM', endTime: '6:30 AM', title: 'Suprabhatam', venue: 'Ramayana Shala', speakers: [] },
        { id: 'd9-e0c', startTime: '6:30 AM', endTime: '7:00 AM', title: 'Meditation', venue: 'Venue', speakers: [] },
        {
          id: 'd9-e1',
          startTime: '7:00 AM',
          endTime: '8:00 AM',
          title: 'Critical Edition of Valmiki Ramayana (Part 2)',
          venue: 'Ramayana Shala',
          isConference: true,
          speakers: [{
             name: 'Dr. Rangan',
             photo: ASSETS.placeholderSpeaker,
             bio: 'Dr. Rangan (To be updated shortly)'
          }],
          youtubeLink: 'https://youtu.be/rangan_c2'
        },
        { id: 'd9-e1b', startTime: '8:00 AM', endTime: '9:00 AM', title: 'Breakfast', venue: 'Premika Madhura Bhavanam', speakers: [] },
        {
          id: 'd9-e2',
          startTime: '9:00 AM',
          endTime: '10:00 AM',
          title: 'Western Recensions of Valmiki Ramayana',
          venue: 'Ramayana Shala',
          isConference: true,
          speakers: [{
             name: 'Dr. Nilesh Joshi',
             photo: ASSETS.placeholderSpeaker,
             bio: 'Dr Nilesh Joshi, senior Linguist at IIT Bombay\'s Centre for Indian Language Technology (CFILT), a researcher with a rich expertise in Sanskrit grammar, Vedic grammar, and the literature of Ayurveda, holder of multiple patents, has published over 35 research papers in global publications and authored more than 40 books.'
          }],
          youtubeLink: 'https://youtu.be/nilesh'
        },
        {
          id: 'd9-e3',
          startTime: '10:00 AM',
          endTime: '11:00 AM',
          title: 'Goudiya Recensions of Valmiki Ramayana',
          venue: 'Ramayana Shala',
          isConference: true,
          speakers: [{
             name: 'Smt. Gayatri Narendran',
             photo: ASSETS.placeholderSpeaker,
             bio: 'Smt. Gayatri Narendran (To be updated shortly)'
          }],
          youtubeLink: 'https://youtu.be/gayatri'
        },
        { id: 'd9-e3b', startTime: '11:00 AM', endTime: '11:30 AM', title: 'Madyanikam', venue: 'Venue', speakers: [] },
        { id: 'd9-e3c', startTime: '11:30 AM', endTime: '12:00 PM', title: 'Poojai', venue: 'Kalyana Ramar Sannidhi', speakers: [] },
        { id: 'd9-e3d', startTime: '12:00 PM', endTime: '1:30 PM', title: 'Lunch', venue: 'Premika Madhura Bhavanam', speakers: [] },
        {
          id: 'd9-e4',
          startTime: '1:30 PM',
          endTime: '2:30 PM',
          title: "Sri Trayambakaraya's Commentary",
          venue: 'Ramayana Shala',
          isConference: true,
          speakers: [{
             name: 'Shri. Santhanaraman',
             photo: ASSETS.placeholderSpeaker,
             bio: 'Shri. Santhanaraman (To be updated shortly)'
          }],
          youtubeLink: 'https://youtu.be/santanaraman'
        },
        {
          id: 'd9-e5',
          startTime: '2:30 PM',
          endTime: '3:30 PM',
          title: "Sri Maheshwara Tirtha's Commentary",
          venue: 'Ramayana Shala',
          isConference: true,
          speakers: [{
             name: 'Shri. Madhavan',
             photo: ASSETS.placeholderSpeaker,
             bio: 'Vedamurthi K. Madhava Ghanapatigal, a Gold Medalist in Rig Veda Ghanapata, learnt Vedanta & Bhagavatam from Mahatma Shri Shri Krishnapremi Swamigal being his ardent disciple, Rig Veda-Shastra-faculty in Chennai\'s Rig Veda Patashala and an exponent discouser of Bhagavatam and Ramayanam.'
          }],
          youtubeLink: 'https://youtu.be/madhavan'
        },
        {
          id: 'd9-e6',
          startTime: '3:30 PM',
          endTime: '4:30 PM',
          title: "Sri Satyadharma Tirtha's Commentary",
          venue: 'Ramayana Shala',
          isConference: true,
          speakers: [{
             name: 'Vidwan Gauranga',
             photo: ASSETS.placeholderSpeaker,
             bio: 'Vidvan Gauranga Das received diksha from Sri Jayapataka Swami, studied the scriptures like Bhagavad-gita and Srimad-Bhagavatam with the commentaries of the Gaudiya Vaishnava parampara, trained in the philosophy and orthopraxis of Srimad-Bhagavatam by Sri Gopiparanadhana dasa, a disciple of Shrila Prabhupada. His translation of Sri Valmiki Ramayana (Rupa Raghunatha Vani Publications) is extensive in 15 vols, with explanations based on the commentaries of the great souls like Shri Satya tirtha & Shri Govindaraja. He is working in Mahabharata and the biography of Shri Chaitanya Mahaprabhu.'
          }],
          youtubeLink: 'https://youtu.be/gauranga'
        },
        { id: 'd9-e6b', startTime: '4:30 PM', endTime: '5:00 PM', title: 'Tea Break', venue: 'Venue', speakers: [] },
        {
          id: 'd9-e7',
          startTime: '5:00 PM',
          endTime: '6:00 PM',
          title: "TBA (External Speaker)",
          venue: 'Ramayana Shala',
          isConference: true,
          speakers: [{
             name: 'TBA',
             photo: ASSETS.placeholderSpeaker,
             bio: '(To be updated shortly)'
          }],
          youtubeLink: 'https://youtu.be/speaker'
        },
        { id: 'd9-e7b', startTime: '6:00 PM', endTime: '6:30 PM', title: 'Sandhyavandanam', venue: 'Venue', speakers: [] },
        { id: 'd9-e7c', startTime: '6:00 PM', endTime: '7:30 PM', title: 'Dinner', venue: 'Premika Madhura Bhavanam', speakers: [] },
        { id: 'd9-e8', startTime: '7:30 PM', endTime: '8:30 PM', title: 'Annual Day', venue: 'Ramayana Shala', speakers: [], youtubeLink: 'https://youtu.be/annualday' },
        { id: 'd9-e9', startTime: '8:30 PM', endTime: '9:00 PM', title: 'Dolotsavam', venue: 'Kalyana Ramar Sannidhi', speakers: [], youtubeLink: 'https://youtu.be/dolotsavam_d9' },
      ]
    },
    {
      dayNumber: 10,
      date: '2026-04-06',
      displayDate: 'April 06',
      dayName: 'Monday',
      theme: 'Yuddha Kandam',
      phase: 'Post-Conference',
      events: [
        { id: 'd10-e0', startTime: '5:30 AM', endTime: '6:15 AM', title: 'Sandhyavandanam', venue: 'Venue', speakers: [] },
        { id: 'd10-e0b', startTime: '6:15 AM', endTime: '6:30 AM', title: 'Suprabhatam', venue: 'Ramayana Shala', speakers: [] },
        { id: 'd10-e0c', startTime: '6:30 AM', endTime: '8:00 AM', title: 'Parayanam', venue: 'Ramayana Shala', speakers: [] },
        { id: 'd10-e0d', startTime: '8:00 AM', endTime: '8:30 AM', title: 'Breakfast', venue: 'Premika Madhura Bhavanam', speakers: [] },
        { id: 'd10-e1', startTime: '8:30 AM', endTime: '9:30 AM', title: 'Kumbhakarna Vadham', venue: 'Ramayana Shala', speakers: [{ name: 'Dr. Rangan', photo: ASSETS.placeholderSpeaker }], youtubeLink: 'https://youtu.be/rangan_d10' },
        { id: 'd10-e1b', startTime: '9:30 AM', endTime: '10:30 AM', title: 'Parayanam', venue: 'Ramayana Shala', speakers: [] },
        { id: 'd10-e2', startTime: '10:30 AM', endTime: '11:30 AM', title: 'Ravana Vadhyam', venue: 'Ramayana Shala', speakers: [{ name: 'Shri. Nandakumar', photo: ASSETS.placeholderSpeaker }, { name: 'Shri. Nandalal', photo: ASSETS.placeholderSpeaker }], youtubeLink: 'https://youtu.be/nandakumar' },
        { id: 'd10-e2b', startTime: '11:30 AM', endTime: '12:00 PM', title: 'Poojai', venue: 'Kalyana Ramar Sannidhi', speakers: [] },
        { id: 'd10-e2c', startTime: '12:00 PM', endTime: '1:00 PM', title: 'Lunch', venue: 'Premika Madhura Bhavanam', speakers: [] },
        { id: 'd10-e2d', startTime: '1:00 PM', endTime: '3:00 PM', title: 'Parayanam', venue: 'Ramayana Shala', speakers: [] },
        { id: 'd10-e3', startTime: '3:00 PM', endTime: '4:00 PM', title: 'Agni Pravesha', venue: 'Ramayana Shala', speakers: [{ name: 'Shree Vaidehi', photo: ASSETS.placeholderSpeaker }, { name: 'Shri. Sethuraman', photo: ASSETS.placeholderSpeaker }], youtubeLink: 'https://youtu.be/champaka' },
        { id: 'd10-e3b', startTime: '4:00 PM', endTime: '5:00 PM', title: 'Parayanam', venue: 'Ramayana Shala', speakers: [] },
        { id: 'd10-e4', startTime: '5:00 PM', endTime: '6:00 PM', title: 'Ayodhya Pravesha', venue: 'Ramayana Shala', speakers: [{ name: 'Sri Shyam Sundar', photo: ASSETS.placeholderSpeaker }], youtubeLink: 'https://youtu.be/shyamji' },
        { id: 'd10-e5', startTime: '6:00 PM', endTime: '6:30 PM', title: 'Sandhyavandanam', venue: 'Venue', speakers: [] },
        { id: 'd10-e6', startTime: '6:00 PM', endTime: '7:30 PM', title: 'Dinner', venue: 'Premika Madhura Bhavanam', speakers: [] },
        { id: 'd10-e7', startTime: '7:30 PM', endTime: '8:30 PM', title: 'Pushpaka Vimanam', venue: 'Ramayana Shala', speakers: [], youtubeLink: 'https://youtu.be/pushpakavimanam' },
        { id: 'd10-e8', startTime: '8:30 PM', endTime: '9:00 PM', title: 'Dolotsavam', venue: 'Kalyana Ramar Sannidhi', speakers: [], youtubeLink: 'https://youtu.be/dolotsavam_d10' },
      ]
    },
    {
      dayNumber: 11,
      date: '2026-04-07',
      displayDate: 'April 07',
      dayName: 'Tuesday',
      theme: 'Valedictory',
      phase: 'Post-Conference',
      events: [
        { id: 'd11-e0', startTime: '5:30 AM', endTime: '6:15 AM', title: 'Sandhyavandanam', venue: 'Venue', speakers: [] },
        { id: 'd11-e0b', startTime: '6:15 AM', endTime: '6:30 AM', title: 'Suprabhatam', venue: 'Ramayana Shala', speakers: [] },
        { id: 'd11-e1', startTime: '6:30 AM', endTime: '8:00 AM', title: 'Abhishekham', venue: 'Ramayana Shala', speakers: [], youtubeLink: 'https://youtu.be/abhishekham' },
        { id: 'd11-e2', startTime: '8:00 AM', endTime: '8:30 AM', title: 'Breakfast', venue: 'Premika Madhura Bhavanam', speakers: [] },
        { id: 'd11-e3', startTime: '8:30 AM', endTime: '10:00 AM', title: 'Ashtavadhanam, Sadas', venue: 'Ramayana Shala', speakers: [] },
        { id: 'd11-e4', startTime: '10:00 AM', endTime: '12:00 PM', title: 'Purappadu with Nadaswaram', venue: 'Ramayana Shala', speakers: [], youtubeLink: 'https://youtu.be/purappadu' },
        { id: 'd11-e5', startTime: '12:00 PM', endTime: '1:00 PM', title: 'Lunch', venue: 'Premika Madhura Bhavanam', speakers: [] },
      ]
    }
  ]
};

export const EVENT_START_DATE = new Date('2026-03-28T16:30:00+05:30');
export const EVENT_END_DATE = new Date('2026-04-07T14:00:00+05:30');
