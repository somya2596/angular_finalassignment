import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-out-area',
  templateUrl: './check-out-area.component.html',
  styleUrls: ['./check-out-area.component.css']
})
export class CheckOutAreaComponent implements OnInit {
  productsize = false;
  productsized(){
    console.log("yes")
  }
  constructor() { 
  } 

  ngOnInit() {

  }

}
