import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isCollapsed = true;

  constructor(private afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  toggleNav() {
    this.isCollapsed = !this.isCollapsed;
  }

  closeNav(e) {
    // Make sure to only close nav if we do not want to open a dropdown
    if (!e.classList.contains('dropdown-toggle')) {
      this.isCollapsed = true;
    }
  }

}
