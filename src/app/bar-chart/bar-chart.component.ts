import { OnInit, ViewChild } from '@angular/core';
import { Component, Input } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { AppComponent } from '../app.component';
import { HomeComponent } from '../home/home.component';
import { Service } from '../service';
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})

export class BarChartComponent implements OnInit {

  public barChartData:any[]= [{data:[10,20,30,40,50,60,70],label: "OnDemandHours"}];
  dataServices: Service []=[];
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,

    legend:{
      display: false

    },
  };

  public barChartLabels: string[] = ["T2.MEDIUM", "T2.NANO","T2.LARGE","M4.LARGE","T2.MICRO","M3.MEDIUM","T2.SMALL"];
  public barChartType: string = 'horizontalBar';
  public barChartLegend: boolean = true;

  public barChartColors: Array<any> = [
    {
      backgroundColor: "#34aab3",
    }
  ];

  @Input() chartType: string="bar";
  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

  ngOnInit(): void {
    console.log("Run BarChart Component")
    this.getServices();
  }

  getServices(){
    this.dataServices = HomeComponent.dataServices;
    this.setDataBarChart();
  }

  setDataBarChart():any{
    console.log("SetDataBarChart")
    try {
      let  dataNew = [
        {
          data:[
            this.dataServices[0].onDemandHours,
            this.dataServices[1].onDemandHours,
            this.dataServices[2].onDemandHours,
            this.dataServices[3].onDemandHours,
            this.dataServices[4].onDemandHours,
            this.dataServices[5].onDemandHours,
            this.dataServices[6].onDemandHours
          ],
          label:"OnDemandHours"
        }
      ];
      this.barChartData = dataNew;

    } catch (error) {

    }

  }

}


