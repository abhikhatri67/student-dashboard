import { Injectable } from '@angular/core';

type Program = {
  universityLogo: string;
  universityName: string;
  course: string;
  progress: number;
  subjects: {
    name: string;
    mark: string | number;
  }[];
};

@Injectable({
  providedIn: 'root',
})
export class ProgramsService {
  activePrograms: Program[] = [
    {
      universityLogo: 'assets/programs/upstate.png',
      universityName: 'University of Upsate at Brookstore',
      course: 'Master of Computer Science',
      progress: 45,
      subjects: [
        { name: 'Overdue Assignment', mark: 1 },
        { name: 'Remaining Absenses', mark: 5 },
        { name: 'Academic Average', mark: 'A-' },
      ],
    },
    {
      universityLogo: 'assets/programs/dursburg.png',
      universityName: 'Academy of Art and Technology at Dursburg',
      course: 'Certificate UX/UI Design',
      progress: 28,
      subjects: [
        { name: 'Overdue Assignment', mark: 0 },
        { name: 'Remaining Absenses', mark: 6 },
        { name: 'Academic Average', mark: '--' },
      ],
    },
  ];

  constructor() {}
}
