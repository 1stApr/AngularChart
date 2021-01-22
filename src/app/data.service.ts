import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { throwError } from 'rxjs';
import { Costing1 } from './costing';
import { Service1 } from './service';
import { TotalCost1 } from './total_cost';
@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private httpClient: HttpClient) { }

  // private REST_API_SERVER = 'http://localhost:3000/costing';
  // public sendGetRequest(){
  //   return this.httpClient.get<Costing[]>(this.REST_API_SERVER,{  params: new HttpParams({fromString: "_page=1&_limit=2000"}), observe: "response"});
  // }

  public sendGetRequestCostUrl(url: string){
    return this.httpClient.get<Costing1[]>(url, {  params: new HttpParams({fromString: "_page=1&_limit=2000"}), observe: "response"});
  }
  public sendGetRequestServiceUrl(url: string){
    return this.httpClient.get<Service1[]>(url, {  params: new HttpParams({fromString: "_page=1&_limit=2000"}), observe: "response"});
  }
  public sendGetRequestTotalCostUrl(url: string){
    return this.httpClient.get<TotalCost1[]>(url, {  params: new HttpParams({fromString: "_page=1&_limit=2000"}), observe: "response"});
  }
  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
