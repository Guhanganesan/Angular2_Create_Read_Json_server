import { Component, OnInit } from '@angular/core';
import{Http,Response,Headers}from'@angular/http';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private m:Http) { }

  ngOnInit() {
  }

    myjsondata:object={}
    error:any;success:any;
    addComponent(mydetails)
    {
      if(mydetails.name&&mydetails.age&&mydetails.mobile)
      {
                this.myjsondata={
                                  "name":mydetails.name,
                                  "age":mydetails.age,
                                  "mobile":mydetails.mobile
                                }
          this.m.post("http://localhost:3030/mydetails",this.myjsondata).subscribe((res:Response)=>
          {
            //console.log(res)
             this.success="Success";
          });
          
      }
      else{
       this.error ="Kindly Check all the fields";
      }
}

}
