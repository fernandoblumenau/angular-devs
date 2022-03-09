import { environment } from './../../environments/environment';
import { Login } from './../models/login';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  doLogin(user: Login){
    if(user.login == environment.loginUser&&
      user.pass == environment.passUser){
        localStorage.setItem('login',user.login);
        localStorage.setItem('pass',user.pass);
        localStorage.setItem('isLogged','true');
      }else{
        return false;
      }
      return true;
  }
}
