import { TestBed } from '@angular/core/testing';

import { LocalcalculationService } from './localcalculation.service';

// Testet die LocalcalculationService-Klasse
describe('LocalCalculationService', () => {
  let service: LocalcalculationService;

  // Vor jedem Testfall wird die TestBed-Konfiguration initialisiert
  beforeEach(() => {
    TestBed.configureTestingModule({});
    // Der LocalcalculationService wird erstellt und in der Variable "service" gespeichert
    service = TestBed.inject(LocalcalculationService);
  });

  // Überprüft, ob der LocalcalculationService erfolgreich erstellt wurde
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});