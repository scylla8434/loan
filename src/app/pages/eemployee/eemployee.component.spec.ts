import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EemployeeComponent } from './eemployee.component';

describe('EemployeeComponent', () => {
  let component: EemployeeComponent;
  let fixture: ComponentFixture<EemployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EemployeeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
