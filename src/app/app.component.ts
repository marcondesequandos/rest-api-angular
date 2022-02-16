import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'


const API = 'https://restcountries.com/v2/all?fields=name,capital,region,population,flag'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'rest-countries-api';

   ngOnInit(): void {

   }



}
