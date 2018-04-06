import { Component, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, JsonpModule } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { User } from './Models/users';

@Injectable()
export class LoginService {

  user: any;
  users: any;
  userId = 0;

  constructor(private http: Http) {
   // let obj;
   // this.getJSON().subscribe(data => obj = data, error => console.log(error));
  //  console.log(obj.value);

  }

  /*public getJSON(): Observable <any> {
    this.http.get('assets/userDetails.json').map((response: Response) => {
        console.log('mock data ' + response.json());
        return response.json();
    }
    ).catch(this.handleError);
}*/

/*public getJSON() {
  console.log(localStorage);
 // let people;
  this.http.get('assets/userDetails.json').subscribe((res: Response) => localStorage = res.json());
  console.log('Mock Data : ' + localStorage);
}*/

storeData(user) {
  if (localStorage) {
    console.log('Local Storage is available');
    this.userId = this.userId + 1;
    localStorage.setItem('UserID ' + this.userId + ' : ', user.toSring());
    console.log(localStorage);
    } else {
    console.log('Local Storage is not avaiable');
  }
}
}
