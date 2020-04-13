  import { Component, OnInit, ɵConsole, AfterViewChecked } from '@angular/core';
  import { Divisional } from '../../models/divisionales';
  import { DivisionalesService } from '../../services/divisionales.service';
  import { Campeonato } from '../../models/campeonatos';
  import { CampeonatosService } from '../../services/campeonatos.service';
  import { Jugpar } from '../../models/jugpar';
  import { JuparsService } from 'src/app/services/jupars.service';
  
  @Component({
    selector: 'app-goleadoresopc',
    templateUrl: './goleadoresopc.component.html',
    styleUrls: ['./goleadoresopc.component.css']
  })
  export class GoleadoresopcComponent implements OnInit, AfterViewChecked {
  
    public CamN:number;
    public fec:any[];
    public CanJug:number;

    public pantalla: number;
  
    constructor(private divisionalesService: DivisionalesService,
      private campeonatosService: CampeonatosService,
      private juparsService: JuparsService) {
      
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
      this.campeonatosService.getCampeonatoDiv(0)
      .subscribe(res => {
        this.campeonatosService.campeonatos = res as Campeonato[];
      });
      this.juparsService.getJugGol(0)
      .subscribe(res => {
        this.juparsService.jugpar = res as Jugpar[];
      });
      this.getDivisional();
    }
  
    ngAfterViewChecked(){
      if (window.screen.width >= 640) {
        this.pantalla = 640;
      }
      if (window.screen.width < 640) {
        this.pantalla = 360;
      }
    }

    campeonatosDivisionales(evt, divId) {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
      document.getElementById("DivCon").style.display = "block";
      evt.currentTarget.className += " active";

      this.juparsService.getJugGol(0)
      .subscribe(res => {
        this.juparsService.jugpar = res as Jugpar[];
      });

      this.CanJug = 0

      this.campeonatosService.getCampeonatoDiv(divId)
      .subscribe(res => {
        this.campeonatosService.campeonatos = res as Campeonato[];
      });
    }
  
    getGolesJug(evt, camId) {
      //document.getElementById("cargando").style.visibility = "visible"

      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontenth");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablinksh");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
      this.CamN = camId;
      document.getElementById("GolJug").style.display = "block";
      evt.currentTarget.className += " active";
  
      this.juparsService.getJugGol(camId)
      .subscribe(res => {
        this.juparsService.jugpar = res as Jugpar[];
        this.CanJug = this.juparsService.jugpar.length;
      });
      //document.getElementById("cargando").style.visibility = "hidden"
    }
  
    getDivisional() {
    this.divisionalesService.getDivisional()
    .subscribe(res => {
      this.divisionalesService.divisional = res as Divisional[];
    });
    }
  }
  