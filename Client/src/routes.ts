import { Routes } from '@angular/router';
import { HomePageComponent } from './app/home-page/home-page.component';
import { SearchPageComponent } from './app/search-page/search-page.component';
import { ResultPageComponent } from './app/result-page/result-page.component';
import { BookHotelPageComponent } from './app/book-hotel-page/book-hotel-page.component';
import { ViewHotelPageComponent } from './app/view-hotel-page/view-hotel-page.component';

export const routes: Routes = [
    {path:'',component: HomePageComponent},
    {path:'search', component: SearchPageComponent},
    {path:'result', component: ResultPageComponent},
    {path: 'bookhotel', component: BookHotelPageComponent},
    {path: 'viewhotel', component: ViewHotelPageComponent}
];