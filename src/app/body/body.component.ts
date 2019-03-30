import { Component, OnInit } from '@angular/core';
import { AutheticationService } from '../authetication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {


  public propertylist;
 constructor(private _jsonservice:AutheticationService,private router:Router) { 
   this._jsonservice.changeData.subscribe(data => {
   this.propertylist = data;
   console.log(data);
  });}
  navigate(){
    this.router.navigate(['cart']);
  }

  ngOnInit(){
    this._jsonservice.getproperty().subscribe(data=>{
      this.propertylist= Object.keys(data).map((x)=>{return data[x]});
      console.log(this.propertylist);
      
      
    });
   
    
  }
}
