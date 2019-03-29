import { Component, OnInit } from '@angular/core';
import { AutheticationService } from '../authetication.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  filterData={
    propertytype:"",
    Location:""
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
      this.jsonService.setData(this.filterData, data);
    });
  }

}

