import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './screens/unauth/screens/register/register.component';
import { LoginComponent } from './screens/unauth/screens/login/login.component';
import { AuthComponent } from './screens/auth/auth.component';
import { AuthGuard } from './auth.guard';
import { UnauthGuard } from './unauth.guard';
import { BookListComponent } from './screens/auth/screens/book-list/book-list.component';
import { BookDetailComponent } from './screens/auth/screens/book-detail/book-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'sing-up',
    component: RegisterComponent,
    canActivate: [UnauthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [UnauthGuard]
  },
  {
    path: 'books',
    component: AuthComponent,
    children: [
      {
        path: '',
        component: BookListComponent,
        canActivate: [AuthGuard]
      },
      {
        path: ':id',
        component: BookDetailComponent,
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
