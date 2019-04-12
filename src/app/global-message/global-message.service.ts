import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalMessageService {
  public message = new BehaviorSubject<string | null>(null);

  constructor() { }

  shout(message: string) {
    this.message.next(message);
  }

  dismiss() {
    this.message.next(null);
  }
}
