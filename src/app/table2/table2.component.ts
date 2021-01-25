import { Component, OnInit} from '@angular/core';
import { ServicesBreakdown } from '../services_breakdown';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.css']
})
export class Table2Component implements OnInit  {

  servicesBreakdown = new ServicesBreakdown ;
  total = 0;
  ngOnInit(): void {
    console.log("Run ServicesBreakdown Component")
    this.getServicesBreakdown()
  }
  getServicesBreakdown(){
    this.servicesBreakdown = AppComponent.servicesBreakdown;
    this.total= this.servicesBreakdown.EC2+this.servicesBreakdown.EFS+this.servicesBreakdown.OTHER+this.servicesBreakdown.S3+this.servicesBreakdown.SUPPORT;
  }
}
