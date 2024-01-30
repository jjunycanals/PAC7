import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerce';
  currentComponent: string = 'article-list';
  showComponent(component: string): void {
    this.currentComponent = component;
  }
}
