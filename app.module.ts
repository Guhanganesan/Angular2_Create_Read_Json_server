import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpModule}from'@angular/http';
import { AppComponent } from './app.component';
import{FormsModule}from'@angular/forms';
import{HttpService}from'./http.service';

import{RouterModule}from'@angular/router';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';
@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    AddComponent,
   
  ],
  imports: [
      BrowserModule,HttpModule,FormsModule,RouterModule.forRoot(
        [
        {path:"view",component:ViewComponent},
        {path:"add",component:AddComponent},
        ]
      )
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
