import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  errorMessage: string | null = null;
  isLoading = false;

  constructor(
    private afAuth: AngularFireAuth, 
    private db: AngularFirestore, 
    private router: Router,
    @Inject(LOCALE_ID) public locale: string) { }

  ngOnInit() {
  }

  async onSignup(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    const { email, password, firstname, lastname } = form.value;
    try {
      const cred = await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
      await this.db.collection('users').doc(cred.user.uid).set({ email, firstname, lastname });
      //this.afAuth.auth.useDeviceLanguage();
      this.afAuth.auth.languageCode = this.locale;
      await cred.user.sendEmailVerification();
      form.resetForm();
      this.router.navigateByUrl(environment.firstLoginRoute);
      this.isLoading = false;
    } catch(err) {
      // All possible errors: https://firebase.google.com/docs/reference/js/firebase.auth.Auth#create-user-with-email-and-password
      this.errorMessage = err.message;
      this.isLoading = false;
    }
  }

}
