import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { countrydetails } from './country';

@Injectable({
  providedIn: 'root'
})
export class CovidDataService {

  constructor(private country: HttpClient) {}

    getCountryList(){
      let url="https://api.covid19api.com/summary";
      return this.country.get(url);
    }

    getCountryDetail(){
      let url="https://api.covid19api.com/summary";
      return this.country.get<countrydetails>(url);
    }
    getGlobalStats(){
      let url = "https://api.covid19api.com/summary";
      return this.country.get(url);
    }
    getDataByDate(countryname:string,start:String,end:String){
      let x = "https://api.covid19api.com/country/";
      let country = countryname;
      let y = "?from="+start+"&to="+end;
      let url = x+country+y;
      console.log(url)
      return this.country.get(url);
    }
}


