import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  navList = [
    { title: 'Dashboard', iconUrl: 'assets/icons/dashboard.svg' },
    { title: 'Materials', iconUrl: 'assets/icons/materials.svg' },
    { title: 'Calendar', iconUrl: 'assets/icons/calendar.svg' },
    { title: 'Transcripts', iconUrl: 'assets/icons/transcripts.svg' },
    { title: 'Grades', iconUrl: 'assets/icons/grades.svg' },
    { title: 'Attendance', iconUrl: 'assets/icons/attendence.svg' },
    { title: 'Settings', iconUrl: 'assets/icons/settings.svg' },
  ];

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
