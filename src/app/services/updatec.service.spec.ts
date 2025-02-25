import { TestBed } from '@angular/core/testing';

import { UpdatecService } from './updatec.service';

describe('UpdatecService', () => {
  let service: UpdatecService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdatecService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
