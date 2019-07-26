import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgBootstrapModule } from './ng-bootstrap/ng-bootstrap.module';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { AlertComponent } from './alert/alert.component';
import { LoadingButtonComponent } from './components/loading-button/loading-button.component';
import { FaIconsModule } from './fa-icons/fa-icons.module';
import { DropdownDirective } from './directives/dropdown.directive';

@NgModule({
  declarations: [ClickOutsideDirective, AlertComponent, LoadingButtonComponent, DropdownDirective],
  imports: [
    CommonModule,
    NgBootstrapModule,
    FaIconsModule
  ],
  exports: [
    NgBootstrapModule,
    FaIconsModule,
    ClickOutsideDirective,
    DropdownDirective,
    AlertComponent,
    LoadingButtonComponent
  ]
})
export class SharedModule { }
