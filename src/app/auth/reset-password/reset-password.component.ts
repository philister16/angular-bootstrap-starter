import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  @Output() newPassword = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onNewPassword(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const { password } = form.value;
    this.newPassword.emit(password);
    form.resetForm();
  }

}
