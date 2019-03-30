import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/take';

import { mergeMapTo } from 'rxjs/operators';
import { take } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MessagingService {
  messaging=firebase.messaging()
  currentMessage = new BehaviorSubject(null);


  constructor(private angularFireDB: AngularFireDatabase,private angularFireAuth: AngularFireAuth) {

     }
    //  private updateToken(token){
    //   this.angularFireAuth.authState.pipe(take(1)).subscribe(user =>{
    //     if(!user) return ;
    //     const data={[user.uid]:token}
    //     this.angularFireDB.object('fcmTokens/').update(data) 
    //        })     }
    //       getPermission(){
    //         this.messaging.requestPermission()
    //         .then(() =>{
    //           console.log('Notification permission granted.');
    //           return this.messaging.getToken()
    //         })
    //         .then(token =>{
    //           console.log(token)
    //           this.updateToken(token)
    //         })
    //         .catch((err) =>{
    //           console.log('unable to get permission to notify.',err);
    //         });
    //       }
    //       receiveMessage(){
    //         this.messaging.onMessage((payload) =>{
    //           console.log("Message received.",payload);
    //           this.currentMessage.next(payload)
    //         });
    //       }
}
