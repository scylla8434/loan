import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UloanComponent } from './uloan.component';

describe('UloanComponent', () => {
  let component: UloanComponent;
  let fixture: ComponentFixture<UloanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UloanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
