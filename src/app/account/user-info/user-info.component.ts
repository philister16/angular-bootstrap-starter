import { Component, OnInit, Input } from '@angular/core';
import { UserInfo } from '../user-info.interface';
import { NgForm } from '@angular/forms';
import { ToastService } from 'src/app/shared/toast/toast.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  @Input() userInfo: UserInfo;

  constructor(private userService: UserService, private toastService: ToastService) { }

  ngOnInit() {
  }

  async onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    try {
      await this.userService.saveUserInfo(form.value);
      this.toastService.show({ type: 'success', message: 'User details updated successfully.', header: 'Saved' });
    } catch(err) {
      this.toastService.show({ type: 'danger', message: 'Details were not updated. An error ocurred.', header: 'Error'});
      throw err;
    }
  }

}
