import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserAccountComponent } from './user-account/user-account.component';

const ACCOUNT_ROUTES: Routes = [
  { path: '', pathMatch: 'full', component: UserAccountComponent }
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
