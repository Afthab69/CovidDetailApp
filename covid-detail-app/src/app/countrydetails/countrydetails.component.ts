import { Component, OnInit } from '@angular/core';
import { CovidDataService } from '../covid-data.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {FormGroup, FormControl} from '@angular/forms';
import { countrydetails } from '../country';

@Component({
  selector: 'app-countrydetails',
  templateUrl: './countrydetails.component.html',
  styleUrls: ['./countrydetails.component.css']
})
export class CountrydetailsComponent implements OnInit {

  country:any;
  countryy:any
  deets:any;
  details:countrydetails[]=[];
  constructor(public list:CovidDataService, private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    let x = this.route.snapshot.paramMap.get('countryname')
    // console.log(x)
    this.list.getCountryDetail().subscribe(data=>{
      this.countryy=data
      this.country=this.countryy
      console.log(this.country)
      this.details = this.country.Countries;
      console.log(this.details);
      this.deets = this.details.filter((c)=>c.Country===x)
      console.log(this.deets);
    });
  }
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

}
