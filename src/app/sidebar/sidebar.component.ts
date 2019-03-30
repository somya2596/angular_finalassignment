import { Component, OnInit } from '@angular/core';
import { AutheticationService } from '../authetication.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public check;
  filterData={
    propertytype:"",
    Location:"",
    Budget: ""
  }

  constructor(private jsonService : AutheticationService) {

   }

  ngOnInit() {
    
   }
  myFunction1() {
    document.getElementById("myDropdown1").classList.toggle("show");
  }
  
  myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
  }
  myFunction3() {
    document.getElementById("myDropdown3").classList.toggle("show");
  }

  
  filterr(key,val){

    this.filterData[key] = val;
     console.log(key,val);
     this.jsonService.getproperty().subscribe(data=>{
      this.check= Object.keys(data).map((x)=>{return data[x]});
      console.log(this.check)
    this.jsonService.setData(this.filterData, this.check);
    });
  }

}

