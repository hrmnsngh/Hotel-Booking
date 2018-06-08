import { Component, OnInit } from '@angular/core';
import { HotelDataService } from '../hotel-data.service';


@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
  providers: [HotelDataService]
})
export class SearchPageComponent implements OnInit {

  searchString: string;
  noOfHotels: number;
  constructor(private hotelData: HotelDataService) { }

  ngOnInit() {
  }

  searchHotel(searchString){
    this.searchString=searchString;
    console.log(this.searchString);
    this.hotelData.storeSearchData(this.searchString);

   
  }
}
