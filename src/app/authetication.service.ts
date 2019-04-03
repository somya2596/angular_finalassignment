import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './users';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { Property } from './property';

@Injectable({
  providedIn: 'root'
})
export class AutheticationService {

  public data: any;
  public filteredJsonData: any;
  public changeData: Subject<any> = new Subject<any>();

  // private _url: string = "https://detailform-6dced.firebaseio.com/detailForm.json";

  private listurl = "https://practice-5e705.firebaseio.com/.json";


  constructor(private http: HttpClient) { }

  // getUsers(): Observable<Users[]> {

  //   return this.http.get<Users[]>(this._url);
  // }
  // setUser(userdata): Observable<Users[]> {
  //   console.log(userdata);
  //   return this.http.post<Users[]>(this._url, userdata);
  // }

  // logout(): void {
  //   localStorage.setItem('isLoggedIn', "false");
  //   localStorage.removeItem('token');
  // }



  getproperty(): Observable<Property[]> {
    return this.http.get<Property[]>(this.listurl);
  }

  setProperty(propertydata): Observable<Property[]> {
    console.log(propertydata);
    return this.http.post<Property[]>(this.listurl, propertydata);
  }

  getpropertydetailsbyid(id, data) {
    let res = null;
    data.forEach(element => {
      if (element.id == id) {
        res = element;
      }
    });
    return res;
  }

  setData(filterData, data) {
    data = data.filter((tempData) => {
      if ((filterData.propertytype ? tempData.propertytype == filterData.propertytype : true)
        && (filterData.Location ? tempData.Location == filterData.Location : true)
        && (filterData.Budget? tempData.Budget == filterData.Budget : true) ) {
        return true;
      }
      return false;
    });
    this.changeData.next(data);
  }


}
