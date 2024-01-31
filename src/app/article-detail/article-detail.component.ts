import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ArticleServiceService } from '../services/article-service.service';
import { CommonModule } from '@angular/common';
import { ArticleItemComponent } from '../article-item/article-item.component';
import { Observable } from 'rxjs';
import { Article } from '../model/article';
@Component({
  selector: 'app-article-detail',
  standalone: true,
  imports: [CommonModule, ArticleItemComponent],
  templateUrl: './article-detail.component.html',
  styleUrl: './article-detail.component.css'
})
export class ArticleDetailComponent {
  productDetail:string = "";
  public articles$!: Observable<Article[]>;
  constructor(private route:ActivatedRoute, private articleServiceService: ArticleServiceService){}
  ngOnInit():void {
    this.articles$ = this.articleServiceService.getArticle();
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      // this.productDetail += `: ${id}`;
      this.articles$.subscribe((articles: any[]) => {
        const foundArticle = articles.find(a => a.id === `${id}`);
        if (foundArticle) {
          console.log(foundArticle);
          this.productDetail = foundArticle;
        }
      });
    }
  }
}
