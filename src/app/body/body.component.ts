import { Component, OnInit } from '@angular/core';
import { AutheticationService } from '../authetication.service';
import { Router } from '@angular/router';
import { JsonService } from '../json.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  public propertylist;
  public isActive;
  constructor( private jsonService: JsonService, private router: Router) {
    this.jsonService.changeData.subscribe(data => {
      this.propertylist = data;
      console.log(data);
    });
  }
  navigate() {
    this.router.navigate(['cart']);
  }

  getData() {
    this.jsonService.getproperty().subscribe(data => {
      this.propertylist = Object.keys(data).map((x) => { return data[x] });
      console.log(this.propertylist);
    });
  }

  ngOnInit() {
    this.getData()
  }
  likedproperty(i,islike) {
    this.jsonService.update(i, { isliked: !islike }).subscribe(res => {
        console.log(res);
        this.getData()
      })
}
}
