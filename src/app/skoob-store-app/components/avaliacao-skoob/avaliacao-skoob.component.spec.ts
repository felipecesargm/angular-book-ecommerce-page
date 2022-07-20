import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliacaoSkoobComponent } from './avaliacao-skoob.component';

describe('AvaliacaoSkoobComponent', () => {
  let component: AvaliacaoSkoobComponent;
  let fixture: ComponentFixture<AvaliacaoSkoobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvaliacaoSkoobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvaliacaoSkoobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
