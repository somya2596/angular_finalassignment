import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  url="../../assets/home_hero_banner (1).jpg";

  constructor() { }

  ngOnInit() {
  }

}
