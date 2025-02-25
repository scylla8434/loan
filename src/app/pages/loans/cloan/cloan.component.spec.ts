import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloanComponent } from './cloan.component';

describe('CloanComponent', () => {
  let component: CloanComponent;
  let fixture: ComponentFixture<CloanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
