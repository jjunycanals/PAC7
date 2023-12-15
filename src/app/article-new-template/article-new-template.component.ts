import { Component, OnInit } from '@angular/core';
import { Article } from '../model/article';
import { NgForm, FormsModule } from '@angular/forms';
import { CommonModule } from '../../../node_modules/@angular/common';

@Component({
  selector: 'app-article-new-template',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './article-new-template.component.html',
  styleUrl: './article-new-template.component.css'
})
export class ArticleNewTemplateComponent {
  public article!:Article;
  public errorMessages: { [key: string]: string } = {};
  // public errorMessagesName: string | null = null;
  // public errorMessagesPrice: string | null = null;
  // public errorMessagesURL: string | null = null;
  // public errorMessagesURLRegex: string | null = null;

  constructor(){
    this.article = new Article('','',0,true,0);
  }

  createArticleNewTemplate(articleForm: NgForm):void{
    console.log('Article form', articleForm.value);
    // this.errorMessagesName = '';
    // this.errorMessagesPrice = '';
    // this.errorMessagesURL = '';
    this.errorMessages = {};

    if (articleForm.valid) {
      this.article = articleForm.value.article;
      console.log('Creating article ', this.article);
    } else {
      console.error('Article form is in an invalid state');

      // console.log(articleForm.form.controls['article'].get('name')?.errors);
      // console.log(articleForm.form.controls['article'].value);
      // console.log(articleForm.form.controls['article'].get('name')?.hasError('required'));

      const obj = articleForm.form.controls['article'].value;

      Object.keys(obj).forEach(key => {
        // if (articleForm.form.controls['article'].get(`${key}`)?.hasError('required')== true) {
        //   if (key === 'name') {
        //     this.errorMessagesName = key + ' is required';
        //   } else if (key === 'price') {
        //     this.errorMessagesPrice = key + ' is required';
        //   } else if (key === 'imageUrl'){
        //     this.errorMessagesURL = key + ' is required';
        //   }
        // }
        console.log(articleForm.form.controls['article'].get(`${key}`)?.hasError('pattern'));
        if (articleForm.form.controls['article'].get(`${key}`)?.hasError('required') == true) {
          this.errorMessages[key] = `${key} is required`;
        } else if (articleForm.form.controls['article'].get(`${key}`)?.hasError('pattern') && key === 'imageUrl') {
          this.errorMessages[key] = 'URL not valid';
        }
      });
    }
  }

  validateUrl(): void {
    if (this.errorMessages['imageUrl']) {
      this.errorMessages['imageUrl'] = '';
    }

  }
}
