import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { Http, HttpModule }  from "@angular/http";

import { AppComponent } from './app.component';
import { CalcComponent } from './calc/calc.component';
import { EmpRepositoryComponent } from './emp-repository/emp-repository.component';
import { EmpFilterPipe } from './emp-filter.pipe';
import { EmpDetailComponent } from './emp-detail/emp-detail.component';
import { NewEmpComponent } from './new-emp/new-emp.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { RestComponent } from './rest/rest.component';
import { EmpService } from './emp.service';

const appRoutes : Routes =[
  {
    path:'calc', component : CalcComponent,
  }, 
  { path:'empRepository', component: EmpRepositoryComponent },
  { path: 'RestService', component: RestComponent },
  { path: 'RestService/:id', component: RestComponent },
  { path: '**' , component : ErrorPageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CalcComponent,
    EmpRepositoryComponent,
    EmpFilterPipe,
    EmpDetailComponent,
    NewEmpComponent,
    ErrorPageComponent,
    RestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing : true}),
    HttpModule
  ],
  providers: [EmpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
