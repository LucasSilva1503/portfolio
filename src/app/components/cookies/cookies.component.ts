import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.css']
})
export class CookiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.readCookies();
  }

  cookies(consent : string, cookiees: HTMLDivElement){
    switch (consent) {
      case 'true':
        localStorage.setItem('consent', 'true');
        break;
      case 'false':
          localStorage.setItem('consent', 'false');
        break;
      default:
        break;
    }
    cookiees.style.display="none";   
  }

  accepted : boolean = false;
  readCookies(){
    if(localStorage.getItem('consent') == 'true'){
      document.getElementById("cookies").style.display="none";
    }
  }

}
