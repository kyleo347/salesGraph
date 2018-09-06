import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class ProductService {
  private _isDev = window.location.port.indexOf('4200') > -1;
  private _productUrl =  this._isDev ? 'http://localhost:3000/api/product' : 'api/product';  // URL to web api

  constructor(private http: HttpClient) { }

  getProduct (): Observable<Object> {
    return this.http.get<Object>(this._productUrl);
  }
}
