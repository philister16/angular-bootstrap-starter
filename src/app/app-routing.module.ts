import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlankLayoutComponent } from './layout/blank-layout/blank-layout.component';
import { NotFoundComponent } from './layout/not-found/not-found.component';
import { TopbarLayoutComponent } from './layout/topbar-layout/topbar-layout.component';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';
import { LayoutModule } from './layout/layout.module';

const routes: Routes = [
  { path: '', component: BlankLayoutComponent, pathMatch: 'full' },
  { path: 'topbar', component: TopbarLayoutComponent },
  { path: 'dashboard', component: DashboardLayoutComponent },
  { path: '**', redirectTo: '404' },
  { path: '404', component: NotFoundComponent}
];

@NgModule({
  imports: [
    LayoutModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
