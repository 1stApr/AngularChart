import {Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AppComponent } from '../app.component';
export interface ServiceTable {
  id: number;
  instanceType: string;
  onDemandHours: number;
  reservedHours: number;
  totalHours: number;
  coverage: number;
}
@Component({
  selector: 'app-table-chart',
  templateUrl: './table-chart.component.html',
  styleUrls: ['./table-chart.component.css']
})
export class TableChartComponent implements OnInit  {

  ELEMENT_DATA: ServiceTable[] = [];

  displayedColumns: string[] = ['id', 'instanceType', 'onDemandHours', 'reservedHours', 'totalHours','coverage'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;
  ngOnInit(){
    console.log("Run Table 2 Component")
    this.setDataTable();
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  setDataTable(){
    console.log("SetDataTable");
    this.dataSource = new MatTableDataSource(AppComponent.dataServices);
  }
}
