import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserInfo } from './user-info.interface';
import { NgForm } from '@angular/forms';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userInfo: UserInfo;

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.userInfo = this.route.snapshot.data.userInfo;
  }

  async onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    try {
      await this.userService.saveUserInfo(form.value);
    } catch(err) {
      console.error(err);
    }
  }

}
