import { ServerResolver } from './servers/server/server-resolver.service';

import {RouterModule, Routes} from '@angular/router';

import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {EditServerComponent} from './servers/edit-server/edit-server.component';
import {ServersComponent} from './servers/servers.component';
import {ServerComponent} from './servers/server/server.component';
import {UserComponent} from './users/user/user.component';
import {UsersComponent} from './users/users.component';
import {HomeComponent} from './home/home.component';
import {NgModule} from '@angular/core';
import {AuthGuard} from './auth-guard.service';
import {CanDectivateGuard} from "./servers/edit-server/can-deactivate-guard.service";
import {ErrorPageComponent} from './error-page/error-page.component'
/**
 * Created by tsanh on 30-Jun-17.
 */


const appRoutes: Routes = [
  {path: '', component: HomeComponent }, // when redirecting need to add 'pathMatch: 'full'', because otherwize the mach is like 'Contains' function
  {path: 'users', component: UsersComponent, children: [
    {path: ':id/:name', component: UserComponent}]},


  {path: 'servers',
    // canActivate: [AuthGuard], can guard a route or just it's chileds
    canActivateChild: [AuthGuard],
    component: ServersComponent, children: [
    {path: ':id', component: ServerComponent, resolve:{server: ServerResolver} },//Resolving Dynamic Data with the resolve Guard 
    {path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDectivateGuard]}]},
  //{path: 'not-found', component: PageNotFoundComponent},
    {path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found'}},//using static data paasing the route
    {path: '**', redirectTo: 'not-found'}/* the last rout: all the route except the above*/
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)//,{useHash: true}) for old browsers or if on real app the server is not supporting returning the index.html on unresolved 404 page
],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
