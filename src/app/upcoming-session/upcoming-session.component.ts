import { Component, OnInit } from '@angular/core';
import { SessionService } from './session.service';

@Component({
  selector: 'app-upcoming-session',
  templateUrl: './upcoming-session.component.html',
  styleUrls: ['./upcoming-session.component.scss'],
})
export class UpcomingSessionComponent implements OnInit {
  sessions;

  constructor(private sessionService: SessionService) {
    this.sessions = this.sessionService.sessions;
  }

  ngOnInit(): void {}
}
