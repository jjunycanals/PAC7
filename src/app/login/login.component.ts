import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Validators, FormBuilder } from '@angular/forms';
import { UserService } from "../services/user.service";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
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

    } else {
      const obj = this.loginForm.controls['user'].value;
      console.log(obj);

    }
  }
}
