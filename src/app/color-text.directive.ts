import { Directive, HostBinding, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorText]'
})
export class ColorTextDirective {
  @HostBinding('style.color') myColor:string = "";

  constructor() { }

  @HostListener('mouseenter') mouseEnterEvent (eventData : Event){
    this.myColor =  'orange';
  }

    @HostListener('mouseleave') mouseLeaveEvent (eventData : Event){
      this.myColor =  'black';
  }

}