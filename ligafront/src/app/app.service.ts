import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserLogin } from './models/usuariologin';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  selectedUser: UserLogin;

  readonly URL_Base = 'http://18.188.46.253:8089/'
  readonly URL_API = this.URL_Base + 'liga/usuariologin';

  constructor(private http: HttpClient) { 
    this.selectedUser = new UserLogin();
  }

  getUsuarioLogin(user: UserLogin){
    return this.http.post(this.URL_API, user);
  }

}