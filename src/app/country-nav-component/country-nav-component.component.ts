import {Component, OnInit} from '@angular/core';
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-country-nav-component',
  templateUrl: './country-nav-component.component.html',
  styleUrls: ['./country-nav-component.component.css'],
  providers: [DataService]
})
export class CountryNavComponentComponent implements OnInit {

  constructor(private dataService: DataService) {}

  countries = [];

  ngOnInit(): void {
    this.dataService.getCountryData().subscribe(data => {
      // console.log('in country', data);
      this.countries = data;
    });
  }

}