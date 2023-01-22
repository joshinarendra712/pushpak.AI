import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SortDirection } from '@angular/material/sort';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { OrderObject } from '../model/order.interface';

@Injectable({
  providedIn: 'root'
})
export class OrderListService {
  // baseUrl = `${environment.baseUrl}api/orders?page=1&limit=10&order_status=`;
  baseUrl = `${environment.baseUrl}api/orders`;
  constructor(private _http:HttpClient) { }
  getAllOrders(page:number):Observable<OrderObject>{
    let SortUrl = `${this.baseUrl}?&page=${page}&limit=15&order_status=`
    return this._http.get<OrderObject>(SortUrl)
  }
}
