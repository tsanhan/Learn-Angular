import { Component, OnInit ,OnDestroy} from '@angular/core';
import {  Observable } from "rxjs/Observable";
import {  Observer} from "rxjs/Observer";
import {  Subscription} from "rxjs/Subscription";

import 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor() { }
  customSubscription: Subscription;
  numbersSubscription: Subscription;
  ngOnInit() {
    const myNumbers = Observable.interval(1000) // a helper to create an interval type of Observable
    .map((data:number) => { //map , an observable operator: maps the recieved data to a new observable with any trasformation I want
      return data * 2;
    });

    this.numbersSubscription = myNumbers.subscribe(
      (number:Number) => {
        console.log(number);
      } 
    )

    const myObs = Observable.create((observer: Observer<string>) => {
        setTimeout(() => {
            observer.next('first package');
        },2000);
        setTimeout(() => {
            observer.next('second package');
        },4000);
        setTimeout(() => {
            observer.error('this does not work');
        },5000);
      }
    ); // takes a function as an argument - my async code
    
    this.customSubscription = myObs.subscribe(
      (msg: string) => {console.log(msg);},
      (error: string) => {console.log(error);},
            () => {console.log('Completed');}

      
    );
  }
  
  ngOnDestroy(){
    this.customSubscription.unsubscribe();
    this.numbersSubscription.unsubscribe();
  }
}
