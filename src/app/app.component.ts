import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { HttpResponse } from '@angular/common/http';
import { DataService } from './data.service';
import { Service } from './service';
import { ServicesBreakdown } from './services_breakdown';
import { TotalCost } from './total_cost';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  constructor(private dataService: DataService) { }

  public static dataServices: Service []=[];
  public static  servicesBreakdown = new ServicesBreakdown;
  public static totalCost =  new TotalCost;
  title = 'AngularChart';
  isShow = false;
  destroy$: Subject<boolean> = new Subject<boolean>();

  private REST_COST_API_SERVER = 'http://localhost:3000/costing';
  private REST_TOTAL_COST_API_SERVER = 'http://localhost:3000/totalCost';
  private REST_SERVICE_API_SERVER = 'http://localhost:3000/services';
  private REST_SERVICES_BREAKDOWN_API_SERVER = 'http://localhost:3000/servicesBreakdown';

  buttonClick(){
    console.log("buttonClick");
  }

  ngOnInit() {
    console.log("Run Home Component")
    this.getTotalCost();
    this.getServices();
    this.getServicesBreakdown();

  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
  getServices(){
    this.dataService.sendGetRequestServiceUrl(this.REST_SERVICE_API_SERVER)
    .pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<any>)=>{
      AppComponent.dataServices = res.body;
    })
  }

  getServicesBreakdown(){
    this.dataService.sendGetRequestServicesBreakdownUrl(this.REST_SERVICES_BREAKDOWN_API_SERVER)
    .pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<any>)=>{
      AppComponent.servicesBreakdown = res.body[0];
    })
  }
  getTotalCost(){
    this.dataService.sendGetRequestTotalCostUrl(this.REST_TOTAL_COST_API_SERVER)
    .pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<any>)=>{
      AppComponent.totalCost = res.body[0];
    })
  }





}
