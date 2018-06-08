import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookHotelPageComponent } from './book-hotel-page.component';

describe('BookHotelPageComponent', () => {
  let component: BookHotelPageComponent;
  let fixture: ComponentFixture<BookHotelPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookHotelPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookHotelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
