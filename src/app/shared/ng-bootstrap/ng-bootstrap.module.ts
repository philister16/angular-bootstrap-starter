import { NgModule } from '@angular/core';

import { NgbCollapseModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [],
  imports: [
    // Import the individual functionality modules here
    NgbCollapseModule,
    NgbAlertModule
  ],
  exports: [
    NgbCollapseModule,
    NgbAlertModule
  ]
})
export class NgBootstrapModule { }
