import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcustomerComponent } from './ccustomer.component';

describe('CcustomerComponent', () => {
  let component: CcustomerComponent;
  let fixture: ComponentFixture<CcustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CcustomerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
