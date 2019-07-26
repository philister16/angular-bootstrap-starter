import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-bootstrap-starter';

  // Needs to be instantiated here to make sure the current user is tracked
  constructor(private afAuth: AngularFireAuth) {}
}
