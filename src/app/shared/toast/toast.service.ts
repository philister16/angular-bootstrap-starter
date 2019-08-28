import { Injectable } from '@angular/core';

export interface Toast {
  type: 'success' | 'warning' | 'danger' | 'info' | 'dark' | 'secondary' | 'default',
  header: string,
  message: string,
  classname?: string
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toasts: Toast[] = [];

  constructor() { }

  show(toast: Toast) {
    const t = {
      ...toast,
      classname: toast.type == 'default' ? '' : `bg-${toast.type} text-light`
    }
    this.toasts.push(t);
  }

  remove(toast: Toast) {
    this.toasts.splice(this.toasts.indexOf(toast), 1);
  }
}
