import { Component } from '@angular/core';
import { BotaoCategoria } from '../botao-categoria/botao-categoria';
import { BotaoSubCategoria } from '../botao-sub-categoria/botao-sub-categoria';
import { NgIf } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@Component({
  selector: 'app-header',
  imports: [BotaoCategoria, BotaoSubCategoria,NgIf],
  templateUrl: './header.html',
  styleUrl: './header.css',
})

export class Header {

  ativoIndex: number | null = null;

  selecionar(index: number){
    if(this.ativoIndex === index){
      this.ativoIndex = null;
    } else{
      this.ativoIndex = index;
    }
  }
}
