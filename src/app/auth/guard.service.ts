import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route, UrlSegment } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate, CanLoad {
  redirectUrl: string | null = null;

  constructor(private router: Router, private afAuth: AngularFireAuth) {}

  // We use this helper function instead of afAuth.auth.currentUser to make sure that guard waits for the evaluation if there is a user (promise)
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
      return false;
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
      return false;
    } catch(err) {
      throw err;
    }
  }

}
