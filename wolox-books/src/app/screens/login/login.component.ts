import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../register/register.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  
  constructor(private fb: FormBuilder, private service: UserService, private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      'email': [null, Validators.required],
      'password': [null, Validators.required]
    })
  }

  login(post: any) {
    let session = {
      email: post.email,
      password: post.password,
    };

    console.log({session}); 
    this.service.createSession({session}).subscribe(
    response => {console.log('access_token:' + response.access_token)})
  }
}
