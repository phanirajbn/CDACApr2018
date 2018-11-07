import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class CstService {
  public url : string ='http://localhost:1234/customers';
  constructor(private http: Http) { }

  getCustomers() :Observable<any>{
    return this.http.get(this.url).map(res=>{
      let data = res.json();
      return data;
    })
  }

  addCustomer(data: any) : Observable<any>{
    console.log(data);
    let headers = new Headers({'Content-Type' : 'application/json'});
    let options = new RequestOptions({ headers : headers});
    return this.http.post(this.url, data, options).map(res=>{
      console.log(res);
    })
  }
}
