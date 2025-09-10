import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { Visualizador } from '../../components/visualizador/visualizador';

@Component({
  selector: 'app-home',
  imports: [Header,Visualizador],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
