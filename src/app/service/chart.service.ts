import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RootObject } from '../model/chart.interface';

@Injectable({
  providedIn: 'root'
})
export class ChartService {
baseUrl3 = `${environment.baseUrl}api/analytics/last7Days`

  constructor(private _http:HttpClient) { }
  getAlldays():Observable<RootObject>{
   return this._http.get<RootObject>(this.baseUrl3)
  }
}
