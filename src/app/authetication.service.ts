import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Users} from  './users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutheticationService {

  private _url : string ="https://detailform-6dced.firebaseio.com/detailForm.json";

  constructor(private http: HttpClient) { }

  getUsers():Observable<Users[]>
  {
   
    return this.http.get<Users[]>(this._url);
  }
  setUser(userdata):Observable<Users[]>
  {
  console.log(userdata);
    return this.http.post<Users[]>(this._url,userdata);
  }
  
}
