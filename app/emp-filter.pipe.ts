import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from "./employee";
@Pipe({
  name: 'empFilter'
})
export class EmpFilterPipe implements PipeTransform {

  transform(value: Employee[], search: string): Employee[] {
    //Based on the search, the Employee[] will be filtered to return a subset of the Employee[]....
    if(search == undefined){
      return value;
    }
    return value.filter(function(e){
      return e.empName.toLowerCase().includes(search.toLowerCase());
    });    
  }

}
