import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { AppComponent } from '../app.component';
import { HomeComponent } from '../home/home.component';
import { ServicesBreakdown } from '../services_breakdown';
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  servicesBreakdown = new ServicesBreakdown;
  public doughnutChartData: MultiDataSet = [[20,30,20,30,20]];
  public doughnutChartLabels: Label = ["EC2","EFS","OTHER","S3","SUPPORT"];
  public doughnutChartType: ChartType = "doughnut";
  public chartColors: Color[] = [{
    backgroundColor: ['#FFA1B5', '#86C7F3', '#FFE29A','#F1F2F4','#93D9D9']
  }];
  public options: any = {
    responsive: true,
    legend:{
      display: false

    },
  };

  ngOnInit() {
    console.log("Run PieChart Component")
    this.getServicesBreakdown();
  }
  getServicesBreakdown(){
    this.servicesBreakdown = HomeComponent.servicesBreakdown;
    this.setDataPieChart();
  }

  setDataPieChart(){
    let  dataNew: MultiDataSet= [
      [
        this.servicesBreakdown.EC2,
        this.servicesBreakdown.EFS,
        this.servicesBreakdown.OTHER,
        this.servicesBreakdown.S3,
        this.servicesBreakdown.SUPPORT,
      ]
    ];
    console.log(dataNew);
   this.doughnutChartData = dataNew;
  }

}
