import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

import { NgForm } from '@angular/forms';

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


  constructor(private authservice: AuthService) { }

  ngOnInit() {
    // this.autheticationservice.getUsers().subscribe((data) => {
    //   Object.keys(data).forEach( (key)=> {
    //     this.user.push(data[key])
    //   });
    // });
  }
public warn: String;
  onSubmit(signupform :NgForm)
  { 
    // this.user.forEach((key) => {
    //   if(signupform.value.username === key.username)
    //   {
    //     this.warn = "User Already Exists";
    //     this.flag = false;
    //   }
    // });

    
  //   if(this.flag){
  //  signupform.value.password = btoa(signupform.value.password)
  //   this.autheticationservice.setUser(signupform.value).subscribe((res)=>
  //   {
  //     // console.log(res);
  //   })
    
  // }

  this.authservice.signup(signupform.value.username, signupform.value.password);
    signupform.value.username = signupform.value.password = '';
    alert("Registered Successfully");
    signupform.resetForm();
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
