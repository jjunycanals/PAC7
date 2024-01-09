import { Injectable } from '@angular/core';
import { Article } from '../model/article';

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

  getArticle() : Article[] {
    return this.article;
  }

  createArticle(article: Article) {
    console.log('Aqui');
    let foundArticle = this.article.find(a => a.name === article.name);
    if (foundArticle) {
      return false;
    }
    this.article.push(article);
    return true;
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
