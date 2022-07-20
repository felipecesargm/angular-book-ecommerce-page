import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkoobStoreAppComponent } from './skoob-store-app.component';

describe('SkoobStoreAppComponent', () => {
  let component: SkoobStoreAppComponent;
  let fixture: ComponentFixture<SkoobStoreAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkoobStoreAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkoobStoreAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
