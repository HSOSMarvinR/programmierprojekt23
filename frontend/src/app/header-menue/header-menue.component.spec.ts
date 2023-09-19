import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMenueComponent } from './header-menue.component';

describe('HeaderMenueComponent', () => {
  let component: HeaderMenueComponent;
  let fixture: ComponentFixture<HeaderMenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderMenueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderMenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
