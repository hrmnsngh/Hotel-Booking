import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from '../models/hotel';
import { HotelDataService } from '../hotel-data.service';

@Component({
  selector: 'app-view-hotel-page',
  templateUrl: './view-hotel-page.component.html',
  styleUrls: ['./view-hotel-page.component.css'],
  providers: [Hotel]
  
})
export class ViewHotelPageComponent implements OnInit {

  
  selectedHotel:any; 
  
  
  constructor(private hotelData: HotelDataService) { }

  ngOnInit() {
    this.selectedHotel = this.hotelData.getData();
      ;
    
  }
 
  

}
