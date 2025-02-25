import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RscheduleComponent } from './rschedule.component';

describe('RscheduleComponent', () => {
  let component: RscheduleComponent;
  let fixture: ComponentFixture<RscheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RscheduleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RscheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
