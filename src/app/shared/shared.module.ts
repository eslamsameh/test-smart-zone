import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoryComponent } from './category/category.component';
import { ProfileMapComponent } from './profile-map/profile-map.component';
import { AgmCoreModule } from '@agm/core';
import { SearchMapComponent } from './search-map/search-map.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, ProductComponent, CategoryComponent, ProfileMapComponent, SearchMapComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgbRatingModule,
    AgmCoreModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    CategoryComponent,
    ProfileMapComponent,
    SearchMapComponent
  ]
})
export class SharedModule { }
