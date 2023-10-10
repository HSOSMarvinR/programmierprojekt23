import { TestBed } from '@angular/core/testing';

import { ApinewService } from './apinew.service';

describe('ApinewService', () => {
  let service: ApinewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApinewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
