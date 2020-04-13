import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ParametrosService {

  readonly URL_Base = 'http://18.188.46.253:8089/'
  readonly URL_API = this.URL_Base + 'liga/parametro';

  constructor(private http: HttpClient) { 
  }

  getParametro(par: string) {
    return this.http.get(this.URL_API + `/` + par);
  }
  
}
