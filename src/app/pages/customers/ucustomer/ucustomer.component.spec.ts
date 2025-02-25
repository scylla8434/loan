import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UcustomerComponent } from './ucustomer.component';

describe('UcustomerComponent', () => {
  let component: UcustomerComponent;
  let fixture: ComponentFixture<UcustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UcustomerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
