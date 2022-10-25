import { Directive, HostBinding, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @HostBinding('style.backgroundColor') myBackgroundColor:string = "";

  constructor() { }

  @HostListener('mouseenter') mouseEnterEvent (eventData : Event){
    this.myBackgroundColor =  'yellow';
  }

    @HostListener('mouseleave') mouseLeaveEvent (eventData : Event){
      this.myBackgroundColor =  'transparent';
  }

}
