import { Component, Input, OnInit, ViewChild } from '@angular/core';

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
  @Input() progress: number = 0;

  @ViewChild('pctInd') pctInd: any;
  @ViewChild('percent') percent: any;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.setPercentage(this.progress);
  }

  setPercentage(percent: number): void {
    // percent for dashoffset
    console.log('this.percent: ', this.percent);
    this.percent.nativeElement.textContent = `${percent}%`;
    const p = (1 - percent / 100) * (2 * (22 / 7) * 40);

    this.pctInd.nativeElement.style = `stroke-dashoffset: ${p};`;
  }
}
