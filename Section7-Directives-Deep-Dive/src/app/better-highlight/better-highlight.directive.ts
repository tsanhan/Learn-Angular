import {  Directive,
          Renderer2,
          OnInit, 
          ElementRef ,
          HostListener,
          HostBinding,
          Input} 
from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
@Input () defaultColor: string = 'transparent';
@Input ('appBetterHighlight') highLightColor: string = 'blue';

  constructor(private elRef: ElementRef, private renderer: Renderer2) {

   }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    //this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');
   this.backgroundColor = this.highLightColor;
   this.backgroundColor = this.defaultColor;
  }

    @HostBinding ('style.backgroundColor') backgroundColor: string;

    @HostListener('mouseenter') mouseover(eventData: Event){
      //this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');
      this.backgroundColor = this.highLightColor;
    }
    
    @HostListener('mouseleave') mouseleave(eventData: Event){
      //this.renderer.setStyle(this.elRef.nativeElement,'background-color','transparent');
      this.backgroundColor = this.defaultColor;
  }  
}
