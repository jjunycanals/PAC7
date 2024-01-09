import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article } from '../model/article';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.css'
})
export class ArticleItemComponent implements OnInit {

  @Input() article!: Article;
  @Output() ArticleQuantityChange  = new EventEmitter<{ article: Article, quantity: number }>();

  constructor() {  }

  ngOnInit() {
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
    this.ArticleQuantityChange.emit({ article: this.article, quantity: this.article.quantityInCart + 1 });
  }
  rest() {
    if (this.article.quantityInCart > 0) {
      this.ArticleQuantityChange.emit({ article: this.article, quantity: this.article.quantityInCart - 1 });
    }
  }

  onToggleFavorite() {
    // console.log('Favorite inital status was ', this.article.favorite);
    this.article.favorite = !this.article.favorite;
    // console.log('Favorite end status is ', this.article.favorite);
  }

  isFavorite(){
    return this.article.favorite;
  }
}
