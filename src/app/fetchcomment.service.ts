import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchcommentService {
 _url='http://127.0.0.1:5000/api/Comment';
  constructor(private _http: HttpClient) { }

  getComment(){
       return this._http.get<{commentId: Number,firstName: String, lastName: String, subject : String, message: String}[]> ('http://127.0.0.1:5000/api/Comment');
  }
  getItem(){
    return this._http.get<{name: String, description: String, price : String}[]> ('http://127.0.0.1:5000/api/Item');
  }
  getUsers(){
    return this._http.get<{firstName: String, lastName: String, address: String, phoneNumber: String, age: String, zip: String}[]>('http://127.0.0.1:5000/api/LoginInfo');
  }
  deleteComment(commentId: Number) : Observable<any>{
    return this._http.delete('${http://127.0.0.1:5000/api/Comment}/${commentId}',{ responseType: 'text' })
  }
}
