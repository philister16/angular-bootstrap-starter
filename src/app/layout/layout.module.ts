import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlankLayoutComponent } from './blank-layout/blank-layout.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { TopbarLayoutComponent } from './topbar-layout/topbar-layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CenteredLayoutComponent } from './centered-layout/centered-layout.component';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [BlankLayoutComponent, NotFoundComponent, TopbarLayoutComponent, NavbarComponent, FooterComponent, CenteredLayoutComponent, DashboardLayoutComponent, ToolbarComponent, SidebarComponent, PageHeaderComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class LayoutModule { }
