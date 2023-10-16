import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsComponent } from './charts.component';

// Deklaration der Test-Suite für die Komponente "ChartsComponent"
describe('ChartsComponent', () => {
  let component: ChartsComponent;
  let fixture: ComponentFixture<ChartsComponent>;

  // Vor jeder Testfall-Ausführung
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartsComponent]
    }); 
    fixture = TestBed.createComponent(ChartsComponent);
    // Eine Testfixture erstellen, die "ChartsComponent" enthält
    component = fixture.componentInstance;
    // Auf die Instanz der Komponente zugreifen
    fixture.detectChanges();
    // Änderungen erkennen und aktualisieren
  });

  it('should create', () => {
    // Ein Testfall, der überprüft, ob die Komponente erfolgreich erstellt wurde
    expect(component).toBeTruthy();
    // Die Komponente sollte erfolgreich erstellt worden sein
  });
});
