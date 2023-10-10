import { TestBed } from '@angular/core/testing';

import { LocalcalculationService } from './localcalculation.service';

describe('LocalCalculationService', () => {
  let service: LocalcalculationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalcalculationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
