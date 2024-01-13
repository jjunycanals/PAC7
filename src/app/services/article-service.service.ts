import { Injectable } from '@angular/core';
import { Article } from '../model/article';
import { Observable, catchError, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {
  private apiUrl= '/api/articles';
  // private article: Article[];

  constructor(private httpClient: HttpClient) {
    // this.article = [
    //   new Article ('pomes', '../../assets/apple.jpg', 1.99, true, 4, 5, false),
    //   new Article ('pastís', '../../assets/cake.jpeg', 5.5, false, 1, 10, false),
    //   new Article ('platan', '../../assets/banana.jpg', 0.99, true, 2, 15, false)
    // ];
  }

  getArticle(): Observable<Article[]> {
    // return of(this.article);
    //   return this.httpClient.request<Article[]>('GET', this.apiUrl, {responseType:'json'});
    return this.httpClient.get<Article[]>(this.apiUrl);
  }

  createArticle(article: Article): Observable<any> {
    // let foundArticle = this.article.find(a => a.name === article.name);
    // if (foundArticle) {
    //   return of(false);
    // }
    // this.article.push(article);
    // return of(true);
    return this.httpClient.post<any>(this.apiUrl, article);
  }

  changeQuantity(articleId: number, changeInQuantity: number): Observable<Article> {
    // let foundArticle = this.article.find(a => a.name === articleName);
    // if (foundArticle) {

    //   foundArticle.stock = foundArticle.stock - changedQuantity;
    // }
    const url = `${this.apiUrl}/${articleId}`;
    const requestBody = {
      changeInQuantity: changeInQuantity
    };
    return this.httpClient.patch<Article>(url, requestBody);

  }

  toggleFavorite(article: Article): Observable<Article> {
    // let foundArticle = this.article.find(a => a.name === article.name);
    // if (foundArticle) {
    //   foundArticle.favorite = !foundArticle.favorite;
    // }
    const url = `${this.apiUrl}/${article.id}`;
    const requestBody = {
      favorite: !article.favorite
    };
    return this.httpClient.patch<Article>(url, requestBody);

  }

  searchArticles(query: string): Observable<Article[]> {
    const url = `${this.apiUrl}?q=${query}`;
    return this.httpClient.get<Article[]>(url);
  }
}
