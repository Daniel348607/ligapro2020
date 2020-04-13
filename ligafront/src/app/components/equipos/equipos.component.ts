import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Equipo } from '../../models/equipos';
import { EquipoImg } from '../../models/equipoimg';
import { EquiposService } from '../../services/equipos.service';

import { Jugador } from '../../models/jugadores';
import { JugadoresService } from '../../services/jugadores.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

declare var M: any;

@Component({
  selector: 'app-equipo',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css'],
  providers: [ EquiposService, JugadoresService ]
})
export class EquipoComponent implements OnInit,AfterViewChecked {

  public file:File;
  public fotoeq:any;
  public escudoeq:any;
  public EqImg: EquipoImg;
  public varequiponom: string;
  public CanJug: number;

  constructor(private equiposService: EquiposService,
    private jugadoresService : JugadoresService) { }

  ngOnInit() {
    this.fecins();    
    this.getEquipo();
    this.equiposService.selectedEquipo.equipoest = "Activo";
  }

  ngAfterViewChecked(){
    //this.equiposService.selectedEquipo.equipoest = "Activo";
  }

  //Cargo fecha de hoy al ingresar a la pagina en fecha de inscripcion
  fecins(){
    var d = new Date().toISOString().split('T')[0];
    this.equiposService.selectedEquipo.equipofecins = d;
  }

  getEquipo() {
  this.equiposService.getEquipoPpal()
    .subscribe(res => {
      this.equiposService.equipo = res as Equipo[];
    });
  }


  //Guardo o edito datos del equipo
  addEquipo(form?: NgForm) {

   var est = document.querySelector("#estados option[value='"+form.value.equipoest+"']").id;
   form.value.equipoest = est;

   if(form.value.equiponom && form.value.equipomailcon && form.value.equipoest){
    form.value.equipocanjug = 0

    if(form.value.equipoid) {
      form.value.equipofot = this.fotoeq;
      form.value.equipoesc = this.escudoeq;
      
      this.equiposService.putEquipo(form.value)
      .subscribe(res => {
        this.resetForm(form);
        M.toast({html: 'Equipo Editado'});
      });
    } else {
      form.value.equipofot = this.fotoeq;
      form.value.equipoesc = this.escudoeq;
      this.equiposService.postEquipo(form.value)
      .subscribe(res => {
        this.resetForm(form);
        M.toast({html: 'Equipo Ingresado'});
      });
    };
    document.getElementById("equipoest").removeAttribute("readonly");
    this.equiposService.selectedEquipo.equipoest = "Activo"
    document.getElementById("equipoest").setAttribute("readonly", "TRUE");
   }else{
    alert('Debe ingresar Nombre, estado y eMail de contacto')
   };
 }

 //Guardo la imagen seleccionada
 FotoEq(event) {
  this.file = event.target.files[0];
  var reader = new FileReader();
  reader.readAsDataURL(this.file);
  reader.onload = () => {
    this.fotoeq = reader.result
    this.fotoeq = this.fotoeq.split(',')[1];
  };
}

//Guardo la imagen seleccionada
EscudoEq(event) {
  this.file = event.target.files[0];
  var reader = new FileReader();
  reader.readAsDataURL(this.file);
  reader.onload = () => {
    this.escudoeq = reader.result
    this.escudoeq = this.escudoeq.split(',')[1];
  };
}

getCanJug(equipoid: number){
  this.jugadoresService.getJugadorEncargado(equipoid)
  .subscribe(res => {
    this.jugadoresService.jugador = res as Jugador[];
    this.CanJug = 0;
    for(var jug in this.jugadoresService.jugador)
     this.CanJug = this.CanJug + 1;
  });
 };

Buscar(){
  // Declare variables 
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("BEqu");
  filter = input.value.toUpperCase();
  table = document.getElementById("TEqu");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query #F5A9A9
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}

 editEquipo(equipo: Equipo) {
  this.getCanJug(equipo.equipoid);
  this.equiposService.selectedEquipo = equipo;
  document.getElementById("equipoest").removeAttribute("readonly");
 }

 deleteEquipo(equipoid: number, form: NgForm) {
   if(confirm('Confirma que desea borrar la Equipo?')) {
      this.equiposService.deleteEquipo(equipoid)
       .subscribe(res => {
         this.resetForm(form);
         M.toast({html: 'Equipo Borrado'});
       });
       this.equiposService.selectedEquipo.equipoest = "Activo"
   }
 }

 resetForm(form?: NgForm) {
   if (form) {
     form.reset();

     //document.getElementById("equipoest").setAttribute("readonly", "false");
     this.equiposService.selectedEquipo.equipoest = "Activo"

     this.getEquipo()
     
   }
 }

}


