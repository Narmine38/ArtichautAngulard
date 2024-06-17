import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import {AuthService} from "../auth-service.service";
import {User} from "../models/user";

@Component({
  selector: 'app-sign-up-form',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './sign-up-form.component.html',
  styleUrl: './sign-up-form.component.scss'
})
export class SignUpFormComponent implements OnInit {
  // User registration form
  userRegistrationForm = new FormGroup({
    userEmail: new FormControl('', Validators.required),
    userPassword: new FormControl('', Validators.required),
  });
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const partialUser: Partial<User> = {
      email: this.userRegistrationForm.value.userEmail || '',
      password: this.userRegistrationForm.value.userPassword || '',
    };

    this.authService.register(partialUser as User).subscribe({
      next: (response: any) => {
        console.log(response)
        console.log('Inscription réussie', response);
      },
      error: (error: any) => {
        console.log(`Erreur lors de l'inscription`, error);
      },
    });
  }
}
