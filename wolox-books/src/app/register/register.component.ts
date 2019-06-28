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
    let email = post.email;
    let password = post.password;
    let password_confirmation = post.password;
    let first_name = post.firstName;
    let last_name = post.lastName;
    let locale = "en";
    console.log(JSON.stringify({user:{ email , password , password_confirmation, first_name, last_name, locale}})); 
  }

}
