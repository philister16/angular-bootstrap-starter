import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

const CASES = {
  'login': {
    title: 'Login',
    button: 'Login'
  },
  'signup': {
    title: 'Sign up',
    button: 'Sign up'
  },
  'forgot-password': {
    title: 'Forgot password',
    button: 'Send reset link'
  }
}

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit, OnDestroy {
  $routeSub: Subscription;
  case: string;
  title: string;
  button: string;
  hasError: string = null;
  hasSuccess: string = null;
  isLoading: boolean = false;

  constructor(private route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit() {
    this.$routeSub = this.route.url.subscribe(url => {
      const u = url[url.length -1].path;
      this.case = u;
      this.title = CASES[u].title;
      this.button = CASES[u].button;
    });
  }

  onSubmit(form: NgForm) {
    this.hasError = null;
    if (!form.valid) {
      return;
    }
    this.isLoading = true;
    this.authService.registerUser(form.value).subscribe(res => {
      this.hasSuccess = 'REGISTERED_USER';
      this.isLoading = false;
    }, err => {
      this.hasError = err;
      this.isLoading = false;
    });
  }

  ngOnDestroy() {
    this.$routeSub.unsubscribe();
  }

}
