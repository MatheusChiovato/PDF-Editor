import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from "./pages/home/home";
import { BotaoCategoria } from './components/botao-categoria/botao-categoria';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home,BotaoCategoria],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('PDF');
}
