import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent{
 
  constructor(
    private router: Router,
    private service: UserService,
    private store: LocalStorageService
  ) {}

  logout() {
    this.store.clearStorage();
    this.router.navigate(['login']);
  }
}
