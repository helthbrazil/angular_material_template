import { Directive, Renderer, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPadding]'
})
export class PaddingDirective {

  constructor(private el: ElementRef,
    private renderer: Renderer) {
    renderer.setElementStyle(el.nativeElement, 'margin-left', '10px');
  }

}
