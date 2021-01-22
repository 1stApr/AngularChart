import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})

export class BarChartComponent {

  type = 'BarChart';
  data = HomeComponent.dataBarChart
  columnNameBarChart = HomeComponent.columnNameBarChart
  options = {
    width: 550,
    height: 300
  };

}
