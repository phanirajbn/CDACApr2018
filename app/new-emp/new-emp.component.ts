import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Employee } from "../employee";

@Component({
  selector: 'app-new-emp',
  templateUrl: './new-emp.component.html',
  styleUrls: ['./new-emp.component.css']
})
export class NewEmpComponent implements OnInit {
  public valueId: number;
  public valueName : string;
  public valueAddress : string;
  public errorMessage : string;
  @Output() onSave : EventEmitter<Employee> = new 
  EventEmitter<Employee>()
  constructor() { }

  ngOnInit() {
  }
  //In this function, the event is emitted only after valid data is provided by the user thro HTML.
  setDetails(){ 
    if(this.valueId > 200 )
      this.errorMessage = "Not allowed";
    //creates a new Employee object, sets the details for the employee and returns as output...
    var emp = new Employee(this.valueId, this.valueName, this.valueAddress);
    this.onSave.emit(emp);
  }
}
