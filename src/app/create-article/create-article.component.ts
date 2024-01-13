import { Component, importProvidersFrom } from '@angular/core';
import { Article } from '../model/article';
import { ArticleServiceService } from '../services/article-service.service';

@Component({
  selector: 'app-create-article',
  standalone: true,
  imports: [],
  templateUrl: './create-article.component.html',
  styleUrl: './create-article.component.css'
})
export class CreateArticleComponent {
  public article!: Article;
  public confirmed = false;
  public message = null;

  constructor(private articleServiceService: ArticleServiceService) {
    this.initializeArticles();
  }

  initializeArticles() {
    this.article =  {
      name: '',
      price: 0,
      imageUrl: '',
      isOnSale: true,
      quantityInCart: 0,
      stock: 0,
      favorite: false
    };
  }

}
