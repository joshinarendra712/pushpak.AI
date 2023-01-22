import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SummaryObject } from '../model/summary.interface';

@Injectable({
  providedIn: 'root',
})
export class SummaryService {
  baseUrl2 = `${environment.baseUrl}api/analytics/summary`;
  constructor(private _http: HttpClient) {}
  getAllsummery(): Observable<any> {
    return this._http.get<any>(this.baseUrl2)
  }
}
