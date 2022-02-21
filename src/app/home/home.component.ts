import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries/countries.service';
import { CountryListItem } from '../countries/country-list-item';

const REGIONS = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania', 'None'];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  private countriesList: CountryListItem[];
  searchFilter?: string;
  regionFilter?: string;
  regionOptions = REGIONS;

  constructor(private countriesSvc: CountriesService) {}

  ngOnInit(): void {
    // this.countriesSvc.getCountries().subscribe(
    //   (res)=> { console.log(res) })

    this.countriesSvc
      .getCountries()
      .subscribe((countries) => (this.countriesList = countries));
  }

  get countries() {
    console.log(this.searchFilter);
    console.log(this.regionFilter);
    console.log(this.countriesList[0].name);
    return this.countriesList
      ? this.countriesList
          .filter((country) =>
            this.searchFilter
              ? country.name.toLowerCase().startsWith(this.searchFilter.toLowerCase())
              : country
          )
          .filter((country) =>
            (this.regionFilter && this.regionFilter !== 'None')
              ? country.region.includes(this.regionFilter)
              : country
          )
      : this.countriesList;
  }
}
