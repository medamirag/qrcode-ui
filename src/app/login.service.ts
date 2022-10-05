import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
baseUrl=environment.serverUrl
  constructor(private httpClient:HttpClient) {


   }

  login(username:string,password:string):Observable<any>{

    return this.httpClient.post<any>(`${this.baseUrl}/users`, { username, password });
  }
  subscribe(username:string,password:string):Observable<any>{

    return this.httpClient.post<any>(`${this.baseUrl}/users/addUser`, { username, password });
  }

}
