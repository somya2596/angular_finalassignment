import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<firebase.User>;
  response = new Subject();
  constructor(private firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;
   }
   signup(email: string, password: string)
   {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });    
  }

  login(email: string, password: string):Observable<any> {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!');
        console.log(value);
        this.response.next({success:value});
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
        this.response.next({error:err.message});
      });
      return this.response.asObservable();
  }
  logout() {
    this.firebaseAuth
      .auth
      .signOut();

      localStorage.clear();
      console.log("logout");
  }

 

}