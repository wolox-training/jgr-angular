import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      'email': [null, Validators.required],
      'password': [null, Validators.required], 
      'firstName': [null, Validators.required],
      'lastName': [null, Validators.required]
    })
  }

  singUp(post: any) {
    let user = { 
      email: post.email, 
      password: post.password, 
      password_confirmation: post.password, 
      first_name: post.firstName, 
      last_name: post.lastName,
      locale:"en"
    }
    console.log(JSON.stringify({user})); 
  }
}
