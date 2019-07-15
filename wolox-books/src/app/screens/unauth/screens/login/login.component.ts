import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../../../services/user.service';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../../../services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../register/register.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

<<<<<<< HEAD
  constructor(private fb: FormBuilder,
=======
  constructor(
    private fb: FormBuilder,
>>>>>>> guard
    private service: UserService,
    private router: Router,
    private store: LocalStorageService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
<<<<<<< HEAD
      'email': [null, Validators.required],
      'password': [null, Validators.required]
=======
      email: [null, Validators.required],
      password: [null, Validators.required]
>>>>>>> guard
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
        this.router.navigate(['books']);
<<<<<<< HEAD
      });
=======
      }
    );
>>>>>>> guard
  }
}
