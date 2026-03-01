import { Component } from '@angular/core';
import {FormGroup, ReactiveFormsModule, FormBuilder, Form, Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  loginForm! : FormGroup;
  constructor(private fb:FormBuilder){

    this.loginForm = this.fb.group({
      
      "email": ['', [Validators.required, Validators.email]],
      "senha": ['', Validators.required]

    });
  }

  fazerLogin(){
    console.log(this.loginForm.value)
  }
}
