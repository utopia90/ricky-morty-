import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RickyMortyService {

  constructor(private httpClient: HttpClient) { }

  getCharacters() {
    return this.httpClient.get(environment.url + 'character/');
  };

  getLocation() {
    return this.httpClient.get(environment.url + 'location/');
  };
}