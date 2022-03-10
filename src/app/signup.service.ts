import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Signup } from './signup';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  _url='http://127.0.0.1:5000/api/LoginInfo';
  constructor(private _http : HttpClient) { 
    

  }
  signup(sign: Signup){
    return this._http.post(<any>this._url,sign)
  }
  
}
