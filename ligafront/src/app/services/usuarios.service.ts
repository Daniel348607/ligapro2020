import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Usuario } from '../models/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  selectedUsuario: Usuario;
  usuarios: Usuario[];
  
  readonly URL_Base = 'http://18.188.46.253:8089/'
  readonly URL_API = this.URL_Base + 'liga/usuario';

  constructor(private http: HttpClient) { 
    this.selectedUsuario = new Usuario();
  }

  postUsuario(usuario: Usuario) {
    return this.http.post(this.URL_API, usuario);
  }

  getUsuario() {
    return this.http.get(this.URL_API);
  }

  putUsuario(usuario: Usuario) {
    return this.http.put(this.URL_API + `/${usuario.usuariosid}`, usuario);
  }

  deleteUsuario(usuarioid: number) {
    return this.http.delete(this.URL_API + `/` + usuarioid);
  }
}

