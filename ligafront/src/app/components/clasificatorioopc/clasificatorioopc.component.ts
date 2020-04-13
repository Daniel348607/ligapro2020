import { Component, OnInit, AfterViewChecked } from '@angular/core';
import {DomSanitizer, SafeUrl, SafeResourceUrl} from "@angular/platform-browser";
import { Partido } from '../../models/partidos';
import { PartidosService } from 'src/app/services/partidos.service';

declare var M: any;

@Component({
  selector: 'app-clasificatorioopc',
  templateUrl: './clasificatorioopc.component.html',
  styleUrls: ['./clasificatorioopc.component.css']
})

export class ClasificatorioopcComponent implements OnInit, AfterViewChecked {

  public pantalla: number;
  public CamPpal:string;
  public CamNom:string;
  public fechas:any[];
  public par:Partido[];

  constructor(private domSanitizer: DomSanitizer,
    private partidosService: PartidosService) { }

  ngOnInit() {
    if (window.screen.width >= 640) {
      this.pantalla = 640;
    }
    if (window.screen.width < 640) {
      this.pantalla = 360;
    }
  }

  ngAfterViewChecked(){
    if (window.screen.width >= 640) {
      this.pantalla = 640;
    }
    if (window.screen.width < 640) {
      this.pantalla = 360;
    }
  }

  fechasCampeonatosLlave(evt, copa) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontenth");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    
    document.getElementById("CamCon").style.display = "block";
    evt.currentTarget.className += " active";

    if(copa===1){
      this.CamNom = 'Copa Revancha'
    }
    if(copa===2){
      this.CamNom = 'Copa de Campeones'
    }

    this.CamPpal = 'GRUPOS'

    this.partidosService.getpartidosNomFecCla(this.CamPpal, this.CamNom)
    .subscribe(res2 => {
      this.par = res2 as Partido[];
    });
  
  }

}
