import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CountrylistComponent } from './countrylist/countrylist.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CountrydetailsComponent } from './countrydetails/countrydetails.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DatePipe } from '@angular/common';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CountrylistComponent,
    HomepageComponent,
    CountrydetailsComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule
  ],
  providers: [
    DatePipe,
  ],
  bootstrap: [AppComponent],
})


export class AppModule { }
