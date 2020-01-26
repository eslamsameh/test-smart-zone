import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchHideMapComponent } from './search-hide-map.component';

describe('SearchHideMapComponent', () => {
  let component: SearchHideMapComponent;
  let fixture: ComponentFixture<SearchHideMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchHideMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchHideMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
