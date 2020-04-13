import { Component, OnInit, AfterViewChecked } from '@angular/core';

import { ParametrosService } from 'src/app/services/parametros.service';

import {Routes, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-torneosopc',
  templateUrl: './torneosopc.component.html',
  styleUrls: ['./torneosopc.component.css']
})
export class TorneosopcComponent implements OnInit, AfterViewChecked {

  public pantalla: number;
  public HayCla: number;

  constructor(private parametrosService: ParametrosService,
    private router: Router) { }

  ngOnInit() {
    if (window.screen.width >= 640) {
      this.pantalla = 640;
    }
    if (window.screen.width < 640) {
      this.pantalla = 360;
    }
    this.getParametroCla();
  }

  ngAfterViewChecked(){
    if (window.screen.width >= 640) {
      this.pantalla = 640;
    }
    if (window.screen.width < 640) {
      this.pantalla = 360;
    }
  }

  getParametroCla(){
    this.parametrosService.getParametro('HayClasificatorio')
    .subscribe(res => {
      //Obtengo el id que se le ingreso al partido
      var par = JSON.parse(JSON.stringify(res));
     
      this.HayCla = par[0].ParametrosValInt;
      if(this.HayCla == 0){
        this.router.navigateByUrl('/fixtureopci');
      }
    });
  };

}
