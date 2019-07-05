import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  navState = false;
  @Output() showNav = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  toggleNav() {
    this.navState = !this.navState;
    this.showNav.emit(this.navState);
  }

  hideNav() {
    this.navState = false;
    this.showNav.emit(false);
  }

}
