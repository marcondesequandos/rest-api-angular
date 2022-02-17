import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CountriesService } from '../countries/countries.service';
import { CountryCardComponent } from '../components/country-card/country-card.component';


@NgModule({
  declarations: [
    HomeComponent,
    CountryCardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  providers: [CountriesService],
  exports: [HomeComponent]
})
export class HomeModule { }
