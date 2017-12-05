import {Observable} from "rxjs/Observable";
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from "@angular/router";

/**
 * Created by tsanh on 02-Jul-17.
 */
export interface CanCompDeactivate {
  canCompDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export class CanDectivateGuard implements CanDeactivate<CanCompDeactivate> {
  canDeactivate (component: CanCompDeactivate,
                 currentRoute: ActivatedRouteSnapshot,
                 currentState: RouterStateSnapshot,
                 nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return component.canCompDeactivate();
  }
}
