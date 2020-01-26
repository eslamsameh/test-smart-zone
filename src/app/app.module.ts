import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SearchMapComponent } from './pages/search-map/search-map.component';
import { SearchHideMapComponent } from './pages/search-hide-map/search-hide-map.component';
import { SharedModule } from './shared/shared.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from "@agm/core";
import { UiSwitchModule } from 'ngx-ui-switch';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    SearchMapComponent,
    SearchHideMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NgbModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyAgAtnMefRdt45U6mw5Jbv8aM1K8CNvBt4",
      libraries: ["places", "geometry",]
    }),
    UiSwitchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
