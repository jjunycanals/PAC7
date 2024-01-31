import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Validators, FormBuilder } from '@angular/forms';
import { UserService } from "../services/user.service";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  public errorMessages: { [key: string]: string } = {};
  public registerForm!: FormGroup;
  public message: string | undefined;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.registerForm = this.fb.group({
      register: this.fb.group({
        username: [null, [Validators.required]],
        password: [null, [Validators.required]]
      })
    });
  }

  CreateUser() {
    this.errorMessages = {};
    if (this.registerForm.valid) {

      const use = this.registerForm.controls['register'].value['username'];
      const pass = this.registerForm.controls['register'].value['password'];

      this.userService.CreateUser(use, pass).subscribe(
        (response: any) => {
          if (response.success) {

          } else {
            console.log('El usuario ya existe, no se puede crear de nuevo');
            this.message = 'El usuario ya existe, no se puede crear de nuevo';
          }
        },
        (error) => {
          console.error('Error al autenticar:', error);
          this.message = 'Error al autenticar';
        }
      );
    } else {
      const obj = this.registerForm.controls['login'].value;
      Object.keys(obj).forEach(key => {
        if (this.registerForm.controls['login'].get(`${key}`)?.hasError('required') == true) {
          this.errorMessages[key] = `${key} is requireddd`;
        } else if (this.registerForm.controls['login'].get(`${key}`)?.hasError('invalidName') == true) {
          console.log(`The username: ${this.registerForm.controls['login'].value['username']}, is an invalid name.`);
          this.errorMessages[key] = `The username: ${this.registerForm.controls['login'].value['username']}, is an invalid name.`;
        }
      });

    }
  }
}
