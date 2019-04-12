import { Component, OnInit, OnDestroy } from '@angular/core';
import { GlobalMessageService } from './global-message.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-global-message',
  templateUrl: './global-message.component.html',
  styleUrls: ['./global-message.component.scss']
})
export class GlobalMessageComponent implements OnInit, OnDestroy {
  messageSubscription: Subscription;
  message: string | null;

  constructor(private globalMessageService: GlobalMessageService) { }

  ngOnInit() {
    this.messageSubscription = this.globalMessageService.message.subscribe(message => this.message = message);
  }

  dismiss() {
    this.globalMessageService.dismiss();
  }

  ngOnDestroy() {
    this.messageSubscription.unsubscribe();
  }

}
