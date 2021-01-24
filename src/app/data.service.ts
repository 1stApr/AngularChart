import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { throwError } from 'rxjs';
import { Costing } from './costing';
import { Service } from './service';
import { TotalCost } from './total_cost';
import { ServicesBreakdown } from './services_breakdown';
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
    return this.httpClient.get<Costing[]>(url, {  params: new HttpParams({fromString: "_page=1&_limit=2000"}), observe: "response"});
  }
  public sendGetRequestServiceUrl(url: string){
    return this.httpClient.get<Service[]>(url, {  params: new HttpParams({fromString: "_page=1&_limit=2000"}), observe: "response"});
  }
  public sendGetRequestServicesBreakdownUrl(url: string){
    return this.httpClient.get<ServicesBreakdown[]>(url, {  params: new HttpParams({fromString: "_page=1&_limit=2000"}), observe: "response"});
  }

  public sendGetRequestTotalCostUrl(url: string){
    return this.httpClient.get<TotalCost[]>(url, {  params: new HttpParams({fromString: "_page=1&_limit=2000"}), observe: "response"});
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
  }
}
