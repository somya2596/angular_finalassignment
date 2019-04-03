import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class JsonService {
  public data: any;
  public filteredJsonData: any;
  public changeData: Subject<any> = new Subject<any>();

  constructor(private http: HttpClient) { }
  getproperty():Observable<any>{
   return this.http.get("https://practice-5e705.firebaseio.com/.json");
  }

  update(i,value):Observable<any>{
    return this.http.patch("https://practice-5e705.firebaseio.com/" + i + "/.json", value)
  }
  getpropertydetailsbyid(id, data){
    let res=null;
    data.forEach(element => {
      if(element.id==id){
        res=element;
      }
    });
   return res;
  }

  setData(filterData, data) {
    data = data.filter((tempData) => {
      if((filterData.propertytype ? tempData.propertytype == filterData.propertytype : true) 
      && (filterData.Location ? tempData.Location == filterData.Location : true)) {
        return true;
      }
      return false;
    });
    this.changeData.next(data);
  }

}
