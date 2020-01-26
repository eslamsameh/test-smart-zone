import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-map-child',
  templateUrl: './search-map.component.html',
  styleUrls: ['./search-map.component.sass']
})
export class SearchMapComponent implements OnInit {
  latitude = 30.044281;
  longitude = 31.340002;
  zoom = 8;
  markers = [
   {
    latitude: 30.044281,
    longitude: 31.540002
   },
   {
    latitude: 30.044581,
    longitude: 31.240102
   },
   {
    latitude: 31.044881,
    longitude: 31.340102
   },
   {
    latitude: 30.044881,
    longitude: 30.442002
   }
  ]
  constructor() { }

  ngOnInit() {
  }

}
