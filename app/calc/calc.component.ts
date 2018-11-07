import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
  public first : number = 123;
  public second :number = 234;
  public choice : string;
  public result = this.first + this.second; 
  constructor() { }
  addFunc(){
    this.result = this.first + this.second;
  }
  
  subFunc(){
    this.result = this.first - this.second;
  }
  mulFunc(){
    this.result = this.first * this.second;
  }
  divFunc(){
    this.result = this.first / this.second;
  }

  process(){
    switch (this.choice) {
      case "Add":
        this.addFunc();
        break;
    case "Sub":
        this.subFunc();
        break;
      default:
      this.mulFunc();
        break;
    }
  }
  ngOnInit() {
  }
}
