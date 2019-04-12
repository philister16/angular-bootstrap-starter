import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private alerts: Alert[] = [];
  alertsSubject = new Subject<Alert[]>();

  constructor() { }

  private update() {
    this.alertsSubject.next(this.alerts);
  }

  issue(alert: Alert) {
    this.alerts.push(alert);
    this.update();
  }

  clear(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
    this.update();
  }
}
