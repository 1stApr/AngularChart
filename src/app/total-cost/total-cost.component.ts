import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { TotalCost } from '../total_cost';
import { takeUntil } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-total-cost',
  templateUrl: './total-cost.component.html',
  styleUrls: ['./total-cost.component.css']
})
export class TotalCostComponent implements OnInit {

  monthToDate = 0;
  estimatedSpend = 0;
  lastMonth = 0;
  changeFromLastMonth = 0;

  ngOnInit() {
    this.getTotalCost();
    
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }

  constructor(private dataService: DataService) { }
  totalCost: TotalCost[] = [];
  destroy$: Subject<boolean> = new Subject<boolean>();
  private REST_TOTAL_COST_API_SERVER = 'http://localhost:3000/totalCost';

  


  getTotalCost(){
    this.dataService.sendGetRequestTotalCostUrl(this.REST_TOTAL_COST_API_SERVER)
    .pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<any>)=>{
      console.log("GetTotalCost");
      this.totalCost = res.body;
      this.monthToDate = this.totalCost[0].monthToDate;
      this.estimatedSpend = this.totalCost[0].estimatedSpend;
      this.lastMonth = this.totalCost[0].lastMonth;
      this.changeFromLastMonth = this.totalCost[0].changeFromLastMonth;
    })
  }
}
