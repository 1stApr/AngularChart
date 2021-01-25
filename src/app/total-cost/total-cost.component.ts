import { Component, OnInit } from '@angular/core';
import { TotalCost } from '../total_cost';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-total-cost',
  templateUrl: './total-cost.component.html',
  styleUrls: ['./total-cost.component.css']
})
export class TotalCostComponent implements OnInit {

  totalCost =  new TotalCost;

  ngOnInit() {
    console.log("Run TotalCost Component")
    this.getTotalCost();

  }

  getTotalCost(){
    this.totalCost =  AppComponent.totalCost;
  }
}
