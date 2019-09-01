import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReauthenticateComponent } from 'src/app/shared/reauthenticate/reauthenticate.component';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-change-email',
  templateUrl: './change-email.component.html',
  styleUrls: ['./change-email.component.scss']
})
export class ChangeEmailComponent implements OnInit {
  @Input() email: string;
  isLoading = false;
  errorMessage: string;
  success: boolean = false;

  constructor(private modalService: NgbModal, private afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  async onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.isLoading = true;
    this.success = false;
    
    try {
      const result = await this.reAuthModal();
      if (!result) {
        this.isLoading = false;
        return;
      }
      const { email } = form.value;
      await this.afAuth.auth.currentUser.updateEmail(email);
      await this.afAuth.auth.currentUser.sendEmailVerification();
      this.success = true;
      this.isLoading = false;
    } catch(err) {
      this.errorMessage = err.message;
      this.isLoading = false;
    }
  }

  reAuthModal() {
    const modalRef = this.modalService.open(ReauthenticateComponent);
    modalRef.componentInstance.intent = "change your email address.";
    return modalRef.result;
  }

}
