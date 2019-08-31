import { Component, OnInit, Input } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { ToastService } from 'src/app/shared/toast/toast.service';
import * as nanoid from 'nanoid';
import { finalize, take } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-profile-image',
  templateUrl: './profile-image.component.html',
  styleUrls: ['./profile-image.component.scss']
})
export class ProfileImageComponent implements OnInit {
  @Input() image: string;
  placeholderImage: 'assets/user-placeholder.svg'
  task: AngularFireUploadTask;
  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: Observable<string>;
  isUploading: boolean = false;
  oldImage: string;

  constructor(private storage: AngularFireStorage, private toast: ToastService, private auth: AngularFireAuth) { }

  ngOnInit() {
    if (!this.image) {
      this.image = this.placeholderImage;
    } else {
      this.oldImage = this.image;
    }
  }

  onFileSelected(list: FileList) {
    const file = list.item(0);
    
    if (file.type.split('/')[0] !== 'image' || file.size > 1024000) {
      this.toast.show({
        type: 'danger',
        message: 'Only images up to 1MB are accepted.',
        header: 'Error'
      });
      return;
    }
    
    this.isUploading = true;
    const path = `images/avatars/${nanoid()}`;
    this.task = this.storage.upload(path, file);
    this.percentage = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges();
    
    this.snapshot.pipe(finalize(() => {
      this.storage.ref(path).getDownloadURL().pipe(take(1)).subscribe(url => {
        this.image = url;
        this.auth.auth.currentUser.updateProfile({ photoURL: url });
        if (this.oldImage) {
          this.storage.storage.refFromURL(this.oldImage).delete();
        }
        this.isUploading = false;
      })
    })).subscribe();
  }
}
