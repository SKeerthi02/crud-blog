import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


import {HttpHeaders, HttpClient, HttpErrorResponse} from '@angular/common/http';
const BASE_URL = 'http://localhost:5000/api'; // add this const in separate file

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  public get(requestUri: string): Observable<any> {
    console.log(BASE_URL + requestUri);
    return this.http
      .get(BASE_URL + requestUri, {headers: this.headers})
      .pipe(catchError(this.handleError));
  }

  public post(requestUri: string, data: any): Observable<any> {
    return this.http
      .post(BASE_URL + requestUri, data)
      .pipe(catchError(this.handleError));
  }

   public put(requestUri: string, data: any): Observable<any> {
    console.log('in api put');
    console.log(requestUri);
    console.log(data);
    return this.http
      .put(BASE_URL + requestUri, data)
      .pipe(catchError(this.handleError));
  }
  // tslint:disable-next-line:typedef
  public delete(requestUri: string) {
    return this.http
      .delete(BASE_URL + requestUri)
      .pipe(catchError(this.handleError));
  }
  // tslint:disable-next-line:typedef
  private handleError(error: HttpErrorResponse | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error.message || 'server error.');
  }

}
