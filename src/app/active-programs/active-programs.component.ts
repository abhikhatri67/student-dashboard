import { Component, OnInit } from '@angular/core';
import { ProgramsService } from './programs.service';

@Component({
  selector: 'app-active-programs',
  templateUrl: './active-programs.component.html',
  styleUrls: ['./active-programs.component.scss'],
})
export class ActiveProgramsComponent implements OnInit {
  activePrograms;

  constructor(private programsService: ProgramsService) {
    this.activePrograms = this.programsService.activePrograms;
  }

  ngOnInit(): void {}
}
