import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article } from '../model/article';
import { CommonModule } from '@angular/common';
import { ArticleServiceService } from '../services/article-service.service';
import { DefaultImagePipe } from './default-image.pipe';

@Component({
  selector: 'app-article-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.css'
})

export class ArticleItemComponent {

  @Input() public article!: Article;
  @Output() ArticleQuantityChange  = new EventEmitter<{ article: Article, quantity: number }>();
  defaultImage: String = '';

  constructor(private articleServiceService: ArticleServiceService) {  }

  ngOnInit() {
    this.defaultImage = '../../assets/images/default.svg';
  }

  isOnSale() {
    return this.article.isOnSale;
  }
  checkQunatity() {
    if (this.article.quantityInCart > 0) {
      return false;
    } else {
      return true;
    }
  }
  summ() {
    // this.article.quantityInCart++;
    // this.ArticleQuantityChange.emit({ article: this.article, quantity: this.article.quantityInCart + 1 });
    const result = this.article.quantityInCart+1;
    this.articleServiceService.changeQuantity(this.article.id, result)
    .subscribe((updatedArticle) => {
      this.article.quantityInCart = result;
    });

  }
  rest() {
    if (this.article.quantityInCart > 0) {
      // this.ArticleQuantityChange.emit({ article: this.article, quantity: this.article.quantityInCart - 1 });
      this.articleServiceService.changeQuantity(this.article.id, this.article.quantityInCart-1)
      .subscribe((updatedArticle) => {
        this.article.quantityInCart = this.article.quantityInCart-1;
      });;
    }
  }

  onToggleFavorite() {
    // console.log('Favorite inital status was ', this.article.favorite);
    // this.article.favorite = !this.article.favorite;
    this.articleServiceService.toggleFavorite(this.article)
    .subscribe((article) => this.article.favorite = !this.article.favorite);

    // console.log('Favorite end status is ', this.article.favorite);
  }

  isFavorite(){
    return this.article.favorite;
  }
}
