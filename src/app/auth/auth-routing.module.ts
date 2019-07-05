import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CenteredLayoutComponent } from '../layout/centered-layout/centered-layout.component';
import { LoginComponent } from './login/login.component';
import { LayoutModule } from '../layout/layout.module';

const AUTH_ROUTES: Routes = [
  { path: 'auth', component: CenteredLayoutComponent, children: [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: 'login', component: LoginComponent }
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
