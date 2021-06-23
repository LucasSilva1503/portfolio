import { Component, OnInit } from '@angular/core'; 
import { ShopService } from '../../services/shop.service'; 

@Component({
  selector: 'app-lista-compras',
  templateUrl: './lista-compras.component.html',
  styleUrls: ['./lista-compras.component.css']
})
export class ListaComprasComponent implements OnInit {

  serviceList : ShopService;
  constructor(private list : ShopService) {
    this.serviceList = list;
   }

  ngOnInit(): void {
  }

}
