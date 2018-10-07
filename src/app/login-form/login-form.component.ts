import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {


  signInForm : FormGroup;

  constructor(fb: FormBuilder,private authService:LoginService){
    this.signInForm = fb.group({
      "username":['', Validators.required],
      "password":['', Validators.required]
    });
  
  }

  signIn(data: any){
    console.log(this.authService.signIn(data.username,data.password));
  }

  ngOnInit() {
  }

}
