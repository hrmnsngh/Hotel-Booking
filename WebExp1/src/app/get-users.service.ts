import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from './../environments/environment';


@Injectable()
export class GetUsersService {
  userDetails: any;

  private loginURL: string = environment.baseUrl;

  constructor(private _http: Http) { }

  loginAttempt() {
  }
  searchUser() {
  }

}
