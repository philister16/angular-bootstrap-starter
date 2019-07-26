import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  errorMessage: string | null = null;
  success: boolean = false;
  isLoading = false;

  constructor(private afAuth: AngularFireAuth, @Inject(LOCALE_ID) private locale: string) { }

  ngOnInit() {
  }

  async onForgotPassword(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    const { email } = form.value;
    try {
      //this.afAuth.auth.useDeviceLanguage();
      this.afAuth.auth.languageCode = this.locale;
      await this.afAuth.auth.sendPasswordResetEmail(email);
      this.success = true;
      form.resetForm();
      this.isLoading = false;
    } catch(err) {
      this.errorMessage = err.message;
      this.isLoading = false;
    }
  }

}
