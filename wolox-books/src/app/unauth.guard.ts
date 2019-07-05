import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from './services/user.service';

@Injectable()
export class UnauthGuard implements CanActivate {

  constructor(private router: Router, private service: UserService) { }

  canActivate(): boolean {
    if (this.service.loggedIn()) {
      this.router.navigate(['books']);
      return true
    } else {
      return false
    }
  }
}
