import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMessagecolor]'
})
export class MessagecolorDirective {

  constructor(element : ElementRef) { 
    element.nativeElement.style.backgroundColor = 'yellow ';
  }

}
