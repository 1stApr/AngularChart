import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DataService } from '../data.service';
import { HttpResponse } from '@angular/common/http';
import { Costing } from '../costing';
import { Service } from '../service';
import { TotalCost } from '../total_cost'
import { MatDateRangePicker } from '@angular/material/datepicker';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public static dataTable = [
    ['T2.MEDIUM',  102.2 , 0 , 4125 , 12.1],
    ['T2.NANO',   1253.6 , 0 , 142 , 52.2],
    ['T2.LARGE', 78.36 , 0 , 1251 , 19.3],
    ['M4.LARGE',  25.69 , 0 , 2125 , 72.9],
    ['T2.MICRO',  7785 , 0 , 1225 , 48.5],
    ['M3.MEDIUM',  3185.2 , 0 , 25 , 12.3],
    ['T2.SMALL',  152.6 , 0 , 5 , 21.6]
  ];
  public static columnNamesTable = ["INSTANCE TYPE", "ON DEMAND HOURS","RESERVED HOURS","TOTAL HOURS","COVERAGE"];

  public static dataPieChart = [
    ['EC2',  2055.97 ],
    ['EFS',   0 ],
    ['OTHER', 234.32 ],
    ['S3',  10.69 ],
    ['SUPPORT',  0],
  ];

  public static dataBarChart = [
    ['T2.MEDIUM',  1102.2 ],
    ['T2.NANO',   1253.6 ],
    ['T2.LARGE', 780.36 ],
    ['M4.LARGE',  250.69 ],
    ['T2.MICRO',  7785],
    ['M3.MEDIUM',  3185.2 ],
    ['T2.SMALL',  552.6 ]
  ];
  public static columnNameBarChart = ['INSTANCE TYPE', 'On DEMAND HOURS'];

  private REST_COST_API_SERVER = 'http://localhost:3000/costing';
  private REST_TOTAL_COST_API_SERVER = 'http://localhost:3000/totalCost';
  private REST_SERVICE_API_SERVER = 'http://localhost:3000/services';

  costings: Costing[] = [];
  services: Service[] = [];
  totalCost: TotalCost[] = [];
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private dataService: DataService) { }
  ngOnInit() {
    // this.getService();
    // this.getCost();
  }

  getData(){
  }
  getTotalCost(){
    this.dataService.sendGetRequestTotalCostUrl(this.REST_TOTAL_COST_API_SERVER).pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<any>)=>{
      console.log(res);
      this.totalCost = res.body;
    })
  }

  getCost(){
    this.dataService.sendGetRequestCostUrl(this.REST_COST_API_SERVER).pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<any>)=>{
      console.log(res);
      this.costings = res.body;
    })
  }
  getService(){
    this.dataService.sendGetRequestServiceUrl(this.REST_SERVICE_API_SERVER).pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<any>)=>{
      console.log(res.body);
      this.services = res.body;
    })
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }
}
