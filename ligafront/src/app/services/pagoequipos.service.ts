import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Pagoequipo } from '../models/pagoequipos';

@Injectable({
  providedIn: 'root'
})
export class PagoequiposService {

  selectedPagoequipo: Pagoequipo;
  pagoequipos: Pagoequipo[];
  
  readonly URL_Base = 'http://18.188.46.253:8089/'
  readonly URL_API = this.URL_Base + 'liga/pagoequipo';

  constructor(private http: HttpClient) { 
    this.selectedPagoequipo = new Pagoequipo();
  }

  postPagoequipo(pagoequipo: Pagoequipo) {
    return this.http.post(this.URL_API, pagoequipo);
  }

  getPagoequipo(eq:number) {
    return this.http.get(this.URL_API + `/` + eq);
  }

  getPagoequipos() {
    return this.http.get(this.URL_API);
  }

  putPagoequipo(pagoequipo: Pagoequipo) {
    return this.http.put(this.URL_API + `/${pagoequipo.pagoequipoid}`, pagoequipo);
  }

  deletePagoequipo(pagoequipoid: number) {
    return this.http.delete(this.URL_API + `/` + pagoequipoid);
  }
}
