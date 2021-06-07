import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss'],
})
export class ProgramComponent implements OnInit {
  @Input() subjects: { name: string; mark: number | string }[] = [];
  @Input() universityName: string = '';
  @Input() universityLogo: string = '';
  @Input() course: string = '';

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
