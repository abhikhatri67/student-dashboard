import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-active-programs',
  templateUrl: './active-programs.component.html',
  styleUrls: ['./active-programs.component.scss'],
})
export class ActiveProgramsComponent implements OnInit {
  activePrograms = [
    {
      universityLogo: 'assests/programs/upstate.svg',
      universityName: 'University of Upsate at Brookstore',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
