import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticleItemComponent } from './article-item/article-item.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleNewReactiveComponent } from './article-new-reactive/article-new-reactive.component';

@Component({
  selector: 'app-root',
  // standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // imports: [CommonModule, RouterOutlet, ArticleItemComponent, ArticleListComponent, ArticleNewReactiveComponent]

})
export class AppComponent {
  title = 'ecommerce';
  currentComponent: string = 'article-list';
  showComponent(component: string): void {
    this.currentComponent = component;
  }
}
