import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoSubCategoria } from './botao-sub-categoria';

describe('BotaoSubCategoria', () => {
  let component: BotaoSubCategoria;
  let fixture: ComponentFixture<BotaoSubCategoria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotaoSubCategoria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoSubCategoria);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
