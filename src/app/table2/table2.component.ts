import { AfterViewInit ,Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from '../data.service';
import { HomeComponent } from '../home/home.component';
import { TotalCost } from '../total_cost';
import { takeUntil } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';
import { Subject } from 'rxjs';
export interface Service {

  instanceType: string;
  onDemandHours: number;

}

let ELEMENT_DATA: Service[] = [
  {instanceType:'EC2',onDemandHours:  102.2 },
  {instanceType:'EFS',onDemandHours:   123.6 },
  {instanceType:'OTHER',onDemandHours: 850.36 },
  {instanceType:'S3',onDemandHours:  125.69 },
  {instanceType:'SUPPORT',onDemandHours:  1785},
  {instanceType:'TOTAL',onDemandHours:  1285.2 },

];

@Component({
  selector: 'app-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.css']
})
export class Table2Component implements AfterViewInit, OnInit  {
  constructor(private dataService: DataService) { }
  totalCost: TotalCost[] = [];
  destroy$: Subject<boolean> = new Subject<boolean>();
  private REST_TOTAL_COST_API_SERVER = 'http://localhost:3000/totalCost';
  ngOnInit() {
    this.getTotalCost();
  }

  getTotalCost(){
    this.dataService.sendGetRequestTotalCostUrl(this.REST_TOTAL_COST_API_SERVER)
    .pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<any>)=>{
      console.log("TotalCost");
      this.totalCost = res.body;
      console.log(this.totalCost);
    })
  }

  displayedColumns: string[] = ['instanceType', 'onDemandHours'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }
}
