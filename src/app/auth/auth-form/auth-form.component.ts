import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

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

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.$routeSub = this.route.url.subscribe(url => {
      const u = url[url.length -1].path;
      this.case = u;
      this.title = CASES[u].title;
      this.button = CASES[u].button;
    });
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
    }
  }

  ngOnDestroy() {
    this.$routeSub.unsubscribe();
  }

}
