import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgBootstrapModule } from './ng-bootstrap/ng-bootstrap.module';
import { ClickOutsideDirective } from './directives/click-outside.directive';

@NgModule({
  declarations: [ClickOutsideDirective],
  imports: [
    CommonModule,
    NgBootstrapModule
  ],
  exports: [
    NgBootstrapModule,
    ClickOutsideDirective
  ]
})
export class SharedModule { }
