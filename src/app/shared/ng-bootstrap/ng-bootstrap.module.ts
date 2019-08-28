import { NgModule } from '@angular/core';

import { NgbCollapseModule, NgbAlertModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [],
  imports: [
    // Import the individual functionality modules here
    NgbCollapseModule,
    NgbAlertModule,
    NgbToastModule
  ],
  exports: [
    NgbCollapseModule,
    NgbAlertModule,
    NgbToastModule
  ]
})
export class NgBootstrapModule { }
