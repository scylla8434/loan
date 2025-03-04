import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElistComponent } from './elist.component';

describe('ElistComponent', () => {
  let component: ElistComponent;
  let fixture: ComponentFixture<ElistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
