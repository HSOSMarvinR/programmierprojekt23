import { TestBed } from '@angular/core/testing';

import { KMeansService } from './kmeans.service';

describe('KMeansService', () => {
  let service: KMeansService;

  // Vorbereitung vor jedem Testfall
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KMeansService);
  });

  // Testfall: Überprüft, ob der KMeansService erstellt wurde
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
