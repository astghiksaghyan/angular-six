import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NeedAuthGuard } from './auth.guard';

const routes: Routes = [
    {
      path: 'dashboard',
      component: DashboardComponent,
      canActivate: [NeedAuthGuard]
    },
    {
      path: 'login',
      component: LoginPageComponent
    },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }