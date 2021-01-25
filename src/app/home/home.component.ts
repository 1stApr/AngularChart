import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DataService } from '../data.service';
import { HttpResponse } from '@angular/common/http';
import { Service } from '../service';
import { TotalCost } from '../total_cost'
import { ServicesBreakdown } from '../services_breakdown';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private REST_COST_API_SERVER = 'http://localhost:3000/costing';
  private REST_TOTAL_COST_API_SERVER = 'http://localhost:3000/totalCost';
  private REST_SERVICE_API_SERVER = 'http://localhost:3000/services';
  private REST_SERVICES_BREAKDOWN_API_SERVER = 'http://localhost:3000/servicesBreakdown';

  public static dataServices: Service []=[];
  public static  servicesBreakdown = new ServicesBreakdown;
  public static totalCost =  new TotalCost;

  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(private dataService: DataService) { }

  ngOnInit() {
    console.log("Run Home Component")
    this.getTotalCost();
    this.getServices();
    this.getServicesBreakdown();

  }
  ngOnDestroy() {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }
  getServices(){
    this.dataService.sendGetRequestServiceUrl(this.REST_SERVICE_API_SERVER)
    .pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<any>)=>{
      HomeComponent.dataServices = res.body;
    })
  }

  getServicesBreakdown(){
    this.dataService.sendGetRequestServicesBreakdownUrl(this.REST_SERVICES_BREAKDOWN_API_SERVER)
    .pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<any>)=>{
      console.log("GetDataPieChart");
      HomeComponent.servicesBreakdown = res.body[0];
    })
  }
  getTotalCost(){
    this.dataService.sendGetRequestTotalCostUrl(this.REST_TOTAL_COST_API_SERVER)
    .pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<any>)=>{
      console.log("GetTotalCost");
      HomeComponent.totalCost = res.body[0];
    })
  }

}
