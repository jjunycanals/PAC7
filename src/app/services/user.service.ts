import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl= '/api/users';
  constructor(private httpClient: HttpClient) { }
  createArticle(user: User): Observable<any> {
    return this.httpClient.post<any>(this.apiUrl, user);
  }
}
