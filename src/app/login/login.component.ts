import { Component, inject,PLATFORM_ID } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AccountService } from '../services/account.service';
import { Router } from '@angular/router';
import { CommonModule,isPlatformBrowser } from '@angular/common';
import { LoginUser } from '../models/login-user';
import { emit } from 'process';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  router=inject(Router);
  pfid=inject(PLATFORM_ID)
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
    const email=this.loginForm.value.email!;
    const pwd1=this.loginForm.value.password!;
    
    this.accountservice.postLogin(this.loginForm.value)   
    .subscribe({
      next:(response:any)=>{
          console.log(email)
          this.accountservice.currentUserName=response.email;
          
          sessionStorage.setItem("token",response.token);
          
          this.isLoginFormsubmitted=false;
         
          this.router.navigateByUrl("/emplist");
          this.loginForm.reset();

      },
      error:(error)=>{console.log(error)},
      complete:()=>{}
    })
  }
}




}
