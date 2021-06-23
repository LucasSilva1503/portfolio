import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evandref',
  templateUrl: './evandref.component.html',
  styleUrls: ['./evandref.component.css']
})
export class EvandrefComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  f1(paddock, button){
    paddock.src="../../../assets/images/"+button.id+".png";
  }

}
