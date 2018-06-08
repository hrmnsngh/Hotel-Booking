import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import {Hotel} from './models/hotel';
import 'rxjs/add/operator/map';

@Injectable()
export class HotelDataService {

  private _url:string = "http://localhost:3000/hotelList/all";
  
  static hotel: any;
  static searchString:string;

  constructor(private _http: Http) { 
    //this.hotel = new Hotel();
  }

  getHotels()
  {
    return this._http.get(this._url)
    .map((response: Response)=> response.json());
  }

  storeData(hotel: any){
   // console.log(JSON.stringify(hotel));
    HotelDataService.hotel = hotel;
  }



  getData():any{
   // console.log(JSON.stringify(HotelDataService.hotel));
    return HotelDataService.hotel;
  }

  storeSearchData(searchString:string){
    HotelDataService.searchString=searchString;
    //console.log(JSON.stringify(searchString));

  }

  getSearchData():string{
    // console.log(JSON.stringify(HotelDataService.hotel));
     return HotelDataService.searchString;
   }


}
