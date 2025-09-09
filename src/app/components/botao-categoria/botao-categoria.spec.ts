import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoCategoria } from './botao-categoria';

describe('BotaoCategoria', () => {
  let component: BotaoCategoria;
  let fixture: ComponentFixture<BotaoCategoria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotaoCategoria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoCategoria);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
