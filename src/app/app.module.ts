import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { CstService } from './others/cst.service';
import { AddCstComponent } from './add-cst/add-cst.component';



@NgModule({
  declarations: [
    AppComponent,
    AddCstComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [CstService],
  bootstrap: [AppComponent]
})
export class AppModule { }
