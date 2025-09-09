import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-botao-sub-categoria',
  imports: [],
  templateUrl: './botao-sub-categoria.html',
  styleUrl: './botao-sub-categoria.css'
})
export class BotaoSubCategoria {
  @Input() ativo = false;
  @Output() mudouEstado = new EventEmitter<boolean>();

  onClick(){
    this.ativo = !this.ativo;
    this.mudouEstado.emit(this.ativo);
  }
}
