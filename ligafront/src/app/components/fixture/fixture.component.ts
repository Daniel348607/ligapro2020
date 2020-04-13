import { Component, Output, Input, ViewEncapsulation,OnInit, AfterViewChecked, ɵConsole} from '@angular/core';
import { NgForm } from '@angular/forms';
import {Routes, RouterModule, Router, ActivatedRoute } from '@angular/router';
import {DomSanitizer, SafeUrl, SafeResourceUrl} from "@angular/platform-browser";

import { Partido } from '../../models/partidos';
import { PartidosService } from 'src/app/services/partidos.service';
import { UserLogin } from '../../models/usuariologin'
import { UserLoginService } from '../../services/usuariologin.service'
import { EquiposService } from '../../services/equipos.service';
import { Campeonato } from '../../models/campeonatos';
import { CampeonatosService } from 'src/app/services/Campeonatos.service';
import { Divisional } from '../../models/divisionales';
import { DivisionalesService } from '../../services/divisionales.service';

declare var M: any;

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.css'],
  providers: [ PartidosService, CampeonatosService, DivisionalesService ]
})

export class FixtureComponent implements OnInit, AfterViewChecked {

public CamId:number;
public Fec:number;
public Nom:string;
public par:Partido[];
private userrol: number;
private res1: number;
private res2: number;
private esc1: string;
private esc2: string;
public fechas:any[];
public pantalla: number;
public CamNombre: string;
public DivNombre: string;

constructor(private partidosService: PartidosService, 
  private campeonatosService: CampeonatosService,
  private divisionalesService: DivisionalesService,
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
  this.CamId = this.route.snapshot.params.cam;
  this.Fec = this.route.snapshot.params.fec;
  this.Nom = this.route.snapshot.params.nom;
  this.getpartidosCamFec();
  this.getCampeonato();
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


getpartidosCamFec() {
  //document.getElementById("cargando").style.visibility = "visible"
  if(this.Fec == 0){
    this.partidosService.getpartidosFecCla(this.CamId, this.Nom)
    .subscribe(res => {
      this.par = res as Partido[];
    });
  }else{
    this.partidosService.getpartidosFec(this.CamId, this.Fec)
    .subscribe(res => {
      this.par = res as Partido[];
    });
  }
  //document.getElementById("cargando").style.visibility = "hidden"
}

getCampeonato(){
  this.campeonatosService.getCampeonatonom(this.CamId)
    .subscribe(res => {
    var camnom = res as Campeonato;   
    this.CamNombre = camnom[0].campeonatonom;

    this.divisionalesService.getDivisional()
     .subscribe(res => {
       var divi = res as Divisional[];
       this.DivNombre = divi[0].divisionalnom;
     });
  });
};

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
    this.getpartidosCamFec();
    this.GetUsr();
  }
}

GetUsr(){
  var usrlog: UserLogin = this.userLoginService.getUserLoggedIn();
  if(usrlog){
    this.userrol= usrlog.rol;
  };
}

} //FixtureComponent