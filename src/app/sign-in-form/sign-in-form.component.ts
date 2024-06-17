import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import {AuthService} from "../auth-service.service";
import {User} from "../models/user";

@Component({
  selector: 'app-sign-in-form',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent implements OnInit {
  userLoginForm = new FormGroup({
    userEmail: new FormControl('', Validators.required),
    userPassword: new FormControl('', Validators.required),
  });

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const partialUser: Partial<User> = {
      email: this.userLoginForm.value.userEmail || '',
      password: this.userLoginForm.value.userPassword || '',
    };

    this.authService.login(partialUser as User).subscribe({
      next: (response: any) => {
        console.log(response);
        console.log('Login successful', response);
      },
      error: (error: any) => {
        console.log('Error during login', error);
      },
    });
  }
}
