import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcustomerComponent } from './dcustomer.component';

describe('DcustomerComponent', () => {
  let component: DcustomerComponent;
  let fixture: ComponentFixture<DcustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DcustomerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
