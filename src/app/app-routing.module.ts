import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotpwdComponent } from './components/forgotpwd/forgotpwd.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './service/auth.guard';

const routes: Routes = [
  {
    path:'' , redirectTo:'login', pathMatch:'full'
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'dashboard',canActivate:[AuthGuard],  component:DashboardComponent
  },
  {
    path:'forgotpwd', component:ForgotpwdComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
