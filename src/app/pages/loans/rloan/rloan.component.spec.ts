import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RloanComponent } from './rloan.component';

describe('RloanComponent', () => {
  let component: RloanComponent;
  let fixture: ComponentFixture<RloanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RloanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
