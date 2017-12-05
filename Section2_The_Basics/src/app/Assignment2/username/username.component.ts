import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {

  userName:string = '';

  isNoUserName():boolean {
    return this.userName == '';
  } 
  Clear():void{
    this.userName = '';
  }
  constructor() { }

  ngOnInit() {
  }

}
