import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from '../layout/layout.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ActionComponent } from './action/action.component';
import { LogoutComponent } from './logout/logout.component';

const AUTH_ROUTES: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' }, // /auth
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'forgot-password', component: ForgotPasswordComponent },
    { path: 'reset-password', component: ResetPasswordComponent },
    { path: 'action', component: ActionComponent },
    { path: 'logout', component: LogoutComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule.forChild(AUTH_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }
