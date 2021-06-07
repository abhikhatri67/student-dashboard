import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss'],
})
export class ProgramComponent implements OnInit {
  subjects: { name: string; mark: number | string }[] = [
    { name: 'Overdue Assignment', mark: 1 },
    { name: 'Remaining Absenses', mark: 5 },
    { name: 'Academic Average', mark: 'A-' },
  ];

  constructor() {}

  ngOnInit(): void {}

  // const slider = document.querySelector('#slider');
  // const pct = document.querySelector('.pct');
  // const pctIndicator = document.querySelector('#pct-ind')
  // slider.oninput = () => {
  // 	pct.textContent = `${slider.value}%`

  // 	// percent for dashoffset
  // 	const p = ( 1 - slider.value / 100 ) * (2 * (22 / 7) * 40);
  // 	pctIndicator.style = `
  // 		stroke-dashoffset: ${p};
  // 	`
  // }
}
