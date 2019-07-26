import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route, UrlSegment } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate, CanLoad {
  redirectUrl: string | null = null;

  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.afAuth.auth.currentUser) {
      return true;
    }
      this.redirectUrl = state.url;
      this.router.navigateByUrl('/auth/login').finally(() => false);
  }

  canLoad(route: Route, segments: UrlSegment[]) {
    if (this.afAuth.auth.currentUser) {
      return true;
    }
    this.redirectUrl = window.location.pathname;
    this.router.navigateByUrl('/auth/login').finally(() => false);
  }

}
