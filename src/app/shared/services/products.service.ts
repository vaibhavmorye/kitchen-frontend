
import { throwError as observableThrowError, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, catchError, tap } from "rxjs/operators";
import { IProductOrder } from '../../model/productOrder';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private _kitchen_api = "http://localhost:5000/"
  readonly httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private _http: HttpClient) {
  }

  getOrderes(): Observable<any> {
    let result;
    let url = this._kitchen_api + 'getallFoodItems';
    return this._http.get<IProductOrder[]>(url).pipe(tap(/* data => console.log('All' + JSON.stringify(data) */),
      catchError(error => {
        return this.handleError(error)
      }));

  }


  addProduct(product): Observable<any> {
    let url = this._kitchen_api + "addProduct";
    return this._http.post(url, JSON.stringify(product), this.httpOptions)
      .pipe(
        catchError(error => {
          return this.handleError(error)
        }));
  }

  placeOrder(order) {
   // console.log("place order" + JSON.stringify(order));
    let url = this._kitchen_api + "placeOrder";
    return this._http.post(url, order, this.httpOptions)
      .pipe(
        catchError(error => {
          return this.handleError(error)
        }));
  }

  addPrediction(prediction)
  {
    let url = this._kitchen_api + "addPrediction";
    return this._http.post(url, prediction, this.httpOptions)
      .pipe(
        catchError(error => {
          return this.handleError(error)
        }));
  }

  generateReports(dates){
    let url = this._kitchen_api + "generatereports";
    return this._http.post(url, dates, this.httpOptions)
      .pipe(
        catchError(error => {
          return this.handleError(error)
        }));

  }

  getAllFoodName(){
    let result;
    let url = this._kitchen_api + 'getAllFoodName';
    return this._http.get<IProductOrder[]>(url).pipe(tap(/* data => console.log('All' + JSON.stringify(data) */),
      catchError(error => {
        return this.handleError(error)
      }));
  }
  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return observableThrowError(err.message);
  }
}
