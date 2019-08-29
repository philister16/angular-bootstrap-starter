import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {  map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { UserInfo } from './user-info.interface';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore) { }

  userInfo(): Observable<UserInfo> {
    const { displayName, email, emailVerified, phoneNumber, photoURL, uid } = this.afAuth.auth.currentUser;
    return this.db.collection('users').doc(uid).get().pipe(
      map(doc => {
        return {
          displayName,
          email,
          emailVerified,
          phoneNumber,
          photoURL,
          ...doc.data()
        }
      })
    );
  }

  async saveUserInfo(userInfo: UserInfo) {
    try {      
      await this.db.collection('users').doc(this.afAuth.auth.currentUser.uid).set(userInfo);
    } catch(err) {
      throw err;
    }
  }

}
