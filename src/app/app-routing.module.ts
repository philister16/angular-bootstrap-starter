import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './layout/not-found/not-found.component';
import { TopbarLayoutComponent } from './layout/topbar-layout/topbar-layout.component';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';
import { LayoutModule } from './layout/layout.module';
import { TestComponent } from './test/test.component';
import { GuardService } from './auth/guard.service';

const routes: Routes = [
  // Entry route
  { path: '', pathMatch: 'full', redirectTo: 'layout' },

  // Open routes
  { path: 'layout', children: [
    { path: '', pathMatch: 'full', redirectTo: 'topbar' },
    { path: 'topbar', component: TopbarLayoutComponent },
    { path: 'dashboard', component: DashboardLayoutComponent },
  ]},
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule)
  },

  // Guarded by canActivate routes
  { path: 'test', canActivate: [GuardService], component: TestComponent },

  // Guarded by canLoad routes
  { 
    path: 'account', 
    canLoad: [GuardService],
    canActivate: [GuardService],
    component: TopbarLayoutComponent,
    loadChildren: () => import('./account/account.module').then(mod => mod.AccountModule)
  },

  // Fallback routes
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
