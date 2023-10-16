import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPanelComponent } from './info-panel.component';

describe('InfoPanelComponent', () => {
  let component: InfoPanelComponent;
  let fixture: ComponentFixture<InfoPanelComponent>;

  // Vorbereitung vor jedem Testfall
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoPanelComponent]
    });
    fixture = TestBed.createComponent(InfoPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Testfall: Überprüft, ob das Komponenten-Objekt erstellt wurde
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
