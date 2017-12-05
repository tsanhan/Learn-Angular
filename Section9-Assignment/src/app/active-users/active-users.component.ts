import { UsersService } from './../users.service';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit{

users: string[];

constructor (private usersService: UsersService)
{
  usersService.UserActivated.subscribe(
    (user) => this.addUserToActivatedList(user)
  );
}

  ngOnInit(){
    this.users = this.usersService.ActiveUsers;
  }
  
  onSetToInactive(id: number,user:string) {
    this.usersService.RemoveFromActivateUsers(id);
    this.usersService.UserDeactivated.emit(user);
    
    //this.usersService.DeactivateUser(id);
  }

  addUserToActivatedList(user: string){
    this.usersService.AddToActivateUsers(user);
  }
}
