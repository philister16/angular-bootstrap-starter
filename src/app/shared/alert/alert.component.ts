import { Component, OnInit, OnDestroy } from '@angular/core';
import { AlertService } from './alert.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, OnDestroy {
  alerts: Alert[];
  $alerts: Subscription;

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.$alerts = this.alertService.alertsSubject.subscribe(alerts => this.alerts = alerts);
  }

  close(alert: Alert) {
    this.alertService.clear(alert);
  }

  ngOnDestroy() {
    this.$alerts.unsubscribe();
  }

}
