import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from './user-info/user-info.component';
import { AccountRoutingModule } from './account-routing.module';
import { UserResolver } from './user.resolver';
import { FormsModule } from '@angular/forms';
import { ProfileImageComponent } from './profile-image/profile-image.component';
import { AccountComponent } from './account.component';
import { SharedModule } from '../shared/shared.module';
import { ChangeEmailComponent } from './change-email/change-email.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { CloseAccountComponent } from './close-account/close-account.component';

@NgModule({
  providers: [UserResolver],
  declarations: [UserInfoComponent, ProfileImageComponent, AccountComponent, ChangeEmailComponent, ChangePasswordComponent, CloseAccountComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
