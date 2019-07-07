import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from '../layout/layout.module';
import { BlankLayoutComponent } from '../layout/blank-layout/blank-layout.component';
import { AuthFormComponent } from './auth-form/auth-form.component';

const AUTH_ROUTES: Routes = [
  { path: 'auth', component: BlankLayoutComponent, children: [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: 'login', component: AuthFormComponent },
    { path: 'signup', component: AuthFormComponent },
    { path: 'forgot-password', component: AuthFormComponent },
    { path: 'change-password', component: AuthFormComponent }
  ]}
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
