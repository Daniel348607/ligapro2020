import { Component, OnInit, AfterViewChecked } from '@angular/core';
import {DomSanitizer, SafeUrl, SafeResourceUrl} from "@angular/platform-browser";

import { Divisional } from '../../models/divisionales';
import { DivisionalesService } from '../../services/divisionales.service';
import { Campeonato } from '../../models/campeonatos';
import { CampeonatosService } from '../../services/campeonatos.service';
import { Partido } from '../../models/partidos';
import { PartidosService } from 'src/app/services/partidos.service';
import { Equipo } from '../../models/equipos';
import { EquiposService } from '../../services/equipos.service';
import { EquipoClasificacion } from '../../models/equipoclasificacion';

declare var M: any;

@Component({
  selector: 'app-clasificacionopc',
  templateUrl: './clasificacionopc.component.html',
  styleUrls: ['./clasificacionopc.component.css']
})
export class ClasificacionopcComponent implements OnInit, AfterViewChecked {

  public CamN:number;
  public CanEq:number;
  public fec:any[];
  public par:Partido[];
  public eqclas:EquipoClasificacion[];

  public pantalla: number;

  constructor(private divisionalesService: DivisionalesService,
    private campeonatosService: CampeonatosService,
    private partidosService: PartidosService,
    private equiposService: EquiposService,
    private domSanitizer: DomSanitizer) {
    
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

    this.equiposService.getCanEquipocam(0)
    .subscribe(res => {
      this.equiposService.equipo = res as Equipo[];
    });

    this.CanEq = 0;

    this.equiposService.getCanEquipocamTotal(0)
    .subscribe(res => {
      this.eqclas = res as EquipoClasificacion[];
      this.CanEq = this.eqclas.length;
    });

    this.campeonatosService.getCampeonatoDiv(divId)
    .subscribe(res => {
      this.campeonatosService.campeonatos = res as Campeonato[];
    });
  }

  getCanEquipocam(evt, camId) { //busco todos los equipos del campeonato y calculo datos para mostrar
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
    document.getElementById("CamClasificacion").style.display = "block";
    evt.currentTarget.className += " active";

    this.equiposService.getCanEquipocamTotal(camId)
    .subscribe(res => {
      this.eqclas = res as EquipoClasificacion[];
      this.CanEq = this.eqclas.length;
    });
    }
    
      // this.CanEq = this.equiposService.equipo.length;

      // this.eqclas.length = 0;

      // //sacamos los datos de los equipos, PJ, PG, etc. Se cargan en un array que se muestra
      // for (let i = 0; i < this.equiposService.equipo.length; i++) {
        
      //   //TOTALIDAD DE PARTIDOS JUGADOS POR EQUIPO
      //   this.partidosService.getpartidosjugados(camId,this.equiposService.equipo[i].equipoid)
      //   .subscribe(res => {
      //     if(res){
      //       var totpar = parseInt(res[0].totpar);
      //     }else{
      //       var totpar = 0
      //     }
      //     //PARTIDOS GANADOS POR EQUIPO
      //     this.partidosService.getpartidosganados(camId,this.equiposService.equipo[i].equipoid)
      //     .subscribe(res => {
      //       if(res){
      //         var totgan = parseInt(res[0].totgan);
      //       }else{
      //         var totgan = 0
      //       }
      //       //PARTIDOS PERDIDOS POR EQUIPO
      //       this.partidosService.getpartidosperdidos(camId,this.equiposService.equipo[i].equipoid)
      //       .subscribe(res => {
      //         if(res){
      //           var totper = parseInt(res[0].totper);
      //         }else{
      //           var totper = 0
      //         }
      //         //PARTIDOS EMPATADOS POR EQUIPO
      //         this.partidosService.getpartidosempatados(camId,this.equiposService.equipo[i].equipoid)
      //         .subscribe(res => {
      //           if(isNaN(parseInt(res[0].totemp))){
      //               var totemp = 0;
      //           }else{
      //               var totemp = parseInt(res[0].totemp); 
      //           }
      //           //GOLES A FAVOR POR EQUIPO
      //           this.partidosService.getpartidosgolesf(camId,this.equiposService.equipo[i].equipoid)
      //           .subscribe(res => {
      //             var golf1 = parseInt(res[0].golf1);
      //             if(isNaN(parseInt(res[0].golf2))){
      //                 var golf2 = 0;
      //             }else{
      //                 var golf2 = parseInt(res[0].golf2); 
      //             }
      //             var golf = golf1 + golf2;
      //             //GOLES EN CONTRA POR EQUIPO
      //             this.partidosService.getpartidosgolesc(camId,this.equiposService.equipo[i].equipoid)
      //             .subscribe(res => {
      //               var golc1 = parseInt(res[0].golc1);
      //               if(isNaN(parseInt(res[0].golc2))){
      //                   var golc2 = 0;
      //               }else{
      //                   var golc2 = parseInt(res[0].golc2); 
      //               }
      //               var golc = golc1 + golc2;
      //               var dg = golf - golc;

      //               //CARGO Y ORDENO ARRAY PARA MOSTRAR  - eqclas  
      //               var equipoid= this.equiposService.equipo[i].equipoid; 
      //               var equiponom = this.equiposService.equipo[i].equiponom;
      //               var pj = totpar;
      //               var pg = totgan;
      //               var pe = totemp;
      //               var pp = totper;
      //               var gf = golf;
      //               var gc = golc;
      //               var ptos = this.equiposService.equipo[i].camequpto;
      //               var difgol = dg;
      //               var equipoesc = this.equiposService.equipo[i].equipoesc;

      //               this.eqcla = {equipoid,equiponom,pj,pg,pe,pp,gf,gc,ptos,difgol, equipoesc};
 
      //               this.eqclas.push(this.eqcla);
                    
      //               //se ordena el array por los campos necesarios
      //               this.eqclas.sort((a, b) => {
      //                 if(a.ptos > b.ptos) return -1;
      //                 if(a.ptos < b.ptos) return 1;
      //                 if(a.difgol > b.difgol) return -1;
      //                 if(a.difgol < b.difgol) return 1;
      //                 if(a.gf > b.gf) return -1;
      //                 if(a.gf < b.gf) return 1;
      //                 if(a.gc > b.gc) return -1;
      //                 if(a.gc < b.gc) return 1;
      //               });

      //             });

      //           });

      //         });
              
      //       });

      //     });
          
      //   });  

      //  }//for equipo//////////////////////////
      //document.getElementById("cargando").style.visibility = "hidden"

  getDivisional() {
  this.divisionalesService.getDivisional()
  .subscribe(res => {
    this.divisionalesService.divisional = res as Divisional[];
  });
  }


}
