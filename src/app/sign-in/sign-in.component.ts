import { Component } from '@angular/core';
import {SignInFormComponent} from "../sign-in-form/sign-in-form.component";

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    SignInFormComponent
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {

}
