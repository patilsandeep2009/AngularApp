import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AccountService } from '../services/account.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginUser } from '../models/login-user';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  router=inject(Router);
loginForm:FormGroup;
isLoginFormsubmitted:boolean=false
constructor(private accountservice:AccountService){
this.loginForm=new FormGroup({
  email:new FormControl(null,[Validators.required]),
  password: new FormControl(null,[Validators.required])
})

};

get login_emailControl():any{
  return this.loginForm.controls["email"];
}

get login_passwordControl():any{
  return this.loginForm.controls["password"]
}

loginSubmitted(){
  this.isLoginFormsubmitted=true;
  if(this.loginForm.valid){
    this.accountservice.postLogin(this.loginForm.value)
    .subscribe({
      next:(response:LoginUser)=>{
          console.log(response)
          this.isLoginFormsubmitted=false;
          this.accountservice.currentUsername=response.email;
          this.router.navigateByUrl("/emplist")
          this.loginForm.reset();

      },
      error:(error)=>{console.log(error)},
      complete:()=>{}
    })
  }
}




}
