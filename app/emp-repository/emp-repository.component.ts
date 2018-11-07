import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-emp-repository',
  templateUrl: './emp-repository.component.html',
  styleUrls: ['./emp-repository.component.css']
})
export class EmpRepositoryComponent implements OnInit {
  public empList : Employee[] =[]; 
  public selectedEmp : Employee;
  constructor() {
    this.empList.push(new Employee(123, 'Phaniraj', 'Bangalore'));
    this.empList.push(new Employee(124, 'Vinod', 'Shimoga'));
    this.empList.push(new Employee(125, 'Banu Prakash', 'Mysore'));
    this.empList.push(new Employee(126, 'JoyDip', 'Kolkatta'));
   }
  getAll(){
    return this.empList;
  }

  display(emp:Employee){
    this.selectedEmp = new Employee(emp.empId, emp.empName, emp.empAddress);
  }

  addEmp(emp){
    console.log(emp);
    this.empList.push(emp);
  }
  ngOnInit() {
  }

}
