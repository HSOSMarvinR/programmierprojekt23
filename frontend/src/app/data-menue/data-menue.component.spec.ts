import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataMenueComponent } from './data-menue.component';

describe('DataMenueComponent', () => {
  let component: DataMenueComponent;
  let fixture: ComponentFixture<DataMenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataMenueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataMenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
