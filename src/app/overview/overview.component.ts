import { Component, OnInit } from '@angular/core';
import { Country } from '../models/country';
import { CountriesService } from '../services/countries.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  countries: Country[];

  constructor(private countriesService: CountriesService) { }

  ngOnInit() {
    this.countriesService.getCountries().subscribe(res => this.countries = res);
  }
}
