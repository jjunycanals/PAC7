import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Validators, FormBuilder } from '@angular/forms';
import { UserService } from "../services/user.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public errorMessages: { [key: string]: string } = {};
  public loginForm!: FormGroup;
  public message: string | undefined;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.loginForm = this.fb.group({
      article: this.fb.group({
        username: [null, [Validators.required]],
        password: [null, [Validators.required]]
      })
    });
  }

  onSubmit() {
    this.errorMessages = {};
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      // let created = this.userService.createUser(this.loginForm.value.article).subscribe(
      //   (created: boolean) => {
      //     if (created) {
      //       this.message = 'Successfully create article with name: '
      //           + this.loginForm.value.login['username'];
      //     } else {
      //       this.message = 'This user name with name: ' + this.loginForm.value.login.username
      //           + ' already exists';
      //     }
      //   }
      // );
    } else {
      const obj = this.loginForm.controls['article'].value;
      Object.keys(obj).forEach(key => {
        if (this.loginForm.controls['article'].get(`${key}`)?.hasError('required') == true) {
          this.errorMessages[key] = `${key} is requireddd`;
        } else if (this.loginForm.controls['article'].get(`${key}`)?.hasError('min') && key === 'price') {
          this.errorMessages[key] = 'Price must be at least 0.1';
        } else if (this.loginForm.controls['article'].get(`${key}`)?.hasError('invalidName') == true) {
          this.errorMessages[key] = `The word ${this.loginForm.controls['article'].value['name']} is an invalid name.`;
        }
      });
    }

  }

}
