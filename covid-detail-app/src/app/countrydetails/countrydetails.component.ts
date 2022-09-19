import { Component, OnInit } from '@angular/core';
import { CovidDataService } from '../covid-data.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {FormGroup, FormControl} from '@angular/forms';
import { countrydetails } from '../country';
import { DatePipe } from '@angular/common';
import { DateRange } from '@angular/material/datepicker';

@Component({
  selector: 'app-countrydetails',
  templateUrl: './countrydetails.component.html',
  styleUrls: ['./countrydetails.component.css']
})
export class CountrydetailsComponent implements OnInit {


  country:any;
  countryy:any
  deets:any;
  x : string='';
  details:countrydetails[]=[];
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  start!:string;
  s!:string;
  e!:string;
  end!:string;
  d: any;
  dd: any;
  cases:number=0;
  deaths:number=0;
  expand:boolean=false;

  constructor(public list:CovidDataService, private route: ActivatedRoute, public datepipe:DatePipe) {

  }
  ngOnInit(): void {
    this.x = String(this.route.snapshot.paramMap.get('countryname'))
    console.log(this.x)
    this.list.getCountryDetail().subscribe(data=>{
      this.countryy=data
      this.country=this.countryy
      //console.log(this.country)
      this.details = this.country.Countries;
      //console.log(this.details);
      this.deets = this.details.filter((c)=>c.Country===this.x)
      //console.log(this.deets)
    });
  }
  getResult(){
    this.expand = !this.expand;
    this.s = String(this.datepipe.transform(this.start,"yyyy-MM-dd"))
    this.e = String(this.datepipe.transform(this.end,"yyyy-MM-dd"))
    this.list.getDataByDate(this.x,String(this.s),String(this.e)).subscribe(data=>{
      this.d = data;
      this.dd=this.d;
      let x = this.dd[0].Confirmed;
      let y = this.dd[0].Deaths;
      for(let i=0;i<this.dd.length;++i){
        this.cases = this.dd[i].Confirmed;
        this.deaths = this.dd[i].Deaths;
      }
      this.cases = this.cases-x;
      this.deaths = this.deaths-y;
      console.log(this.cases,this.deaths);
    })
  }
}
