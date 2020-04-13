import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { Noticia } from '../../models/noticias';
import { NoticiasService } from '../../services/noticias.service';
import {DomSanitizer, SafeUrl, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-imgppal',
  templateUrl: './imgppal.component.html',
  styleUrls: ['./imgppal.component.css']
})
export class ImgppalComponent implements OnInit {
  private noticias: number;
  private pantalla: number;

  constructor(private router: Router,
    private noticiasService: NoticiasService,
    private domSanitizer: DomSanitizer) { }

  ngOnInit() {
    this.getNoticia();
    this.noticias = parseInt(sessionStorage.getItem('noticias'), 10);
    //Tamaño img noticias segun la pantalla
    if (window.screen.width >= 640) {
      this.pantalla = 640;
    }

    if (window.screen.width < 640) {
      this.pantalla = 360;
    }
  }

  getNoticia() {
    this.noticiasService.getNoticia()
      .subscribe(res => {
        this.noticiasService.noticias = res as Noticia[];
      });
  }

  ShowNews(mostrar: number){
    if(mostrar === 1){
      sessionStorage.setItem('noticias', '1');
      this.noticias = 1;
    }else{
      sessionStorage.setItem('noticias', '0');
      this.noticias = 0;
    }
  }


}
