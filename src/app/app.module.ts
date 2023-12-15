import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ArticleItemComponent } from './article-item/article-item.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleItemComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule               
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }