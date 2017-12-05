import { Directive, HostListener, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
  
  

  @HostBinding ('class.open') openChange: boolean = false;

  constructor() { }
  @HostListener('click') toggleOpen() {
    this.openChange = !this.openChange;
    
  }
  ngOnInit(){

  }
}
