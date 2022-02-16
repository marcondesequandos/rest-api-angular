import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CountryListItem } from './country-list-item';


@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private api  = "https://restcountries.com/v2/all?fields=name,capital,region,population,flag"


  constructor(private http: HttpClient) { }



  public getCountries() {
    return this.http.get<CountryListItem[]>(this.api);

  }










}
