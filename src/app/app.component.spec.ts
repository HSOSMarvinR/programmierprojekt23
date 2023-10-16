// Importiere die erforderlichen Module und Komponenten zum Testen von AppComponent
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

// Beschreibe die Testsuite für die AppComponent
describe('AppComponent', () => {
  
  // Vor jedem Test führe folgende Schritte aus
  beforeEach(async () => {
    // Konfiguriere das Testmodul mit den erforderlichen Abhängigkeiten
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents(); // Kompiliere die Komponente
  });

  // Test: Überprüfe, ob die Komponente erfolgreich erstellt wurde
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // Test: Überprüfe, ob die Komponente den erwarteten Titel hat
  it(`should have as title 'K-Means Clustering'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('K-Means Clustering');
  });

  // Test: Überprüfe, ob der Titel in der gerenderten Komponente angezeigt wird
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('frontend app is running!');
  });
});
