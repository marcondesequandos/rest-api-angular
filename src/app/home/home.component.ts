import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CountriesService } from '../countries/countries.service';
import { CountryListItem } from '../countries/country-list-item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  countriesList$: Observable<CountryListItem[]>

  constructor(private countriesSvc: CountriesService) {}

  ngOnInit(): void {
    // this.countriesSvc.getCountries().subscribe(
    //   (res)=> { console.log(res) })

    this.countriesList$ = this.countriesSvc.getCountries()

    console.log(this.countriesList$)

  }

}
