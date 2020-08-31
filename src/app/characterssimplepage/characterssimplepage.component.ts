import { Component, OnInit } from '@angular/core';
import { RickyMortyService } from './../rickymorty.service';

@Component({
  selector: 'app-characterssimplepage',
  templateUrl: './characterssimplepage.component.html',
  styleUrls: ['./characterssimplepage.component.scss']
})
export class CharacterssimplepageComponent implements OnInit {

  characters;
  constructor(private RickyMortyService: RickyMortyService) {}

  ngOnInit(){
    this.RickyMortyService.getCharacters().subscribe((res: any) => {
      this.characters = res.results;
    });
  
}

}
