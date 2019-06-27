import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  password: string = "";
  form: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.form = fb.group({
      'email': [null, Validators.required],
      'password': [null, Validators.required],
      'password_confirmation': this.password, 
      'first_name': [null, Validators.required],
      'last_name': [null, Validators.required],
      'locale': "en"
    })
  }

  ngOnInit() {

  }

  login() {
    console.log(this.form.value);
  }
}
