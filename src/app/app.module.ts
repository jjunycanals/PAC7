import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleNewReactiveComponent } from './article-new-reactive/article-new-reactive.component';
import { ArticleItemComponent } from './article-item/article-item.component';
import { ImageArticlePipe } from './pipes/image-article.pipe';
import { AppRoutesModule } from './app-routes.module';
import { ArticleNewTemplateComponent } from "./article-new-template/article-new-template.component";
import { LoginComponent } from "./login/login.component";
import { ArticleDetailComponent } from "./article-detail/article-detail.component";
import { CreateArticleComponent } from "./create-article/create-article.component";
import { RegisterComponent } from "./register/register.component";


@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,

        ArticleListComponent,
        ArticleItemComponent,
        ImageArticlePipe
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, AppRoutesModule,
        ArticleNewTemplateComponent,
        LoginComponent,
        ArticleNewReactiveComponent,
        ArticleDetailComponent,
        CreateArticleComponent,

        RegisterComponent
    ]
})
export class AppModule { }
