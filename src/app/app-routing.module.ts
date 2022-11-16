import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterComponent } from './register/register.component';
import { TransctionComponent } from './transction/transction.component';

const routes: Routes = [
 { //login Page Route Set
  path: '',component: LoginPageComponent
 },
 { // Register Page Route set
  path: 'register',component: RegisterComponent
 },
 {  //DashBoard Page Route Set
  path: 'dashboard',component: DashboardComponent
 },
 {  //DashBoard Page Route Set
  path: 'transaction',component: TransctionComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
