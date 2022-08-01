import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _AuthService:AuthService,private _Router:Router) { }



  errorMsg:string = ""

  isLoading:boolean =false;
  LoginForm = new FormGroup({
    email :new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',Validators.required)
  })

  
  submitLoginForm(formData:FormGroup){
    this.isLoading = true
    if(formData.valid){
      this._AuthService.signIn(formData.value).subscribe({
        next:(response)=>{
          if(response.message == 'success'){
            this.isLoading = false
            this.errorMsg = "Good! You will be redirected automatically to Home Page";
            localStorage.setItem("token",response.token)
           this._AuthService.saveUserData()
           setTimeout(() => {
            this._Router.navigate(['/home']);
          }, 2000);
           
          }else{
            this.isLoading = false
            this.errorMsg = response.message;
          
          }
        }
      })
    }
  }



  ngOnInit(): void {
  }

}
