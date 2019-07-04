import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './screens/auth/screens/register/register.component';
import { LoginComponent } from './screens/auth/screens/login/login.component';
import { AuthComponent } from './screens/auth/auth.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },

  {
    path: 'sing-up',
    component: RegisterComponent
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'auth',
    component: AuthComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
