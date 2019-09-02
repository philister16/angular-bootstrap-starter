import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReauthenticateComponent } from 'src/app/shared/reauthenticate/reauthenticate.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-close-account',
  templateUrl: './close-account.component.html',
  styleUrls: ['./close-account.component.scss']
})
export class CloseAccountComponent implements OnInit {
  wantToClose: boolean = false;
  isLoading = false;
  errorMessage: string | null;

  constructor(
    private modal: NgbModal, 
    private afAuth: AngularFireAuth, 
    private db: AngularFirestore, 
    private storage: AngularFireStorage,
    private router: Router
    ) { }

  ngOnInit() {
  }

  onCancel() {
    this.wantToClose = false;
  }

  async onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    
    try {
      const result = await this.reAuthModal();
      if (!result) {
        this.isLoading = false;
        this.wantToClose = false;
        form.resetForm();
        return;
      }
      await this.storage.storage.refFromURL(this.afAuth.auth.currentUser.photoURL).delete();
      await this.db.collection('users').doc(this.afAuth.auth.currentUser.uid).delete();
      await this.afAuth.auth.currentUser.delete();
      this.isLoading = false;
      this.wantToClose = false;
      form.resetForm();
      this.router.navigateByUrl('/auth/signup');
    } catch(err) {
      this.errorMessage = err.message;
      this.isLoading = false;
      this.wantToClose = false;
      form.resetForm();
    }
  }

  reAuthModal() {
    const modalRef = this.modal.open(ReauthenticateComponent);
    modalRef.componentInstance.intent = 'In order to close your account please confirm your identity by providing your current email and password associated with your account.';
    return modalRef.result;
  }

}
