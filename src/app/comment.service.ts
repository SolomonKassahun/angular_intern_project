import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommentMo } from './comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  _url='http://127.0.0.1:5000/api/Comment';
  constructor(private _http: HttpClient) {

   }
    comment(comment: CommentMo){
      return this._http.post(<any>this._url, comment)
    }

}
