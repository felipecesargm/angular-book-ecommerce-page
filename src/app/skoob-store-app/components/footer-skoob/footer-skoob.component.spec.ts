import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSkoobComponent } from './footer-skoob.component';

describe('FooterSkoobComponent', () => {
  let component: FooterSkoobComponent;
  let fixture: ComponentFixture<FooterSkoobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterSkoobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterSkoobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
