import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { UserInfo } from './user-info.interface';

@Injectable()
export class UserResolver implements Resolve<Observable<UserInfo>> {

  constructor(private userService: UserService) { }

  resolve() {
    return this.userService.userInfo();
  }
}
