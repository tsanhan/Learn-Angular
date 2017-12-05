import { Component } from '@angular/core';


class logItem{
  timeStamp:number;
   num:number;
   Threshold: number;
   isHightLited: boolean;
   constructor(num, timeStamp,Threshold){
     this.num = num;
     this.timeStamp = timeStamp;
     this.Threshold = Threshold;
     this.isHightLited = this.num > this.Threshold;
   }

   getColor():string{
     return this.isHightLited ? 'blue':'';
   }
}

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent {
  
  hide:boolean;
  log:logItem[] = [];

  disDet(event:Event):void{  
   this.hide = !this.hide;
   var item = new logItem(this.log.length, event.timeStamp, 6);
   this.log.push(item);
   
  }
  isHiden():boolean{ 
    return this.hide;
  }
  constructor() { 
    
    this.hide = false;
  }
}

