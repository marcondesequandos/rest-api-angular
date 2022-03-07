import { Component, OnInit } from '@angular/core';
import { Theme, ThemeService } from './theme/theme.service';
import { Observable } from 'rxjs';


const API = 'https://restcountries.com/v2/all?fields=name,capital,region,population,flag'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'rest-countries-api';

  theme: string;

  constructor (private themeService: ThemeService) {}

   ngOnInit(): void {
     const value = this.themeService.mode$.subscribe(
       (res)=> this.theme = res
     );
     console.log(this.theme)
   }



}
