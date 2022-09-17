import { Component, OnInit } from '@angular/core';
import { CovidDataService } from '../covid-data.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  details: any;
  cdetail: any;

  constructor(public list:CovidDataService) {
    this.list.getGlobalStats().subscribe(data=>{
      this.details = data;
      this.cdetail = this.details.Global;
    })
   }

  ngOnInit(): void {
  }

}
