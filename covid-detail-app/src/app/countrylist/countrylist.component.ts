import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CovidDataService } from '../covid-data.service';


@Component({
  selector: 'app-countrylist',
  templateUrl: './countrylist.component.html',
  styleUrls: ['./countrylist.component.css']
})
export class CountrylistComponent implements OnInit {
  countryname: any;
  details: any;

  constructor(public list:CovidDataService) {
    this.list.getCountryList().subscribe(data=> {
      this.details = data;
      this.countryname = this.details.Countries;
      // console.log(this.details);
    })
   }

  ngOnInit(): void {

  }

}
