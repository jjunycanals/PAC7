import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ArticleItemComponent } from './article-item/article-item.component';
import { ArticleListComponent } from "./article-list/article-list.component";
import { NavbarComponent } from './navbar/navbar.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, ArticleItemComponent, ArticleListComponent, NavbarComponent]
})
export class AppComponent {
  title = 'ecommerce';
  currentComponent: string = 'article-list';
  showComponent(component: string): void {
    this.currentComponent = component;
  }
}
