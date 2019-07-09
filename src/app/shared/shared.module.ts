import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgBootstrapModule } from './ng-bootstrap/ng-bootstrap.module';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { AlertComponent } from './alert/alert.component';
import { LoadingButtonComponent } from './components/loading-button/loading-button.component';
import { FaIconsModule } from './fa-icons/fa-icons.module';

@NgModule({
  declarations: [ClickOutsideDirective, AlertComponent, LoadingButtonComponent],
  imports: [
    CommonModule,
    NgBootstrapModule,
    FaIconsModule
  ],
  exports: [
    NgBootstrapModule,
    FaIconsModule,
    ClickOutsideDirective,
    AlertComponent,
    LoadingButtonComponent
  ]
})
export class SharedModule { }
