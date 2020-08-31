import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterssimplepageComponent } from './characterssimplepage/characterssimplepage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LocationsPageComponent } from './locations-page/locations-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomepageComponent },
  { path: 'characters', component: CharacterssimplepageComponent},
  { path: 'locations', component: LocationsPageComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
