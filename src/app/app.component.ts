import { Component } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { Costing } from './costing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularChart';
  isShow = false;
  buttonClick(){
    console.log("getData");
  }
}
