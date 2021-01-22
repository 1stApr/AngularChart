import { AfterViewInit ,Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


export interface Service {
  id: number;
  instanceType: string;
  onDemandHours: number;
  reservedHours: number;
  totalHours: number;
  coverage: number;
}

const ELEMENT_DATA: Service[] = [
  {id:1, instanceType: 'T2.MEDIUM',onDemandHours:  102.2 ,reservedHours: 0 ,totalHours: 4125 ,coverage: 12.1},
  {id:2, instanceType: 'T2.NANO',onDemandHours:   1253.6 ,reservedHours: 0 ,totalHours: 142 ,coverage: 52.2},
  {id:3, instanceType: 'T2.LARGE',onDemandHours: 78.36 ,reservedHours: 0 ,totalHours: 1251 ,coverage: 19.3},
  {id:4, instanceType: 'M4.LARGE',onDemandHours:  25.69 ,reservedHours: 0 ,totalHours: 2125 ,coverage: 72.9},
  {id:5, instanceType: 'T2.MICRO',onDemandHours:  7785 ,reservedHours: 0 ,totalHours: 1225 ,coverage: 48.5},
  {id:6, instanceType: 'M3.MEDIUM',onDemandHours:  3185.2 ,reservedHours: 0 ,totalHours: 25 ,coverage: 12.3},
  {id:7, instanceType: 'T2.SMALL',onDemandHours:  152.6 ,reservedHours: 0 ,totalHours: 5 ,coverage: 21.6}
];

@Component({
  selector: 'app-table-chart',
  templateUrl: './table-chart.component.html',
  styleUrls: ['./table-chart.component.css']
})
export class TableChartComponent implements AfterViewInit  {

  displayedColumns: string[] = ['id', 'instanceType', 'onDemandHours', 'reservedHours', 'totalHours','coverage'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

}
