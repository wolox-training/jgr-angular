import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  post: any;

  constructor(private fb: FormBuilder) { 
  }

  ngOnInit() {
    this.form = this.fb.group({
      'email': [null, Validators.required],
      'password': [null, Validators.required], 
      'first_name': [null, Validators.required],
      'last_name': [null, Validators.required]
    })
  }

  singUp(post) {
    var email = post.email;
    var password = post.password;
    var password_confirmation = post.password;
    var first_name = post.first_name;
    var last_name = post.last_name;
    var locale = "en";
    console.log(JSON.stringify({user:{email , password , password_confirmation, first_name, last_name, locale}}));
  }
}
