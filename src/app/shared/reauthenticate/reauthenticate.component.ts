import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireAuth } from '@angular/fire/auth';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reauthenticate',
  templateUrl: './reauthenticate.component.html',
  styleUrls: ['./reauthenticate.component.scss']
})
export class ReauthenticateComponent implements OnInit {
  @Input() intent: string;
  isLoading: boolean = false;
  errorMessage: string | null = null;

  constructor(private activeModal: NgbActiveModal, private afAuth: AngularFireAuth) { }

  ngOnInit() {

  }

  async onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    const { email, password } = form.value;
    try {
      await this.afAuth.auth.signInWithEmailAndPassword(email, password);
      this.activeModal.close(true);
      this.isLoading = false;
    } catch(err) {
      this.errorMessage = err.message;
      this.isLoading = false;
    }
  }

}
