import { Component, OnInit } from '@angular/core';
import { HotelDataService } from '../hotel-data.service';
import { SearchPageComponent } from '../search-page/search-page.component';
import { Hotel } from '../models/hotel';



@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css'],
  providers: [HotelDataService,SearchPageComponent, Hotel],
})
export class ResultPageComponent implements OnInit {

  searchString:string;
  hotels=[];
  
  temporaryHotelData: Object[];
  HotelData: Object[];
  location: string = "";
 // receivedHotelLocation: string = "";
  numberOfHotelsToDisplay: number;
  validData: boolean = false;
  hotel:any;
  constructor(private hotelData: HotelDataService) { }

  ngOnInit() {

    this.searchString=this.hotelData.getSearchData();

    this.hotelData.getHotels()
      .subscribe(resHotelData=>this.saveData(resHotelData));
    
     
      //this.requiredHotels={name: 'this.searchString'};
      
      
  }
  
  saveData(data): void {debugger
    this.temporaryHotelData = data.filter(hotel =>
      {
        this.location= hotel.address.location;
      if(this.location.toLowerCase().search(this.searchString.toLowerCase()) != -1)
        {
          return hotel;
        }
      }
    );
    this.temporaryHotelData.length == 0 ? this.validData = false : this.validData = true;
    //this.HotelData = this.temporaryHotelData.slice(0, this.numberOfHotelsToDisplay);
    console.log(this.searchString);
    console.log((this.temporaryHotelData));
  }  
  

  viewHotel(hotel){
    this.hotel=hotel;
    this.hotelData.storeData(this.hotel);
  }

}
