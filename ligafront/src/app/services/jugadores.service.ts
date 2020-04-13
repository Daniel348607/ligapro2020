import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Jugador } from '../models/jugadores';

@Injectable({
  providedIn: 'root'
})
export class JugadoresService {

  selectedJugador: Jugador;
  jugador: Jugador[];
  
  readonly URL_Base = 'http://18.188.46.253:8089/'
  readonly URL_API = this.URL_Base + 'liga/Jugador';

  constructor(private http: HttpClient) { 
    this.selectedJugador = new Jugador();
  }

  postJugador(jugador: Jugador) {
    return this.http.post(this.URL_API, jugador);
  }
 
  getJugador() {
    return this.http.get(this.URL_API);
  }

  getJugadorId(ju: number) {
    return this.http.get(this.URL_API + `/` + ju);
  }

  getJugadoresEq(eq: number){
    return this.http.get(this.URL_API + `/` + eq);
  }

  getJugadorEncargado(eq: number) {
    if(isNaN(eq)){
      console.log('Error en equipoid')
    }else{
      return this.http.get(this.URL_Base + 'liga/jugadoreq' + `/` + eq);
    }
  }

  suspenderJugador(jugador: Jugador) {
    return this.http.put(this.URL_Base + 'liga/jugadorsus' + `/${jugador.jugadorid}`, jugador);
  }

  habilitarJugador(jugador: Jugador) {
    return this.http.put(this.URL_Base + 'liga/jugadorhab' + `/${jugador.jugadorid}`, jugador);
  }

  putJugador(jugador: Jugador) {
    return this.http.put(this.URL_API + `/${jugador.jugadorid}`, jugador);
  }

  deleteJugador(jugadorid: number) {
    return this.http.delete(this.URL_API + `/` + jugadorid);
  }

}