import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSkoobComponent } from './filter-skoob.component';

describe('FilterSkoobComponent', () => {
  let component: FilterSkoobComponent;
  let fixture: ComponentFixture<FilterSkoobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterSkoobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterSkoobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
