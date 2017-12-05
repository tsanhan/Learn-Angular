import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { CanActivate,CanLoad, ActivatedRouteSnapshot ,RouterStateSnapshot, Route} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad{

    constructor(private authService:AuthService) {}
    
    /**
     * this need to be implemented fir this class to be used as URL guard
     * @param route an ActivatedRouteSnapshot type
     * @param state a ActivatedRouteSnapshot type 
     */
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        return this.authService.isAouthenticated();
    }

    /**
     * this need to be implemented for the lazy loading guard (although i see this are working great without it too...) 
     * @param route a Route type
     */
    canLoad(route: Route){
        return this.authService.isAouthenticated();
    }
}