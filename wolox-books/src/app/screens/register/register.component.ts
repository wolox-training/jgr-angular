import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service' ;


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  local: string = "en";

  constructor(private fb: FormBuilder, private service: UserService) {}

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
      locale: "en"
    };

    console.log({user});
    this.service.createUser(user).subscribe(
      result => {if (result.status == 201) console.log('succsess')} 
      ,error => {if (error.status == 422) console.log('non-succsess')}
    );
  }
}