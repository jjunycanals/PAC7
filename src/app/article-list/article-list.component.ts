import { Component } from '@angular/core';
import { Article } from '../model/article';
import { CommonModule } from '@angular/common';
import { ArticleItemComponent } from "../article-item/article-item.component";

@Component({
    selector: 'app-article-list',
    standalone: true,
    templateUrl: './article-list.component.html',
    styleUrl: './article-list.component.css',
    imports: [CommonModule, ArticleItemComponent]
})
export class ArticleListComponent {

  articles: Article[] = [
    new Article ('pomes', '../../assets/apple.jpg', 1.99, true, 4),
    new Article ('pastís', '../../assets/cake.jpeg', 5.5, false, 1),
    new Article ('platan', '../../assets/banana.jpg', 0.99, true, 2)
  ];
  handleQuantityChange(event: { article: Article, quantity: number }) {
    const foundArticle = this.articles.find(a => a.name === event.article.name);
    if (foundArticle) {
      foundArticle.quantityInCart = event.quantity;
    }
  }
}
