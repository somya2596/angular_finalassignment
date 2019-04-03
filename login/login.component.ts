import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { AutheticationService } from '../authetication.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';


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
  
  constructor(private autheticationservice: AutheticationService, private router: Router) { }

  ngOnInit() {
    this.autheticationservice.getUsers().subscribe((data) => {
      Object.keys(data).forEach((key) => {
        this.user.push(data[key])
      });
    });

    this.autheticationservice.logout();
    
    
  }

  onSubmit(loginform: NgForm) {
    this.user.forEach((key) => {
     if(loginform.value.username===key.username && loginform.value.password===atob(key.password))
     {
       console.warn("Login Success");
       
       localStorage.setItem('isLoggedIn', "true");
       localStorage.setItem('token', loginform.value.username);
       
       this.router.navigate(['/dashboard'])
     }
     else{
       this.warn = "Incorrect Username or Password";
       
     }
     
    });


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