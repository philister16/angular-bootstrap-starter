import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route, UrlSegment } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate, CanLoad {
  redirectUrl: string | null = null;
  user: firebase.User;

  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  private hasUser() {
    return this.afAuth.user.pipe(first()).toPromise();
  }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    try {
      const user = await this.hasUser();
      if (user) {
        return true;
      }
        this.redirectUrl = state.url;
        this.router.navigateByUrl('/auth/login').finally(() => false);
    } catch(err) {
      throw err;
    }
  }

  async canLoad(route: Route, segments: UrlSegment[]) {
    try {
      const user = await this.hasUser();
      if (user) {
        return true;
      }
      this.redirectUrl = window.location.pathname;
      this.router.navigateByUrl('/auth/login').finally(() => false);
    } catch(err) {
      throw err;
    }
  }

}
