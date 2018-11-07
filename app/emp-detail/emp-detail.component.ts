import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../employee';
//The Contents of this component to display will be injected from another component called emp-repository...
@Component({
  selector: 'app-emp-detail',
  template: "<div style='display:inline-block;' *ngIf='selectedEmp'><h1> Details of Employee </h1><p>{{selectedEmp.empID}}</p><p>{{ selectedEmp.empName }}</p><p>{{selectedEmp.empAddress}}</p></div>"
})
export class EmpDetailComponent implements OnInit {
  @Input() selectedEmp: Employee
  constructor() { }

  ngOnInit() {
  }

}
