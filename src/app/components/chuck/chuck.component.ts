import { Component, OnInit } from '@angular/core';
import { AskChuckService } from '../../services/ask-chuck.service';

@Component({
  selector: 'app-chuck',
  templateUrl: './chuck.component.html',
  styleUrls: ['./chuck.component.css']
})
export class ChuckComponent implements OnInit {

  constructor(private chuckService: AskChuckService) { }

  ngOnInit(): void {
  }

  piada : string = "Wait for it, you won't regret it :3";
  piadas : any ;
  resultado : any;

  getPiada(){
    this.chuckService.getJoke().subscribe(
      data => 
      {
        this.resultado = data;
        this.piada = this.resultado.value;
      }
      );
  }
  
  getMorePiada(valorAPesquisar : string){
    this.chuckService.getJokeFromCat(valorAPesquisar).subscribe(data=> {this.piadas = data 
      console.log(this.piadas)})
  }

}
