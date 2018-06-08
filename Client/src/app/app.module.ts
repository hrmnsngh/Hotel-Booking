import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ResultPageComponent } from './result-page/result-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { RouterModule } from '@angular/router';
import { routes } from '../routes';
import { ViewHotelPageComponent } from './view-hotel-page/view-hotel-page.component';
import { BookHotelPageComponent } from './book-hotel-page/book-hotel-page.component';
import { IntegratedTestWithTemplateComponent } from './integrated-test-with-template/integrated-test-with-template.component';
import { HotelExternalDataComponent } from './hotel-external-data/hotel-external-data.component';
import { FormsModule } from '@angular/forms';

import {HotelDataService} from './hotel-data.service';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ResultPageComponent,
    SearchPageComponent,
    ViewHotelPageComponent,
    BookHotelPageComponent,
    IntegratedTestWithTemplateComponent,
    HotelExternalDataComponent
  ],
  imports: [
    BrowserModule,HttpModule,FormsModule,
    RouterModule.forRoot(
      /*[
      {path:'SearchPage',component: SearchPageComponent},
    ]*/
    routes
      
    )
  ], 
  providers: [HotelDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
