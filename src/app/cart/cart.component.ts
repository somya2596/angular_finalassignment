import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JsonService } from '../json.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  product: any;
  public property:any;
  disableButton;
constructor( private router:Router, private jsonService : JsonService) {
    const url=window.location;
    const word=url.toString().split('/');
    const id=word[word.length-1];
    this.jsonService.getproperty().subscribe(data=>{
      this.property= Object.keys(data).map((x)=>{return data[x]});
      console.log(this.property);
      this.product = this.jsonService.getpropertydetailsbyid(id,this.property);
     
       });
     }

  ngOnInit() {}
  onBuy(){
    window.alert("Property Purchased");
   
      this.disableButton = true;
      }

}
