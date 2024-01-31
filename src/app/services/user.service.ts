import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiLogin = 'http://localhost:3000/api/user/login';
  private apiRegistre = 'http://localhost:3000/api/user/register';

  constructor(private httpClient: HttpClient) { }

  login(username: any): Observable<any> {
    console.log('aqui');
    return this.httpClient.post<any>(this.apiLogin, username);
  }

  CreateUser(username: any, password: any): Observable<any> {
    return this.httpClient.post<any>(this.apiRegistre, { username, password });
  }
}
