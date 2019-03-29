import { Component, OnInit } from '@angular/core';
import { AutheticationService } from '../authetication.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user = [];
  show = false;
  type = "password";
  flag = true;


  constructor(private autheticationservice: AutheticationService) { }

  ngOnInit() {
    this.autheticationservice.getUsers().subscribe((data) => {
      Object.keys(data).forEach( (key)=> {
        this.user.push(data[key])
      });
    });
  }

  onSubmit(signupform :NgForm)
  { 
    this.user.forEach((key) => {
      if(signupform.value.username === key.username)
      {
        window.alert("User Already Exists");
        this.flag = false;
      }
    });

    if(this.flag){
   
    this.autheticationservice.setUser(signupform.value).subscribe((res)=>
    {
      // console.log(res);
    })
    
  }
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
