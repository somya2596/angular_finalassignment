import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JsonService } from '../json.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  public likedlist;
  public propertylist;
  constructor(private jsonService: JsonService, private router: Router) {}

  ngOnInit() {
    this.jsonService.getproperty().subscribe(data => {
      this.propertylist = Object.keys(data).map((x) => { return data[x] });
      console.log(this.propertylist);
      this.likedlist = this.propertylist.filter((tempData) => {
        if(tempData.isliked == "true" || tempData.isliked == true) {
          return true;
        }
      });

      
      console.log(this.likedlist)

    });
   
  }

}
