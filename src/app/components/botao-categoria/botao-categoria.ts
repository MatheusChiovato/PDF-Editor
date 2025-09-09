import { Component,Output,EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-botao-categoria',
  imports: [],
  templateUrl: './botao-categoria.html',
  styleUrl: './botao-categoria.css'
})
export class BotaoCategoria {


  @Input() ativo = false;
  @Output() mudouEstado = new EventEmitter<boolean>();

  onClick(){
    this.ativo = !this.ativo;
    this.mudouEstado.emit(this.ativo);
  }
}
