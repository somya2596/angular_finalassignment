import { Component, OnInit } from '@angular/core';
import {JsonService} from '../json.service'

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {


  public property;
 constructor(private _jsonservice:JsonService) { 
   this._jsonservice.changeData.subscribe(data => {
   this.property = data;
   console.log(data);
  });}

  ngOnInit(){
    this._jsonservice.getproperty().subscribe(data=>{
      this.property=data;
      console.log(this.property);
      
    });
   
    
  }
}
