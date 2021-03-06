import { Component, Output, Input, ViewEncapsulation,OnInit, AfterViewChecked} from '@angular/core';
import { NgForm } from '@angular/forms';
import {Routes, RouterModule, Router } from '@angular/router';
import {DomSanitizer, SafeUrl, SafeResourceUrl} from "@angular/platform-browser";

import { AppService } from './app.service';

import { ModalService } from './popup/modal.service';
import { ModalComponent } from './popup/modal.component';

import { UserLogin } from './models/usuariologin'
import { UserLoginService } from './services/usuariologin.service'

import { Usuario } from './models/usuarios';

import { Noticia } from './models/noticias';
import { NoticiasService } from './services/noticias.service';

declare var M: any;

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './popup/modal.less'],
})

export class AppComponent implements OnInit,AfterViewChecked {

  private username: string;
  private password: string;
  private rol: number;
  private id: number;
  private equipo: number;
  private appc: AppComponent;

  private usraux: Usuario;
  private userlog: string;
  private userrol: number;
  private noticias: number;
  private pantalla: number;

  constructor(private modalService: ModalService, 
    private userLoginService: UserLoginService, 
    private router: Router, 
    private appService: AppService,
    private domSanitizer: DomSanitizer,
    private noticiasService: NoticiasService) {
  }

  ngOnInit() {
    this.GetUsr();
    this.getNoticia();
    this.noticias = 0;//parseInt(sessionStorage.getItem('noticias'), 10);
    //Tamaño img noticias segun la pantalla
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

  openModal(id: string) { //abrir la pantalla de log
      this.modalService.open(id);
  }

  closeModal(id: string) { //cerrar la pantalla de log
    this.username = '';
    this.password = '';
    this.modalService.close(id);
  }

  logIn(form?: NgForm) { //procedimiento de log in

    let usr: UserLogin = {username: this.username, password: this.password, rol: this.rol, id: this.id, equipo: this.equipo}; //se cargan valores en arrray
    this.noticias = 1;

    this.appService.getUsuarioLogin(usr).subscribe(res => {
      this.userLoginService.usuarioLogeado = res as Usuario;
      this.usraux = this.userLoginService.usuarioLogeado;

      if(typeof Object.keys(this.usraux)[0] === 'undefined') { //verifico datos, si estan bien los datos, guardo el resultado
        this.username='';
        this.password='';
        this.rol=0;
        this.id = 0;
        this.equipo = 0;
        M.toast({html: 'Usuario/Password incorrectos'});
      }else{
        usr = {username: this.usraux[0].UsuariosAli, password: this.usraux[0].UsuariosPas, rol: this.usraux[0].UsuariosPer, id: this.usraux[0].UsuariosId, equipo: this.usraux[0].equipoid};
        this.userLoginService.setUserLoggedIn(usr);
        this.username='';
        this.password='';
        this.rol=0;
        this.id = 0;
        this.equipo = 0;

        this.ShowNews(1);
        
        this.closeModal('custom-modal-1');
        form.reset();
        this.GetUsr();
        M.toast({html: 'Bienvenido/a'});
        this.router.navigateByUrl('/');
      };
    }
  )}

  LogOut(form?: NgForm) { // procedimiento de logout
    this.userLoginService.setUserLoggedOut();
    form.reset();
    this.noticias = 1;
    this.router.navigateByUrl('/');
  }

  GetUsr(){ //saber usuario logeado
    var usrlog: UserLogin = this.userLoginService.getUserLoggedIn();
    if(usrlog){
      this.userrol= usrlog.rol;
      this.userlog = usrlog.username;
      this.equipo = usrlog.equipo;
    };
  }

  ShowNews(mostrar: number){ //mostrar noticias
    if(mostrar === 1){
      sessionStorage.setItem('noticias', '1');
      this.noticias = 1;
    }else{
      sessionStorage.setItem('noticias', '0');
      this.noticias = 0;
    }
  }

  getNoticia() {
    this.noticiasService.getNoticia()
      .subscribe(res => {
        this.noticiasService.noticias = res as Noticia[];
      });
  }

} //AppComponent