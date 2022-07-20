import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListSkoobComponent } from './product-list-skoob.component';

describe('ProductListSkoobComponent', () => {
  let component: ProductListSkoobComponent;
  let fixture: ComponentFixture<ProductListSkoobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListSkoobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductListSkoobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
