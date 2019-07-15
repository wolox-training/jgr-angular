import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
      firstName: [null, Validators.required],
      lastName: [null, Validators.required]
    });
  }

  singUp(post: any) {
    const user = {
      email: post.email,
      password: post.password,
      password_confirmation: post.password,
      first_name: post.firstName,
      last_name: post.lastName,
      locale: 'en'
    };
    this.service.createUser({ user }).subscribe(
      () => {
        console.log('succsess'),
        this.router.navigate(['login']);
      }
    );
  }
}
