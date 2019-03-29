import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutheticationService } from '../authetication.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  product: any;
  public property:any;


  constructor(private datafetch:AutheticationService, private router:Router, private jsonService : AutheticationService) {
    const url=window.location;
    const word=url.toString().split('/');
    const id=word[word.length-1];
    this.jsonService.getproperty().subscribe(data=>{
      this.property=data;
      console.log(this.property)
      this.product = this.jsonService.getpropertydetailsbyid(id,this.property);
      });
  
 

   }

  ngOnInit() {
    
  }
  onBuy(){
    window.alert("Property Purchased");
  }

}
