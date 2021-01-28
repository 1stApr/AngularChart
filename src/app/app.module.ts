import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
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
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RequestComponent } from './request/request.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PieChartComponent,
    BarChartComponent,
    Table2Component,
    TotalCostComponent,
    TableChartComponent,

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
    ChartsModule,
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent},
      {path: 'request', component: RequestComponent},
      {path: 'home', component: HomeComponent},
      {path: '', redirectTo: '/login', pathMatch: 'full'},
    ]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
