import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private _HttpClient:HttpClient,private _Router:Router) { 
    if(localStorage.getItem("token") != null){
      this.saveUserData()
    }
  }

  userData = new BehaviorSubject(null);
  saveUserData(){
    let encodedToken = JSON.stringify(localStorage.getItem("token"))
    let decodedToken:any = jwtDecode(encodedToken);
    this.userData.next(decodedToken) ;
    
  } 

  signUp(formData:object):Observable<any>{
    return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signup',formData)
  }
  signIn(formData:object):Observable<any>{
    return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signin',formData)
  }
  signOut(){
    localStorage.removeItem("token");
    this.userData.next(null);
    this._Router.navigate(['/login']);
  }
}
