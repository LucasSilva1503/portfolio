import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { FormsModule } from '@angular/forms';
import { EvandrefComponent } from './components/evandref/evandref.component';
import { CookiesComponent } from './components/cookies/cookies.component';
import { ListaComprasComponent } from './components/lista-compras/lista-compras.component';
import { BuyComponent } from './components/lista-compras/buy/buy.component';
import { AddComponent } from './components/lista-compras/add/add.component';
import { ChuckComponent } from './components/chuck/chuck.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AnimeComponent } from './components/anime/anime.component';
import { DetailsComponent } from './components/anime/details/details.component';
import { PColorComponent } from './components/p-color/p-color.component';
import { FColorComponent } from './components/p-color/f-color/f-color.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CalculadoraComponent,
    NotfoundComponent,
    EvandrefComponent,
    CookiesComponent,
    ListaComprasComponent,
    BuyComponent,
    AddComponent,
    ChuckComponent,
    AnimeComponent,
    DetailsComponent,
    PColorComponent,
    FColorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
