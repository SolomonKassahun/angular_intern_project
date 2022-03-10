import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ItemMo } from './item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  _url='http://127.0.0.1:5000/api/Item';
  constructor(private http: HttpClient) { }
  createItem(item: ItemMo){
    return this.http.post(<any>this._url, item);
  }
}
