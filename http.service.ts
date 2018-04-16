// This file should be in app folder

import{Injectable} from '@angular/core';
import{Http,Response}from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()

export class HttpService
{
    constructor(private m:Http)
    {

    }
    fetchData()
    {
      // return this.m.get("https://jsonplaceholder.typicode.com/users").map(result=>result.json());
      return this.m.get("http://localhost:3030/mydetails").map(result=>result.json());
      
    }
}

