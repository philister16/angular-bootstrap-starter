import { Directive, HostListener, ContentChild, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor(private el: ElementRef, private render: Renderer2) { }

  @HostListener('click', ['$event']) onclick(el) {
    const menuEl = this.el.nativeElement.querySelector('.dropdown-menu');
    if (menuEl.classList.contains('show')) {
      this.render.removeClass(menuEl, 'show');
    } else {
      this.render.addClass(menuEl, 'show');
    }
  }

  @HostListener('document:click', ['$event']) clickOustide(e) {
    if (!this.el.nativeElement.contains(e.target)) {
      const menuEl = this.el.nativeElement.querySelector('.dropdown-menu');
      this.render.removeClass(menuEl, 'show');
    }
  }
}
