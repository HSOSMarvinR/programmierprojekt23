import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManhattanDistanceComponent } from './manhattan-distance.component';

describe('ManhattanDistanceComponent', () => {
  let component: ManhattanDistanceComponent;
  let fixture: ComponentFixture<ManhattanDistanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManhattanDistanceComponent]
    });
    fixture = TestBed.createComponent(ManhattanDistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
