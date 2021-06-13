import { Injectable } from '@angular/core';

type Session = {
  date: string;
  month: string;
  day: string;
  name: string;
  course: string;
  startTime: string;
  endTime: string;
  active: boolean;
};

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor() {}

  sessions: Session[] = [
    {
      date: '09',
      month: 'APRIL',
      day: 'Tomorrow',
      name: 'Database and Information Systems',
      course: 'Master of Computer Science',
      startTime: '8:30am',
      endTime: '1:00pm',
      active: true,
    },
    {
      date: '10',
      month: 'APRIL',
      day: 'Wed',
      name: 'AI and Machine Learning',
      course: 'Master of Computer Science',
      startTime: '9:30am',
      endTime: '1:00pm',
      active: false,
    },
    {
      date: '10',
      month: 'APRIL',
      day: 'Wed',
      name: 'Definition & Ideation',
      course: 'Certificate UX/UI Design',
      startTime: '3:30pm',
      endTime: '7:00pm',
      active: false,
    },
  ];
}
