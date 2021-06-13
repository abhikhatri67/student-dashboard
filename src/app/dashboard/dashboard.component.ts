import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          {
            id: 'active-programs',
            title: 'Active Programs',
            cols: 12,
            rows: 1,
          },
          { id: 'program', title: '', cols: 12, rows: 1 },
          {
            id: 'upcoming-sessions',
            title: 'Upcoming Sessions',
            cols: 12,
            rows: 1,
          },
        ];
      }

      return [
        { id: 'active-programs', title: 'Active Programs', cols: 12, rows: 1 },
        { id: 'program-progress', title: '', cols: 4, rows: 1 },
        {
          id: 'upcoming-sessions',
          title: 'Upcoming Sessions',
          cols: 8,
          rows: 1,
        },
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
