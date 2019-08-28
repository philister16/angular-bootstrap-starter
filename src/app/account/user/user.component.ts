import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserInfo } from './user-info.interface';
import { NgForm } from '@angular/forms';
import { UserService } from './user.service';
import { ToastService } from 'src/app/shared/toast/toast.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userInfo: UserInfo;

  constructor(private route: ActivatedRoute, private userService: UserService, private toastService: ToastService) { }

  ngOnInit() {
    this.userInfo = this.route.snapshot.data.userInfo;
  }

  async onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    try {
      await this.userService.saveUserInfo(form.value);
      this.toastService.show({ type: 'success', message: 'User details updated successfully.', header: 'Saved' });
    } catch(err) {
      console.error(err);
    }
  }

}
