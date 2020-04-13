import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Divisional } from '../../models/divisionales';
import { DivisionalesService } from '../../services/divisionales.service';
import { Campeonato } from '../../models/campeonatos';
import { CampeonatosService } from '../../services/campeonatos.service';
import { Partido } from '../../models/partidos';
import { PartidosService } from 'src/app/services/partidos.service';

@Component({
  selector: 'app-fixtureopci',
  templateUrl: './fixtureopci.component.html',
  styleUrls: ['./fixtureopci.component.css']
})
export class FixtureopciComponent implements OnInit, AfterViewChecked {

  public CamN:number;
  public fec:any[];
  public par:Partido[];
  public pantalla: number;

  constructor(private divisionalesService: DivisionalesService,
    private campeonatosService: CampeonatosService,
    private partidosService: PartidosService) {
    
  }

  ngOnInit() {
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

    this.partidosService.getpartidosFecCam(0,'0')
    .subscribe(res => {
      this.par = res as Partido[];
    });

    this.campeonatosService.getCampeonatoDiv(divId)
    .subscribe(res => {
      this.campeonatosService.campeonatos = res as Campeonato[];
    });
  }

  fechasCampeonatos(evt, camId, camnom) {
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
    document.getElementById("CamCon").style.display = "block";
    evt.currentTarget.className += " active";

    if(camnom === 'Clasificatorio'){
      window.location.href = '../clasificatorioopc';
    }else{
      this.partidosService.getpartidosFecCam(camId, camnom)
      .subscribe(res => {
        this.par = res as Partido[];
      });
    }
  }

  fechasCampeonatosLlave(evt, camId) {
    
  }

  getDivisional() {
  this.divisionalesService.getDivisional()
  .subscribe(res => {
    this.divisionalesService.divisional = res as Divisional[];
  });
  }
}
