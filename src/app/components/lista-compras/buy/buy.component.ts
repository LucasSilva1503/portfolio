import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../../services/shop.service';
import { Article } from 'src/app/class/article';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  serviceList : ShopService;
  constructor(private list: ShopService) {
    this.serviceList = list;
   }

  ngOnInit(): void {
  }

  buyArt(article : Article){
    article.cart = true;
  }

}
