import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GalleryComponent } from './gallery/gallery.component';
import { CharacterssimplepageComponent } from './characterssimplepage/characterssimplepage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MenuComponent } from './menu/menu.component';
import { LocationsComponent } from './locations/locations.component';
import { LocationsPageComponent } from './locations-page/locations-page.component'; // para usar la api

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    CharacterssimplepageComponent,
    HomepageComponent,
    MenuComponent,
    LocationsComponent,
    LocationsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }