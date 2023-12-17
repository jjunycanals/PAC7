import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Validators, FormBuilder, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-article-new-reactive',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './article-new-reactive.component.html',
  styleUrl: './article-new-reactive.component.css'
})

export class ArticleNewReactiveComponent {
  public errorMessages: { [key: string]: string } = {};
  public articleForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.articleForm = this.fb.group({
      article: this.fb.group({
        name: [null, [Validators.required, this.nameArticleValidator]],
        price: [null, [Validators.required, Validators.min(0.1)]],
        imageUrl: [null, [Validators.required, Validators.pattern(/^(http|https):\/\/?(www\.)?[a-zA-Z0-9]+(\.[a-zA-Z]{2,3})\/[a-zA-Z0-9-_]+\.(jpg|jpeg|png|gif)$/)]],
        isOnSale: [false]
      })
    });
  }

  onSubmit() {
    this.errorMessages = {};
    if (this.articleForm.valid) {
      console.log('Article Created Form Value', this.articleForm.value);
    } else {
      const obj = this.articleForm.controls['article'].value;
      Object.keys(obj).forEach(key => {
        if (this.articleForm.controls['article'].get(`${key}`)?.hasError('required') == true) {
          this.errorMessages[key] = `${key} is requireddd`;
        } else if (this.articleForm.controls['article'].get(`${key}`)?.hasError('pattern') && key === 'imageUrl')  {
          this.errorMessages[key] = 'URL not valid';
        } else if (this.articleForm.controls['article'].get(`${key}`)?.hasError('min') && key === 'price') {
          this.errorMessages[key] = 'Price must be at least 0.1';
        } else if (this.articleForm.controls['article'].get(`${key}`)?.hasError('invalidName') == true) {
          this.errorMessages[key] = `The word ${this.articleForm.controls['article'].value['name']} is an invalid name.`;
        }
      });
    }

  }
  validateUrl(): void {
    if (this.errorMessages['imageUrl']) {
      this.errorMessages['imageUrl'] = '';
    }
  }
  nameArticleValidator(Control: { value: string; }): { [s: string]: boolean } | null {
    const invalidNames = ['Prova', 'Test', 'Mock', 'Fake'];
    if (invalidNames.includes(Control.value)) {
      return { 'invalidName': true };
    }
    return null;
  }

}
