import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetAnimeService {

  constructor(private httpAsk : HttpClient) { }

  linkanime = "https://api.jikan.moe/v3/search/anime";
  linkbyid = "https://api.jikan.moe/v3/anime/";

  getAnime(animeaPesquisar : string){
    return this.httpAsk.get(this.linkanime,{
      params: {'q': animeaPesquisar}
    });
  }

  getInfoId(animeid: string){
    return this.httpAsk.get(this.linkbyid + animeid);
  }
}
