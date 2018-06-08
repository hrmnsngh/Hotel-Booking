import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelExternalDataComponent } from './hotel-external-data.component';

describe('HotelExternalDataComponent', () => {
  let component: HotelExternalDataComponent;
  let fixture: ComponentFixture<HotelExternalDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelExternalDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelExternalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
