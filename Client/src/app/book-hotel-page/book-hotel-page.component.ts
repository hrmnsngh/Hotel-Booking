import { Component, OnInit } from '@angular/core';
import { HotelDataService } from '../hotel-data.service';

@Component({
  selector: 'app-book-hotel-page',
  templateUrl: './book-hotel-page.component.html',
  styleUrls: ['./book-hotel-page.component.css'],
  providers: [HotelDataService]
})
export class BookHotelPageComponent implements OnInit {

  selectedHotel: any;
  userName: any;
  userAddress: any;
  userLocation: any;
  userZip: any;
  submitted: Boolean = false;


  constructor(private hotelData: HotelDataService) { }
  ngOnInit() {
    this.selectedHotel = this.hotelData.getData();
  }

  saveData() {
    this.submitted = true;
  }

}
