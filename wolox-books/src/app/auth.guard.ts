import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from './services/user.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private service: UserService) { }

  canActivate(): boolean {

    if (this.service.loggedIn()) {
      return true
    } else {
      this.router.navigate(['login']);
      return false
    }
  }
}
