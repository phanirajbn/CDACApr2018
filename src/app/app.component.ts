import { Component } from '@angular/core';
import { CstService } from './others/cst.service';
import { AddCstComponent } from "./add-cst/add-cst.component";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public customers : any;
  constructor(private myservice : CstService){
    myservice.getCustomers().subscribe(result=>{
      this.customers = result;//Fill the customers with the data obtained from the Service..
    })
  }
  
  insertRec(cst) {
    let info = this.myservice.addCustomer(cst);
    console.log(JSON.stringify(info));
    info.subscribe(res => console.log(res));
  }
}
