import { Injectable } from '@angular/core';
import { ServersService } from './../servers.service';
import { Observable } from 'rxjs/Observable';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router'

interface Server{id:number, name: string, status: string}

@Injectable()
export class ServerResolver implements Resolve<Server>{

    constructor(private serverService: ServersService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server>| Promise<Server>| Server{
        //no need to do any observable. because this resolver runs on EVERY time the route being rendered
        return this.serverService.getServer(+route.params['id']);
    }
}