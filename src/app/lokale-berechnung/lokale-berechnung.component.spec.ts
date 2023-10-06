import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LokaleBerechnungComponent } from './lokale-berechnung.component';

describe('LokaleBerechnungComponent', () => {
  let component: LokaleBerechnungComponent;
  let fixture: ComponentFixture<LokaleBerechnungComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LokaleBerechnungComponent]
    });
    fixture = TestBed.createComponent(LokaleBerechnungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
