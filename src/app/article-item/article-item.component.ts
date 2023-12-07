import { Component, OnInit } from '@angular/core';
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

  public article: Article = {
    name: '',
    imageUrl: '',
    price: 0,
    isOnSale: false,
    quantityInCart: 0
  };

  constructor() {  }

  ngOnInit() {
     this.article.name = 'galeta';
     this.article.imageUrl= '../../assets/cookie.png';
     this.article.price = 3.99;
     this.article.isOnSale = true;
     this.article.quantityInCart = 3;

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
    this.article.quantityInCart++;
  }
  rest() {
    if (this.article.quantityInCart > 0) {
      this.article.quantityInCart--;
    }

  }
}
