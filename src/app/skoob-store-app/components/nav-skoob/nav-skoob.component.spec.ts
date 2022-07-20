import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSkoobComponent } from './nav-skoob.component';

describe('NavSkoobComponent', () => {
  let component: NavSkoobComponent;
  let fixture: ComponentFixture<NavSkoobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavSkoobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavSkoobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
