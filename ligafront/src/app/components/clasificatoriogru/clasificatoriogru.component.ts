import { Component, Output, Input, ViewEncapsulation,OnInit, AfterViewChecked, ɵConsole} from '@angular/core';
import { NgForm } from '@angular/forms';
import {Routes, RouterModule, Router, ActivatedRoute } from '@angular/router';
import {DomSanitizer, SafeUrl, SafeResourceUrl} from "@angular/platform-browser";

import { Partido } from '../../models/partidos';
import { PartidosService } from 'src/app/services/partidos.service';
import { UserLogin } from '../../models/usuariologin'
import { UserLoginService } from '../../services/usuariologin.service'
import { EquiposService } from '../../services/equipos.service';
import { EquipoClasificacion } from '../../models/equipoclasificacion';


declare var M: any;

@Component({
  selector: 'app-clasificatoriogru',
  templateUrl: './clasificatoriogru.component.html',
  styleUrls: ['./clasificatoriogru.component.css']
})

export class ClasificatoriogruComponent implements OnInit , AfterViewChecked {

public CanEq:number;
public eqclas:EquipoClasificacion[];
public fechas:any[];
public canfec: number;

public pantalla: number;

constructor(private partidosService: PartidosService, 
  private equiposService: EquiposService,
  private route: ActivatedRoute,
  private userLoginService: UserLoginService,
  private domSanitizer: DomSanitizer,
  private partidosservice: PartidosService,
  private router: Router) { 
  }

ngOnInit() {
  if (window.screen.width >= 640) {
    this.pantalla = 640;
  }
  if (window.screen.width < 640) {
    this.pantalla = 360;
  }

  this.partidosservice.getpartidosNomFec('GRUPO')
  .subscribe(res => {
    this.fechas = JSON.parse(JSON.stringify(res));
    this.equiposService.getCanEquipocamTotalCla(this.fechas[0].campeonatoid)
    .subscribe(res => {
      this.eqclas = res as EquipoClasificacion[];
      if(this.eqclas){
        this.CanEq = this.eqclas.length;
      }else{
        this.CanEq = 0;
      }
    });
  }); ;

  
}

ngAfterViewChecked(){
  if (window.screen.width >= 640) {
    this.pantalla = 640;
  }
  if (window.screen.width < 640) {
    this.pantalla = 360;
  }
}

} //ClasificatoriogruComponent

