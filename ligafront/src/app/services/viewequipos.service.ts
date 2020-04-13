import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Equipo } from '../models/equipos';
import { EquipoImg } from '../models/equipoimg';

@Injectable({
  providedIn: 'root'
})
export class ViewEquiposService {

  selectedEquipo: Equipo;
  equipo: Equipo[];
  equipoimg: EquipoImg[];
  
  readonly URL_Base = 'http://18.188.46.253:8089/'
  readonly URL_API = this.URL_Base + 'liga/viewequipo';

  constructor(private http: HttpClient) { 
    this.selectedEquipo = new Equipo();
  }

  getViewEquipoImg() {
    return this.http.get(this.URL_API);
  }
};