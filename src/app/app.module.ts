import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleNewReactiveComponent } from './article-new-reactive/article-new-reactive.component';
import { ArticleItemComponent } from './article-item/article-item.component';
import { DefaultImagePipe } from './article-item/default-image.pipe';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ArticleNewTemplateComponent } from './article-new-template/article-new-template.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { RouterModule } from '@angular/router';
import { AppRoutesModule } from './app-routes.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,

    DefaultImagePipe
  ],
  imports: [
    BrowserModule, FormsModule,ReactiveFormsModule,HttpClientModule,
    RouterModule,
    AppRoutesModule,
    ArticleListComponent,
    ArticleNewReactiveComponent,
    ArticleNewTemplateComponent,
    CreateArticleComponent,
    ArticleItemComponent,
    ArticleDetailComponent,
    RegisterComponent,
    LoginComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
