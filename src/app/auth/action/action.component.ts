import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {
  isWorking = true;
  showPasswordReset = false;
  errorMessage: string | null = null;
  successMessage: string | null = null;

  constructor(private afAuth: AngularFireAuth, private route: ActivatedRoute) { }

  async ngOnInit() {
    const mode = this.route.snapshot.queryParams['mode'];
    const code = this.route.snapshot.queryParams['oobCode'];
    this.doAction(mode, code);
  }

  async doAction(mode: string, code: string) {
    switch(mode) {
      case 'verifyEmail':
        this.verifyEmail(code);
        break;
      case 'resetPassword':
        this.getNewPassword();
        break;
      default:
        this.isWorking = false;
        this.error(new Error('Invalid URL or code.'));
    }
  }

  async verifyEmail(code) {
    try {
      await this.afAuth.auth.applyActionCode(code);
      this.success('Email verifiation was successful.');
    } catch(err) {
      this.error(err);
    }
  }

  async resetPassword(password: string) {
    this.isWorking = true;
    this.showPasswordReset = false;
    const code = this.route.snapshot.queryParams['oobCode'];
    try {
      await this.afAuth.auth.verifyPasswordResetCode(code);
      await this.afAuth.auth.confirmPasswordReset(code, password);
      this.success('Password reset was successful.');
    } catch(err) {
      this.error(err);
    }
  }

  getNewPassword() {
    this.isWorking = false;
    this.showPasswordReset = true;
  }

  private success(msg: string) {
    this.successMessage = msg;
    this.isWorking = false;
  }

  private error(err) {
    this.errorMessage = err.message;
    this.isWorking = false;
  }

}
