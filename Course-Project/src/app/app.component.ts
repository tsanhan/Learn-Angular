import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  /**
   *
   */
  constructor() {}
  view:boolean = false;
  
  viewChanged(view: boolean)
  {
    this.view = view;
  }
  title = 'app works!';

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyBZ7pS_7PTb14UoD-NT_pv7QqJ2NSp8fdY",
      authDomain: "ng-recipe-book-31702.firebaseapp.com"
    });
    }
  }

