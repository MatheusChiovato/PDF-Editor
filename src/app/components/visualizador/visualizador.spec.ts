import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Visualizador } from './visualizador';

describe('Visualizador', () => {
  let component: Visualizador;
  let fixture: ComponentFixture<Visualizador>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Visualizador]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Visualizador);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
