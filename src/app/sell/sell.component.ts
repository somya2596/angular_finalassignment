import { Component, OnInit } from '@angular/core';
import { AutheticationService } from '../authetication.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {

  public property = [];
  flag = true;

  constructor(private autheticationservice: AutheticationService) { }

  ngOnInit() {

    this.autheticationservice.getproperty().subscribe((data) => {
      Object.keys(data).forEach( (key)=> {
        this.property.push(data[key])
      });
    });
  }

  public warn: String;
  onSubmit(sellform :NgForm)
  { 
    this.property.forEach((key) => {
      if(sellform.value.Owner === key.Owner)
      {
        this.warn = "Property Already Exists";
        this.flag = false;
      }
    });

    if(this.flag){
      // sellform.value.password = btoa(sellform.value.password)
    this.autheticationservice.setProperty(sellform.value).subscribe((res)=>
    {
       console.log(res);
    })
    
  }
}

}
