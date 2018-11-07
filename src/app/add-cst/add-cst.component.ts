import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-cst',
  templateUrl: './add-cst.component.html',
  styleUrls: ['./add-cst.component.css']
})
export class AddCstComponent implements OnInit {
  @Output() onSave: EventEmitter<any> = new EventEmitter<any>();
  public name: string;
  public address : string;
  constructor() { }

  ngOnInit() {
  }

  giveBack(){
    let cst = {'CstName' : this.name, 'CstAddress' : this.address};
    this.onSave.emit(cst);
  }
}
