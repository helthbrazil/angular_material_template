import { Directive, Renderer, ElementRef } from '@angular/core';

@Directive({
  selector: '[appVermelho]'
})
export class VermelhoDirective {

  constructor(private el: ElementRef,
    private renderer: Renderer) {
    renderer.setElementStyle(el.nativeElement, 'color', 'red');
  }

}
