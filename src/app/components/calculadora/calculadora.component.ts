import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  valor1 :number = 4;
  valor2 :number = 20;
  sinal : string = "+";

  resultado = 420;
  calcula(){
    this.resultado = eval(this.valor1+ this.sinal +this.valor2);
  }

}
