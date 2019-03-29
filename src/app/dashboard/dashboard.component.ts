import { Component, OnInit } from '@angular/core';
import { AutheticationService } from '../authetication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 


  id: string;
  constructor(private router: Router,private authteticationservice: AutheticationService) { }

  ngOnInit() {
    this.id = localStorage.getItem('token');
  }

  logout(): void {
    console.log("Logout"); 
    this.authteticationservice.logout();
    this.router.navigate(['/login']);
  }

}
