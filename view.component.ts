import { Component, OnInit } from '@angular/core';
import{HttpService}from'../http.service';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
  providers:[HttpService]
})
export class ViewComponent implements OnInit {

   data:any;
   
  constructor( private myservice:HttpService) { }
  
  getValue()
  {
     this.myservice.fetchData().subscribe(result=>{this.data=result})
  }

  ngOnInit() {
    this.getValue();
  }

}

