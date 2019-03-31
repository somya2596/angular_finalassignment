import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  
  url="../../assets/1.jpg";
  url1="../../assets/hero.jpg";
  url2="../../assets/1.jpg";
  
  
  constructor() { }

  ngOnInit() {
  }

}
