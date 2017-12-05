import { Component, OnInit } from '@angular/core';


class serv {
  name: string;
  id: number;
}

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
    allowNewServer: boolean = false;
    serverStatus: string = "no new server ware created yet";
    serverName: string = 'test server';
    serverCreated: boolean = false;
    servers=['testServer', 'testServer 2']


  constructor() {
   setTimeout(() => this.allowNewServer = true,2000)
   }

  

  ngOnInit() {
    
  }
  onEnableNewServer():void {
     this.serverStatus = "a new server was created, the name is: " + this.serverName;
     this.serverCreated = true;
     this.servers.push(this.serverName)
   }
   updateServerName( event: Event ):void{
    this.serverName = (<HTMLInputElement>event.target).value;
   }
}




