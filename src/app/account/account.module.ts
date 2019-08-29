import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from './user-info/user-info.component';
import { AccountRoutingModule } from './account-routing.module';
import { UserResolver } from './user.resolver';
import { FormsModule } from '@angular/forms';
import { ProfileImageComponent } from './profile-image/profile-image.component';
import { AccountComponent } from './account.component';



@NgModule({
  providers: [UserResolver],
  declarations: [UserInfoComponent, ProfileImageComponent, AccountComponent],
  imports: [
    CommonModule,
    FormsModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
