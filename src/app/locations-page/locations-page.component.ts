import { Component, OnInit } from '@angular/core';
import { RickyMortyService } from './../rickymorty.service';


@Component({
  selector: 'app-locations-page',
  templateUrl: './locations-page.component.html',
  styleUrls: ['./locations-page.component.scss']
})
export class LocationsPageComponent implements OnInit {
  locations;
  constructor(private RickyMortyService: RickyMortyService) {}

  ngOnInit(){
    this.RickyMortyService.getLocation().subscribe((res: any) => {
      this.locations = res.results;
    });

  }

}
