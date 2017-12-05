import { Directive, HostListener, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: '[appActive]'
})
export class ActiveDirective implements OnInit {
  
  

  @HostBinding ('class.active') activeChange: boolean = false;

  constructor() { }
  @HostListener('click') toggleActive() {
    this.activeChange = !this.activeChange;
    
  }
  ngOnInit(){

  }
}
