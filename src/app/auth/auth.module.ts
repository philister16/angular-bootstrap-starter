import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { AuthFormShellComponent } from './auth-form-shell/auth-form-shell.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ActionComponent } from './action/action.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    LoginComponent, 
    AuthFormShellComponent, 
    SignupComponent, 
    ForgotPasswordComponent,
    ResetPasswordComponent,
    ActionComponent,
    LogoutComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
