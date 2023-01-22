import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ilogin, RootObject } from '../model/login.interface';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  baseUrl = `${environment.baseUrl}api/login`;
  isLoggedIn: boolean = false;
  constructor(private _http: HttpClient,) {}

  isAuthinticated():Promise<boolean> {
    return new Promise((resolv, reject) => {
        resolv(this.isLoggedIn);
    });
  }
  Login(obj: Ilogin): Observable<RootObject> {
    return this._http.post<RootObject>(this.baseUrl, obj).pipe(
      map(res =>{
        if(res.token){
          localStorage.setItem('token', res.token)
          this.isLoggedIn = true
        }
        return res
      })
    )
  }
 
}
