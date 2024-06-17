import { Routes } from '@angular/router';
import path from "node:path";
import {SignInComponent} from "./sign-in/sign-in.component";
import {SignUpComponent} from "./sign-up/sign-up.component";

export const routes: Routes = [
  { path: 'signIn', component: SignInComponent },
  { path: 'signUP', component: SignUpComponent },
];
