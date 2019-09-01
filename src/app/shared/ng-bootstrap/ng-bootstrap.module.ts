import { NgModule } from '@angular/core';

import { NgbCollapseModule, NgbAlertModule, NgbToastModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [],
  imports: [
    // Import the individual functionality modules here
    NgbCollapseModule,
    NgbAlertModule,
    NgbToastModule,
    NgbModalModule
  ],
  exports: [
    NgbCollapseModule,
    NgbAlertModule,
    NgbToastModule,
    NgbModalModule
  ]
})
export class NgBootstrapModule { }
