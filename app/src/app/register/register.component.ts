import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor( private _authService:AuthService, private _Router:Router) { }

  isLoading:boolean = false;
  errorMsg:string = "";
  registrationForm = new FormGroup({
    first_name:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10),]),
    last_name:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10),]),
    age:new FormControl('',[Validators.required,Validators.min(10),Validators.max(80)]),
    email:new FormControl('',
    [Validators.email,
    Validators.required]),
    password:new FormControl('',[Validators.required,Validators.pattern(/^[0-9]{3,}/)]),
  });
  
  sendData(form:FormGroup){
    this.isLoading = true;
  if(form.valid){
    this._authService.signUp(form.value).subscribe({
      next:(response)=>{
        if(response.message === "success"){
         
          
          this.isLoading =false;
          this.errorMsg = "Good! You will be redirected automatically to Login form";
           setTimeout(() => {
            this._Router.navigate(['/login'])
          }, 3000);

        }else{
          this.errorMsg = response.message;
          this.isLoading =false;
        }
      },
      error:()=>{}
    })
  }
}
  ngOnInit(): void {
  }

}
