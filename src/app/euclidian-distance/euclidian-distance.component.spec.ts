import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EuclidianDistanceComponent } from './euclidian-distance.component';

describe('EuclidianDistanceComponent', () => {
  let component: EuclidianDistanceComponent;
  let fixture: ComponentFixture<EuclidianDistanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EuclidianDistanceComponent]
    });
    fixture = TestBed.createComponent(EuclidianDistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
