import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Modalidad } from '../models/modalidades';

@Injectable({
  providedIn: 'root'
})
export class ModalidadesService {

  selectedModalidad: Modalidad;
  modalidad: Modalidad[];
  
  readonly URL_Base = 'http://18.188.46.253:8089/'
  readonly URL_API = this.URL_Base + 'liga/modalidad';

  constructor(private http: HttpClient) { 
    this.selectedModalidad = new Modalidad();
  }

  postModalidad(modalidad: Modalidad) {
    return this.http.post(this.URL_API, modalidad);
  }
 
  getModalidad() {
    return this.http.get(this.URL_API);
  }

  putModalidad(modalidad: Modalidad) {
    return this.http.put(this.URL_API + `/${modalidad.modalidadid}`, modalidad);
  }

  deleteModalidad(modalidadid: number) {
    return this.http.delete(this.URL_API + `/` + modalidadid);
  }

}