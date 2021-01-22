import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent  {

  title = "";
  type = 'PieChart';
  data = HomeComponent.dataPieChart;
  options2 = {
    pieHole:0.4,
    colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
    is3D: false,
    legend:false,
    width: 450,
    height: 300
  };

}
