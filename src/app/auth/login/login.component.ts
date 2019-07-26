import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { GuardService } from '../guard.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoading = false;
  errorMessage: string | null = null;

  constructor(private afAuth: AngularFireAuth, private router: Router, private guard: GuardService) { }

  ngOnInit() {
  }

  async onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    const { email, password } = form.value;
    try {
      await this.afAuth.auth.signInWithEmailAndPassword(email, password);
      form.resetForm();
      const redirectUrl =  this.guard.redirectUrl || environment.loginRoute;
      this.router.navigateByUrl(redirectUrl);
      this.isLoading = false;
    } catch(err) {
      this.errorMessage = err.message;
      this.isLoading = false;
    }
  }

}
