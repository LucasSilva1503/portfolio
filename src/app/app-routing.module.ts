import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { ChuckComponent } from './components/chuck/chuck.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ListaComprasComponent } from './components/lista-compras/lista-compras.component';
import { AddComponent } from './components/lista-compras/add/add.component';
import { BuyComponent } from './components/lista-compras/buy/buy.component';
import { AnimeComponent } from './components/anime/anime.component';
import { DetailsComponent } from './components/anime/details/details.component';
import { EvandrefComponent } from './components/evandref/evandref.component'; 
import { PColorComponent } from './components/p-color/p-color.component'; 
import { FColorComponent } from './components/p-color/f-color/f-color.component'; 


const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"home", component: HomeComponent},
  {path:"evandref", component: EvandrefComponent},
  {path:"calculadora", component: CalculadoraComponent},
  {path:"chuck", component: ChuckComponent},
  {path:"compras", component: ListaComprasComponent,
  children: [
    {path:"Add", component: AddComponent},
    {path:"Buy", component: BuyComponent},
  ]},
  {path:"anime", component: AnimeComponent,
  children: [
    {path:":id", component: DetailsComponent},
  ]},
  {path:"p-color", component: PColorComponent,
  children: [
    {path:":rims", component: FColorComponent},
  ]},
//=====|NOT FOUND|=====
  {path:"notfound", component: NotfoundComponent},
  {path:"**", redirectTo: "notfound"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
