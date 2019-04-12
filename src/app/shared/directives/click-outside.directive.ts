import { Directive, HostListener, Output, ElementRef, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appClickOutside]'
})
export class ClickOutsideDirective {
  @Output() appClickOutside = new EventEmitter();

  constructor(private elemRef: ElementRef) { }

  @HostListener('document:click', ['$event.target']) onClick(targetEl) {
    const clickedInside = this.elemRef.nativeElement.contains(targetEl);
    if (!clickedInside) {
      this.appClickOutside.emit(null);
    }
  }

}
