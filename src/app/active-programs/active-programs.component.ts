import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-active-programs',
  templateUrl: './active-programs.component.html',
  styleUrls: ['./active-programs.component.scss'],
})
export class ActiveProgramsComponent implements OnInit {
  activePrograms = [
    {
      universityLogo: 'assets/programs/upstate.png',
      universityName: 'University of Upsate at Brookstore',
      course: 'Master of Computer Science',
      completeion: 70,
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
      completeion: 70,
      subjects: [
        { name: 'Overdue Assignment', mark: 0 },
        { name: 'Remaining Absenses', mark: 6 },
        { name: 'Academic Average', mark: '--' },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
