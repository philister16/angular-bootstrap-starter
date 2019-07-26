import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
  errorMessage: string | null = null;

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  async ngOnInit() {
    try {
      await this.afAuth.auth.signOut();
      this.router.navigateByUrl(environment.logoutRoute);
    } catch(err) {
      this.errorMessage = err.message;
    }
    
  }

}
