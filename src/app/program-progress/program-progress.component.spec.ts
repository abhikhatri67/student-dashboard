import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramProgressComponent } from './program-progress.component';

describe('ProgramProgressComponent', () => {
  let component: ProgramProgressComponent;
  let fixture: ComponentFixture<ProgramProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramProgressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
