import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserResolver } from './user.resolver';
import { AccountComponent } from './account.component';

const ACCOUNT_ROUTES: Routes = [
  { path: '', pathMatch: 'full', component: AccountComponent, resolve: { userInfo: UserResolver } }, // /account
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
