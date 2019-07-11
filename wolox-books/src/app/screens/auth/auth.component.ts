import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  store: LocalStorageService;

  constructor(
    private router: Router,
  ) {}

  ngOnInit() {
    this.store = new LocalStorageService();
  }

  logout() {
    this.store.clearStorage();
    this.router.navigate(['login']);
  }
}
