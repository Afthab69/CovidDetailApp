import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountrydetailsComponent } from './countrydetails/countrydetails.component';
import { CountrylistComponent } from './countrylist/countrylist.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomepageComponent },
  { path: 'countries-list', component: CountrylistComponent },
  { path: 'details/:countryname', component: CountrydetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
