import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-map',
  templateUrl: './search-map.component.html',
  styleUrls: ['./search-map.component.sass']
})
export class SearchMapComponent implements OnInit {
  searchClass = "col-lg-12";
  searchMap = false;
  constructor() { }

  ngOnInit() {
  }
  onValueChange(val) {
    if (val === true) {
      this.searchClass = "col-lg-8";
      this.searchMap = true;
    } else {
      this.searchClass = "col-lg-12";
      this.searchMap = false;
    }
  }

}
