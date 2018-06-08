import { Component, OnInit } from '@angular/core';
import { HotelDataService } from '../hotel-data.service';

@Component({
  selector: 'app-hotel-external-data',
  templateUrl: './hotel-external-data.component.html',
  styleUrls: ['./hotel-external-data.component.css'],
  providers: [HotelDataService]
})
export class HotelExternalDataComponent implements OnInit {

  hotels=[];
  constructor(private hotelData: HotelDataService) { }

  ngOnInit() {
    this.hotelData.getHotels()
      .subscribe(resHotelData=>this.hotels=resHotelData);
    
  }

}
