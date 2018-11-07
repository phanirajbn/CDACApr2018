import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { Http, HttpModule } from '@angular/http';
import { Employee } from '../employee';
import { Routes, Route, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.css']
})
export class RestComponent implements OnInit {
  public data = [];
  public queryid : string;
  public selectedEmp : any;
  public newEmp : any; //JSON data...
  public id:number;
  public name:string;
  public address:string;

  constructor(private myservice : EmpService, private route:ActivatedRoute) { 
    
  }
  //Internally invoked when the object is ready...
  ngOnInit() {
    this.myservice.getAll().subscribe(result => { this.data = result; console.log(this.data)});
  }


  edit(){
    if (this.route.snapshot.params['id']) {
      let id = this.route.snapshot.params['id'];
      this.myservice.get(id).subscribe(res => { this.selectedEmp = res[0]; console.log(this.selectedEmp); })
    }
  }

  insertRec(){
    this.newEmp = {"empid" : this.id, "empname" : this.name, "empaddress" : this.address };
    this.myservice.insert(this.newEmp).subscribe(res=>console.log(res));
  }
}
