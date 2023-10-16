import { TestBed } from '@angular/core/testing';

import { FileService } from './file.service';

describe('FileService', () => {
  // Beschreibung der Test-Suite für den FileService

  let service: FileService;

  beforeEach(() => {
    // Vor jeder Testfall-Ausführung

    TestBed.configureTestingModule({});
    // Angular-Testmodul konfigurieren

    service = TestBed.inject(FileService);
    // Service-Instanz erstellen und zuweisen
  });

  it('should be created', () => {
    // Ein Testfall, der überprüft, ob der Service erfolgreich erstellt wurde

    expect(service).toBeTruthy();
    // Der Service sollte erfolgreich erstellt worden sein
  });
});
