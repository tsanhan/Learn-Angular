import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  counter: number;
  clearIntervalID: any;
  @Output('rtPressed') startPressed = new EventEmitter<{num: number}>();
  

  constructor() {
    this.counter = 0;
    this.clearIntervalID  = 0;
   }


  emitFunc(num:number){
      this.counter++;
      this.startPressed.emit({num: num})
  }
  ngOnInit() {
  }


  start(){
      
      this.clearIntervalID = setInterval(() => this.emitFunc(this.counter)
       ,1000);
  }
  stop(){
      clearInterval(this.clearIntervalID);
  }
  
}
