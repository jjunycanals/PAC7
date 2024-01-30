import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiLogin = '/api/user/login';
  private apiRegistre = '/api/user/register';

  constructor(private httpClient: HttpClient) { }

  login(username: any): Observable<any> {
    return this.httpClient.post<any>(this.apiLogin, username);
  }

  CreateUser(user: any): Observable<any> {
    return this.httpClient.post<any>(this.apiRegistre, user);
  }
}
