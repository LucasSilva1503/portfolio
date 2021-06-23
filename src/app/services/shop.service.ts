import { Injectable } from '@angular/core';
import { Article } from '../class/article';
import { templateJitUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  shopList: Array<Article> = new Array<Article>()

}
