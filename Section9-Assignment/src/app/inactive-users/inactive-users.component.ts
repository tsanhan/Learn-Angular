import { UsersService } from './../users.service';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
constructor(private usersService: UsersService){
  usersService.UserDeactivated.subscribe(
    (user)=> this.addUserToInactivatedList(user) 
  );
}

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.users = this.usersService.InactiveUsers;
  }
  users: string[];

  onSetToActive(id: number,user: string) {
    this.usersService.RemoveFromDeactivateUser(id);
    this.usersService.UserActivated.emit(user);
  }

  addUserToInactivatedList(name:string){
    this.usersService.AddToDeactivateUsers(name);
  }

}
