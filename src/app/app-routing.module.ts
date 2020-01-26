import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SearchMapComponent } from './pages/search-map/search-map.component';
import { SearchHideMapComponent } from './pages/search-hide-map/search-hide-map.component';


const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "profile",
    component: ProfileComponent
  },
  {
    path: "search-map",
    component: SearchMapComponent
  },
  {
    path: "search-hide-map",
    component: SearchHideMapComponent
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
