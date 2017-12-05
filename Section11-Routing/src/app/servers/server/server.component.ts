import { ServerResolver } from './server-resolver.service';
import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import {ActivatedRoute, Params,Router, Data} from "@angular/router";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  allowEdit = 0;
    ;  
  constructor(private serversService: ServersService, 
              private route: ActivatedRoute,
              private router: Router,
              private serverResolver: ServerResolver) {
                
  }

  ngOnInit() {
    this.route.data.subscribe(
      (data:Data) => {
        this.server = data['server'];
      }
    );

    this.route.queryParams.subscribe(
      (queryParams: Params) => { 
        this.allowEdit = queryParams['allowEdit'];
       }
     );
    // var id:number = +this.route.snapshot.params['id']; //need to add the '+' to be treated as a number
    // this.server = this.serversService.getServer(id);

    // this.route.params.subscribe(
    //   (params: Params) => {
    //    this.server = this.serversService.getServer(+params['id']);   
    //   }
    // );
    // this.route.queryParams.subscribe(
    //  (queryParams: Params) => { 
    //    this.allowEdit = queryParams['allowEdit'];
    //   }
    // );
    

  }
onEdit(){
  this.router.navigate(['edit'], {relativeTo: this.route, queryParams: { 'allowEdit' :  this.allowEdit }});
}
}
