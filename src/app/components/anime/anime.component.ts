import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetAnimeService } from 'src/app/services/get-anime.service';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent implements OnInit {

  rt : Router;
  constructor(private route: Router, private animeService : GetAnimeService) {
    this.rt = route;
   }

  ngOnInit(): void {
  }

  animes : any;

  getAnimes(animeaPesquisar: string){
    this.animeService.getAnime(animeaPesquisar).subscribe(data =>{this.animes = data;
    console.log(this.animes.results.title)})
  }

}
