import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { TableChartComponent } from './table-chart/table-chart.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { DemoMaterialModule } from './material-module';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { Table2Component } from './table2/table2.component';
import { TotalCostComponent } from './total-cost/total-cost.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TableChartComponent,
    PieChartComponent,
    BarChartComponent,
    Table2Component,
    TotalCostComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    GoogleChartsModule,
    DemoMaterialModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }