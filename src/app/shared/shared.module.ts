import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgBootstrapModule } from './ng-bootstrap/ng-bootstrap.module';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [ClickOutsideDirective, AlertComponent],
  imports: [
    CommonModule,
    NgBootstrapModule
  ],
  exports: [
    NgBootstrapModule,
    ClickOutsideDirective,
    AlertComponent
  ]
})
export class SharedModule { }
