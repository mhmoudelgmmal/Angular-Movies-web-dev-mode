import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../auth.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private _AuthService:AuthService) { }

  profileForm = new FormGroup({
    first:new FormControl(),
    last_name:new FormControl(),
    age:new FormControl(),
    email:new FormControl(),
    password:new FormControl()
  })
  isLogin:boolean = true
  errorMsg:string = ''
  user:any = this._AuthService.userData
  

  ngOnInit(): void {
  }

}
