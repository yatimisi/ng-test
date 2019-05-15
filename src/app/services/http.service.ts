import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  serviceUrl = 'https://gin-vote.herokuapp.com/';
  constructor(
    private httpClient: HttpClient
  ) { }

  getApi<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(`${this.serviceUrl}${url}`);
  }
}
