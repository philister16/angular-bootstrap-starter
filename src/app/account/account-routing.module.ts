import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserResolver } from './user/user.resolver';

const ACCOUNT_ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'user' }, // /account
  { path: 'user', resolve: { userInfo: UserResolver }, component: UserComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(ACCOUNT_ROUTES)
  ],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
