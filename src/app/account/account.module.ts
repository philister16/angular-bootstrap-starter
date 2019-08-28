import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { AccountRoutingModule } from './account-routing.module';
import { UserResolver } from './user/user.resolver';
import { FormsModule } from '@angular/forms';



@NgModule({
  providers: [UserResolver],
  declarations: [UserComponent],
  imports: [
    CommonModule,
    FormsModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
