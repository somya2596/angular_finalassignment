import { Component, OnInit } from '@angular/core';
import {JsonService} from '../json.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {


  public property;
 constructor(private _jsonservice:JsonService,private router:Router) { 
   this._jsonservice.changeData.subscribe(data => {
   this.property = data;
   console.log(data);
  });}
  navigate(){
    this.router.navigate(['cart']);
  }

  ngOnInit(){
    this._jsonservice.getproperty().subscribe(data=>{
      this.property=data;
      console.log(this.property);
      
    });
   
    
  }
}
