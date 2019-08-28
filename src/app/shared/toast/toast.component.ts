import { Component, OnInit } from '@angular/core';
import { ToastService, Toast } from './toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {
  toasts: Toast[];

  constructor(private toastService: ToastService) { }

  ngOnInit() {
    this.toasts = this.toastService.toasts;
  }

  hide(toast: Toast) {
    this.toastService.remove(toast);
  }

}
