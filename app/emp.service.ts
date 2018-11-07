import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
//A service is a class in ANgular that has an attribute called Injectable which means that any dependencies that UR Component requires could be injected thro this service. Services are singleton objects, U could use them across all the components of the Application. 

@Injectable()
export class EmpService {
  private url :string = 'http://localhost:1234';//URL of rest service....
  constructor(private http: Http) { }
  getAll() : Observable<any>{
    return this.http.get(this.url).map(res=>{
      let data = res.json();
      return data;
    })
  }

  get(id) : Observable<any>{
    return this.http.get(this.url + '/' + id).map(res=>{
      let data = res.json();
      return data;
    })
  }

  insert(data : any) :Observable<any>{
    console.log(data);
    var input = JSON.stringify(data);
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers : headers});
    return this.http.post(this.url, input, options).map(res=>{
      console.log(res);
    })
  }
}
