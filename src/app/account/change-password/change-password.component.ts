import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReauthenticateComponent } from 'src/app/shared/reauthenticate/reauthenticate.component';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  isLoading: boolean = false;
  errorMessage: string | null;
  success: boolean = false;

  constructor(private modal: NgbModal, private afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  async onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.success = false;
    this.isLoading = true;

    try {
      const result = await this.reAuthModal();
      console.log(result);
      if (!result) {
        this.isLoading = false;
        return;
      }
      const { newPassword } = form.value;
      await this.afAuth.auth.currentUser.updatePassword(newPassword);
      this.success = true;
      form.resetForm();
      this.isLoading = false;
    } catch(err) {
      this.errorMessage = err.message;
      this.isLoading = false;
    }
  }

  reAuthModal() {
    const modalRef = this.modal.open(ReauthenticateComponent);
    modalRef.componentInstance.intent = 'Please confirm with your existing email and password to change to a new password.';
    return modalRef.result;
  }

}
