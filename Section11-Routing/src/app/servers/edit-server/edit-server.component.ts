import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {CanCompDeactivate} from "./can-deactivate-guard.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanCompDeactivate {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaves: boolean = false;

  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private router: Router) {

  }

  canCompDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.allowEdit) {
      return true;
    }

    if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changesSaves) {
      return confirm('DO you want to discard the changes?');
    } else {
      return true;
    }
  }

  ngOnInit() {
    //those two have the same problem of not changing if
    //accessing the same source component and the destination
    //component is the same one - the solution is the subscription issue to
    //same as in user.component.ts
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    console.log(this.route.snapshot.queryParams['allowEdit']);
    this.allowEdit = this.route.snapshot.queryParams['allowEdit'] === '1' ? true : false;

    this.route.queryParams.subscribe(
     (queryParams: Params) => { this.allowEdit = queryParams['allowEdit'] === '1' ? true : false; }
    );
    this.route.fragment.subscribe();
    let id = +this.route.snapshot.params['id'];

    this.server = this.serversService.getServer(id);
    this.route.params.subscribe(
      (params: Params) => { id = params['id']; }
    );
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;


  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaves = true;
    this.router.navigate(['../'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }


}
