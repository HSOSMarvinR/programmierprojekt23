import { TestBed } from '@angular/core/testing';

import { ApinewService } from './apinew.service';

describe('ApinewService', () => {
  // Beschreibung der Test-Suite für den ApinewService

  let service: ApinewService;

  beforeEach(() => {
    // Vor jeder Testfall-Ausführung

    TestBed.configureTestingModule({});
    // Angular-Testmodul konfigurieren

    service = TestBed.inject(ApinewService);
    // Service-Instanz erstellen und zuweisen
  });

  it('should be created', () => {
    // Ein Testfall, der überprüft, ob der Service erfolgreich erstellt wurde

    expect(service).toBeTruthy();
    // Der Service sollte erfolgreich erstellt worden sein
  });
});
