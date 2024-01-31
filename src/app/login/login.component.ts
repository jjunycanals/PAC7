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
      login: this.fb.group({
        username: [null, [Validators.required]],
        password: [null, [Validators.required]]
      })
    });
  }

  onSubmit() {
    this.errorMessages = {};
    if (this.loginForm.valid) {
      const use = this.loginForm.controls['login'].value['username'];
      const pass = this.loginForm.controls['login'].value['password'];

      this.userService.login(use).subscribe(
        (response: any) => {
          if (response.success) {
            console.log('Usuario autenticado correctamente');
            this.message = 'Usuario autenticado correctamente';
          } else {
            this.message = 'Credenciales inválidas';
            console.log('Credenciales inválidas');
          }
        },
        (error) => {
          console.error('Error al autenticar:', error);
          this.message = 'Error al autenticar';
        }
      );
    } else {
      const obj = this.loginForm.controls['login'].value;
      Object.keys(obj).forEach(key => {
        if (this.loginForm.controls['login'].get(`${key}`)?.hasError('required') == true) {
          this.errorMessages[key] = `${key} is requireddd`;
        } else if (this.loginForm.controls['login'].get(`${key}`)?.hasError('invalidName') == true) {
          console.log(`The username: ${this.loginForm.controls['login'].value['username']}, is an invalid name.`);
          this.errorMessages[key] = `The username: ${this.loginForm.controls['login'].value['username']}, is an invalid name.`;
        }
      });

    }
  }
}
