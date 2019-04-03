import { Component, OnInit } from '@angular/core';
import { AutheticationService } from '../authetication.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 


  id: string;
  constructor(private router: Router,private authteticationservice: AutheticationService, private authservice: AuthService) { }

  ngOnInit() {
    // this.id = localStorage.getItem('token');
  }
logout(){
this.authservice.logout();
}
}
