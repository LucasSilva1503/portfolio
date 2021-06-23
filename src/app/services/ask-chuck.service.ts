import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AskChuckService {

  constructor(private httpAsk: HttpClient) { }

  piadaDoServico = "Veio do servico";

  link = "https://api.chucknorris.io/jokes/random";
  link2 = "https://api.chucknorris.io/jokes/search?";

  getJoke(){
    return this.httpAsk.get(this.link);
  }

  getJokeFromCat(valorAPesquisar){
    return this.httpAsk.get(this.link2, {params:{'query': valorAPesquisar}})
  }


}
