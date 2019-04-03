import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';


import {AuthService } from '../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user =[];
  show = false;
  type = "password";
  flag = true;
  public newuser = {};


  constructor(private authService:AuthService) { }

  ngOnInit() {
   
  }
public warn: String;
  onSubmit(signupform :NgForm)
  { 
 
    this.authService.signup(signupform.value.username, signupform.value.password);
    signupform.value.username = signupform.value.password = '';
    
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

