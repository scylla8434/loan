import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemployeeComponent } from './demployee.component';

describe('DemployeeComponent', () => {
  let component: DemployeeComponent;
  let fixture: ComponentFixture<DemployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemployeeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
