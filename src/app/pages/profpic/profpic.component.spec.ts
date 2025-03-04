import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfpicComponent } from './profpic.component';

describe('ProfpicComponent', () => {
  let component: ProfpicComponent;
  let fixture: ComponentFixture<ProfpicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfpicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfpicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
