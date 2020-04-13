import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Partido } from '../models/partidos';
import { CamFecFotos } from '../models/camfecfotos';

@Injectable({
  providedIn: 'root'
})
export class PartidosService {

  selectedPartido: Partido;
  partidos: Partido[];
  
  readonly URL_Base = 'http://18.188.46.253:8089/'
  readonly URL_API = this.URL_Base + 'liga/partidos';

  constructor(private http: HttpClient) { 
    this.selectedPartido = new Partido();
  }

  //Ingreso partido
  postPartido(partido: Partido) {
    return this.http.post(this.URL_API, partido);
  }

  //Ingreso fotos de un partido
  postPartidoFot(camfec: CamFecFotos) {
    return this.http.post(this.URL_Base + 'liga/partidosfot', camfec);
  }

  //Consulta partidos de un campeonato
  getPartido(CamId: number) {
    return this.http.get(this.URL_API + `/` + CamId);
  }

  //Consulta partido
  getPartidoJug(ParId: number) {
    return this.http.get(this.URL_Base + 'liga/partidosjug' + `/${ParId}`);
  }

  //Consulta fotos de un partido
  getPartidoFot(ParId: number) {
    return this.http.get(this.URL_Base + 'liga/partidosfot' + `/${ParId}`);
  }

  //Consulta fotos de un campeonato
  getPartidoFotCam(CamId: number) {
    return this.http.get(this.URL_Base + 'liga/partidosfotcam' + `/${CamId}`);
  }

  //Consulta partidos de equipo
  getpartidosequipo(eqid: number) {
    return this.http.get(this.URL_Base + 'liga/partidosequipo' + `/${eqid}`);
  }

  //Consulta partidos de un campeonato por fechas
  getpartidosFecCam(camid: number, camnom: string) {
    return this.http.get(this.URL_Base + 'liga/partidosfeccam' + `/${camid}` + `/${camnom}`);
  }

  //Consulta partidos de un Campeonato y una fecha dada
  getpartidosFec(camid: number, fec:number) {
    return this.http.get(this.URL_Base + 'liga/partidosfec' + `/${camid}`  + `/${fec}`);
  }

  //Consulta cantidad de partidos de un Campeonato y un equipo
  getpartidosjugados(camid: number, equ:number) {
    return this.http.get(this.URL_Base + 'liga/partidosjugados' + `/${camid}`  + `/${equ}`);
  }

  //Consulta cantidad de partidos ganados de un Campeonato y un equipo
  getpartidosganados(camid: number, equ:number) {
    return this.http.get(this.URL_Base + 'liga/partidosganados' + `/${camid}`  + `/${equ}`);
  }

  //Consulta cantidad de partidos perdidos de un Campeonato y un equipo
  getpartidosperdidos(camid: number, equ:number) {
    return this.http.get(this.URL_Base + 'liga/partidosperdidos' + `/${camid}`  + `/${equ}`);
  }

  //Consulta cantidad de partidos empatados de un Campeonato y un equipo
  getpartidosempatados(camid: number, equ:number) {
    return this.http.get(this.URL_Base + 'liga/partidosempatados' + `/${camid}`  + `/${equ}`);
  }

  //Consulta la cantidad de goles a favor por equipo
  getpartidosgolesf(camid: number, equ:number) {
    return this.http.get(this.URL_Base + 'liga/partidosgolesf' + `/${camid}`  + `/${equ}`);
  }

  //Consulta la cantidad de goles en contra por equipo
  getpartidosgolesc(camid: number, equ:number) {
    return this.http.get(this.URL_Base + 'liga/partidosgolesc' + `/${camid}`  + `/${equ}`);
  }

  //Consulta datos de partidos de los campeonatos CLASIFICATORIOS
  getpartidosNomFec(nom: string) {
    return this.http.get(this.URL_Base + 'liga/partidosnomfec'  + `/${nom}`);
  }

 //Consulta nombre de las fechas de los campeonatos CLASIFICATORIOS
  getpartidosNomFecCla(camppal: string, cam: string) {
    return this.http.get(this.URL_Base + 'liga/partidosnomfeccla'  + `/${camppal}` + `/${cam}`);
  }

  //Consulta la cantidad de goles en contra por equipo
  getpartidosFecCla(camid: number, fec: string) {
    return this.http.get(this.URL_Base + 'liga/partidosfeccla' + `/${camid}` + `/${fec}`);
  }

  //Guardo partido
  putPartido(partido: Partido) {
    return this.http.put(this.URL_API + `/${partido.Partidosid}`, partido);
  }

  putPartidoRes(partido: Partido) {
    return this.http.put(this.URL_Base + 'liga/partidosres' + `/${partido.Partidosid}`, partido);
  }

   //Borro partido 
  deletePartido(PartidosId: number) {
    return this.http.delete(this.URL_API + `/` + PartidosId);
  }

  //Borrar fotos del partido
  deletePartidoFot(CamFecFotosId: number) {
    return this.http.delete(this.URL_Base + 'liga/partidosfot' + `/` + CamFecFotosId);
  }

}

