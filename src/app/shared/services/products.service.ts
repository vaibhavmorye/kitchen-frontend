
import { throwError as observableThrowError, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, catchError , tap} from "rxjs/operators";
import { IProduct } from '../../model/product';
import { IProductOrder } from '../../model/productOrder';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private _kitchen_api = "http://localhost:5000/"


  constructor(private _http: HttpClient) {
  }

  getOrderes(): Observable<any> {
    let result;
    let url = this._kitchen_api+'getallFoodItems';
    return this._http.get<IProductOrder[]>(url).pipe(tap(/* data => console.log('All' + JSON.stringify(data) */),
      catchError(error => {
        return this.handleError(error)
      }));

  }


  addProduct(product): Observable<any> {
    let result;
    let url = this._kitchen_api + "addProduct";
    return this._http.post(url, JSON.stringify(product),
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) })
      .pipe(map(data => { result = data }),
        catchError(error => {
          return this.handleError(error)
        }));
  }

  placeOrder(order) {
    let result;
    console.log(order);
    let url = this._kitchen_api + "placeOrder";
    return this._http.post(url, JSON.stringify(order),
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) })
      .pipe(map(data => { result = data }),
        catchError(error => {
          return this.handleError(error)
        }));
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return observableThrowError(err.message);
  }
}
