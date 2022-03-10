import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, delay } from 'rxjs/operators'
import { Observable, BehaviorSubject } from "rxjs";
import { map } from "rxjs/operators";
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class SigninService {
  _url = '';
  _url1='http://127.0.0.1:5000/api/LoginInfo';
  _url2 = "http://127.0.0.1:5000/api/AdminInfo";

  constructor(private http: HttpClient) {
   
   }
   login(logInfo : Login){
     let role = logInfo.role;
     if(role == 1){
     this._url = this._url1;
     } else {
       this._url = this._url2;
     }
     let userInfo = {
       username : logInfo.username,
       password: logInfo.password,
     }
     return this.http.post(<any>this._url,userInfo)
   }
 
 
 
 
  
}
