import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  readonly URL_Base = 'http://18.188.46.253:8089/'
  readonly URL_API = this.URL_Base + 'liga/conexion';

  constructor(private http: HttpClient) { 
    this.getConexion();
  }

  getConexion() {
    return this.http.get(this.URL_API);
  };
}



