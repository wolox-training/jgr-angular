import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../register/register.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  store: LocalStorageService;

  constructor(
    private fb: FormBuilder,
    private service: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  login(post: any) {
    this.store = new LocalStorageService();
    const session = {
      email: post.email,
      password: post.password,
    };
    this.service.createSession({ session }).subscribe(
      response => {
        this.store.setValue('access_token', response.access_token);
        this.router.navigate(['auth']);
      }
    );
  }
}
