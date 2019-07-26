import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './layout/not-found/not-found.component';
import { TopbarLayoutComponent } from './layout/topbar-layout/topbar-layout.component';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';
import { LayoutModule } from './layout/layout.module';
import { TestComponent } from './test/test.component';
import { GuardService } from './auth/guard.service';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'test' },
  { path: 'test', component: TopbarLayoutComponent, canActivate: [GuardService], children: [
    { path: '', pathMatch: 'full', component: TestComponent }
  ] },
  { path: 'topbar', component: TopbarLayoutComponent },
  { path: 'dashboard', component: DashboardLayoutComponent },
  { 
    path: 'account', 
    canLoad: [GuardService],
    loadChildren: () => import('./account/account.module').then(mod => mod.AccountModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule)
  },
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
