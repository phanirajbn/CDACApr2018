import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCstComponent } from './add-cst.component';

describe('AddCstComponent', () => {
  let component: AddCstComponent;
  let fixture: ComponentFixture<AddCstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
