import { Injectable } from '@angular/core';
import { Article } from '../model/article';
import { Observable, of } from 'rxjs';import { off } from 'process';
             1

@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {
  private article: Article[];

  constructor() {
    this.article = [
      new Article ('pomes', '../../assets/apple.jpg', 1.99, true, 4, 5, false),
      new Article ('pastís', '../../assets/cake.jpeg', 5.5, false, 1, 10, false),
      new Article ('platan', '../../assets/banana.jpg', 0.99, true, 2, 15, false)
    ];
  }

  getArticle(): Observable<Article[]> {
    return of(this.article);
  }

  createArticle(article: Article): Observable<boolean> {
    let foundArticle = this.article.find(a => a.name === article.name);
    if (foundArticle) {
      return of(false);
    }
    this.article.push(article);
    return of(true);
  }

  changeQuantity(articleName: string, changedQuantity: number) {
    let foundArticle = this.article.find(a => a.name === articleName);
    if (foundArticle) {

      foundArticle.stock = foundArticle.stock - changedQuantity;
    }

  }

  toggleFavorite(article: Article) {
    let foundArticle = this.article.find(a => a.name === article.name);
    if (foundArticle) {
      foundArticle.favorite = !foundArticle.favorite;
    }
  }
}
