import { Component } from '@angular/core';
import { Article } from '../model/article';
import { CommonModule } from '@angular/common';
import { ArticleItemComponent } from "../article-item/article-item.component";
import { ArticleServiceService } from '../services/article-service.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
    selector: 'app-article-list',
    standalone: true,
    templateUrl: './article-list.component.html',
    styleUrl: './article-list.component.css',
    imports: [CommonModule, ArticleItemComponent]
})
export class ArticleListComponent {

  public articles$: Observable<Article[]> | undefined ;

  constructor(private articleServiceService: ArticleServiceService) { }
  ngOnInit(): void {
    this.articles$ = this.articleServiceService.getArticle();
  }

  handleQuantityChange(event: { article: Article, quantity: number }) {
    if (this.articles$) {
      this.articles$.subscribe((articles) => {
        const foundArticle = articles.find(a => a.name === event.article.name);
        if (foundArticle) {
          foundArticle.quantityInCart = event.quantity;
        }
      });
    }
  }

}
