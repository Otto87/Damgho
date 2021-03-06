import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BreweryModel } from './Common/Brewery';

@Injectable({
  providedIn: 'root'
})
export class BrewsService {

  constructor(private httpClient: HttpClient) { }

  getBeerAsync(): Promise<BreweryModel[]> {
    return this.httpClient.get<BreweryModel[]>('https://api.openbrewerydb.org/breweries').toPromise();
  }

  getValuesAsync(): Promise<string[]> {
    return this.httpClient.get<any>('https://localhost:5005/api/MyApi').toPromise();
  }
}
