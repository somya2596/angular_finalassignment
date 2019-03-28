import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../appservice.service';
@Component({
  selector: 'app-right-content-area',
  templateUrl: './right-content-area.component.html',
  styleUrls: ['./right-content-area.component.css']
})
export class RightContentAreaComponent implements OnInit {
  constructor(private condata:AppserviceService) {  }
  public products=[];
  ngOnInit() {
    this.products=this.condata.getItems();
  //    products=condata.getitems();
  //    console.log(products);
  }

}


// export class SidebarComponent implements OnInit {

//   constructor(private _shirts:ProductdataService) { }

// public products=[];
// public color=[];
//   ngOnInit() {

// this.products=this._shirts.getItems();
// // console.log(products);
// // // this.color=this._shirts.getItems().color;
// // // console.log(color);
// // color=*ngFor="let product of products.color"
// // console.log(color)
// *ngFor="let product of products"
// console.log(this.products.color)

//   }

// }