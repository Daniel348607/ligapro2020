import { Component, Output, Input, ViewEncapsulation,OnInit, AfterViewChecked} from '@angular/core';
import { NgForm } from '@angular/forms';
import {Routes, RouterModule, Router, ActivatedRoute } from '@angular/router';
import {DomSanitizer, SafeUrl, SafeResourceUrl} from "@angular/platform-browser";

import { Partido } from '../../models/partidos';
import { PartidosService } from 'src/app/services/partidos.service';
import { UserLogin } from '../../models/usuariologin'
import { UserLoginService } from '../../services/usuariologin.service'
import { EquiposService } from '../../services/equipos.service';

declare var M: any;

@Component({
  selector: 'app-clasificatoriopar',
  templateUrl: './clasificatoriopar.component.html',
  styleUrls: ['./clasificatoriopar.component.css']
})
export class ClasificatorioparComponent implements OnInit {

public Fec:number;
public par:Partido[];
private userrol: number;
private res1: number;
private res2: number;
private esc1: string;
private esc2: string;

public fechas:any[];
public CamId:number;

public pantalla: number;

constructor(private partidosService: PartidosService, 
  private equiposService: EquiposService,
  private route: ActivatedRoute,
  private userLoginService: UserLoginService,
  private domSanitizer: DomSanitizer,
  private router: Router) { 
  }

ngOnInit() {
  //oculto label cargando...
  //document.getElementById("cargando").style.visibility = "hidden"

  if (window.screen.width >= 640) {
    this.pantalla = 640;
  }
  if (window.screen.width < 640) {
    this.pantalla = 360;
  }

  this.Fec = this.route.snapshot.params.fec;
  
  this.partidosService.getpartidosNomFec('GRUPO')
  .subscribe(res => {
    this.fechas = JSON.parse(JSON.stringify(res));
    this.CamId = this.fechas[0].campeonatoid;
    this.getpartidosFecCla(this.CamId, 'GRUPO');
  });

  
  this.GetUsr();
}

ngAfterViewChecked(){
  if (window.screen.width >= 640) {
    this.pantalla = 640;
  }
  if (window.screen.width < 640) {
    this.pantalla = 360;
  }
}


getpartidosFecCla(Cam: number, fec: string) {
  document.getElementById("cargando").style.visibility = "visible"
  this.partidosService.getpartidosFecCla(Cam, fec)
  .subscribe(res => {
    this.par = res as Partido[];
  });
  document.getElementById("cargando").style.visibility = "hidden"
}

addResPartido(partido: Partido, form?: NgForm){
  //if(confirm('Confirma el ingreso del resultado ' + partido.Equipo1Res + ' a ' + partido.Equipo2Res + ' ?')) {
    partido.equipoesc1 = '';
    partido.equipoesc2 = '';
     this.partidosService.putPartidoRes(partido)
    .subscribe(res => {
      this.resetForm(form);
      M.toast({html: 'Resultado Ingresado'});
    });
  //}
}

resetForm(form?: NgForm) {
  if (form) {
    form.reset();
    this.partidosService.getpartidosNomFec('GRUPO')
    .subscribe(res => {
      this.fechas = JSON.parse(JSON.stringify(res));
      this.CamId = this.fechas[0].campeonatoid
      this.getpartidosFecCla(this.CamId, 'GRUPO');
    });
    this.GetUsr();
  }
}

GetUsr(){
  var usrlog: UserLogin = this.userLoginService.getUserLoggedIn();
  if(usrlog){
    this.userrol= usrlog.rol;
  };
}

} //ClasificatorioparComponent
