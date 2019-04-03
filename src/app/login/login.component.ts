import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';


import {AuthService } from '../auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public user = [];
  show = false;
  type = "password";
  public warn : String;
  
  constructor( private router: Router,private authService:AuthService) { }

  ngOnInit() {}    
  

  onSubmit(loginform: NgForm) {
  
    this.authService.login(loginform.value.username, loginform.value.password).subscribe(res=>
      {
        if(res.success){ 
          localStorage.setItem('isLoggedIn','true');
          (this.router.navigate(['dashboard'])) }
        else{ alert(res.error);
        }
      });
    loginform.value.username = loginform.value.password = '';  
  
  }
  logout()
  {
    this.authService.logout();
    this.router.navigate(['login']);
  }
  
  showPass()
    {
      this.show = !this.show;
      // console.log(this.type); //undefined
      if (this.show){
        this.type = "text";
    }
    else {
        this.type = "password";
    }
    }
}
