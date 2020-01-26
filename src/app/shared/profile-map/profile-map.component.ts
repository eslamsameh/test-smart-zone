import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-map',
  templateUrl: './profile-map.component.html',
  styleUrls: ['./profile-map.component.sass']
})
export class ProfileMapComponent implements OnInit {
  latitude = 30.044281;
  longitude = 31.340002;
  zoom = 8;
  constructor() { }

  ngOnInit() {
  }

}
