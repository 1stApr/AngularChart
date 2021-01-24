import { AfterViewInit ,Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from '../data.service';
import { takeUntil } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';
import { Subject } from 'rxjs';
import { ServicesBreakdown } from '../services_breakdown';

@Component({
  selector: 'app-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.css']
})
export class Table2Component implements OnInit  {

  servicesBreakdown = new ServicesBreakdown ;
  ngOnInit(): void {
    this.getServicesBreakdown()
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }

  constructor(private dataService: DataService) { }
  destroy$: Subject<boolean> = new Subject<boolean>();
  private REST_API_SERVER = 'http://localhost:3000/servicesBreakdown';

  getServicesBreakdown(){
    this.dataService.sendGetRequestServicesBreakdownUrl(this.REST_API_SERVER)
    .pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<any>)=>{
      console.log("GetServiceBreakdown");
      this.servicesBreakdown = res.body[0];
    })
  }

}
