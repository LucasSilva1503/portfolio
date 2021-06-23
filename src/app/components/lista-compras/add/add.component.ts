import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../../services/shop.service';
import { Article } from '../../../class/article';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  serviceList : ShopService;
  constructor(private list: ShopService) {
    this.serviceList = list;
   }

  ngOnInit(): void {
  }

  addList(name:string, price:number){
    this.serviceList.shopList.push(new Article(name , price));
  }

}
