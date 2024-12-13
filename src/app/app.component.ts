import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tituloPagina: string;
  valor: number;
  nome: string = "";

  valor1: number = 0;
  valor2: number = 0;
  soma: number = 0;

  value: number = 0;

  constructor() {
    this.tituloPagina = "Programação Web em Angular";
    this.valor = 200;
  }

  calcular() {
    this.soma = this.valor1 + this.valor2;
  }
  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return `${value}`;
  }
}
