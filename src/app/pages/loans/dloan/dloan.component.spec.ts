import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DloanComponent } from './dloan.component';

describe('DloanComponent', () => {
  let component: DloanComponent;
  let fixture: ComponentFixture<DloanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DloanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
