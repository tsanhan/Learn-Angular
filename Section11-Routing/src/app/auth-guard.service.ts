import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';

/**
 * Created by tsanh on 30-Jun-17.
 */

@Injectable()
export  class AuthGuard implements  CanActivate , CanActivateChild{
  constructor (private authService: AuthService, private router: Router) {

  }
  canActivateChild(route: ActivatedRouteSnapshot,
                   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state);
  }

  canActivate (route: ActivatedRouteSnapshot,
               state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticated().then(
      (authentication: boolean) => {
        if (authentication) {
          return true;
        } else {
          this.router.navigate(['/']);
        }
      }
    );
  }
}
