import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuarios.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuario: Usuario;
  token: string;

  constructor(
    public http: HttpClient,
    public router: Router
  ) {
    this.cargarStorage();
  }


   estaLogueado() {
     return (this.token.length > 5 ) ? true : false;

   }
   cargarStorage() {
     if (localStorage.getItem('token')) {
       this.token = localStorage.getItem('token');
       this.usuario = JSON.parse(localStorage.getItem('usuario'));
     } else {
       this.token = '';
       this.usuario = null;
     }
   }
   guardarStorage(id: string, token: string, usuario: Usuario) {
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(usuario));

    this.usuario = usuario;
    this.token = token;
   }

   logout() {
     this.usuario = null;
     this.token = '';

     localStorage.removeItem('token');
     localStorage.removeItem('usuario');

     this.router.navigate(['/login']);
   }

   login(usuario: Usuario, recuerdame: boolean = false) {
     if (recuerdame) {
       localStorage.setItem('email', usuario.email);
     } else {
       localStorage.removeItem('email');
     }
     // tslint:disable-next-line:prefer-const
     let url = URL_SERVICIOS + '/login';
     return this.http.post(url, usuario)
     .map((resp: any) => {
      this.guardarStorage( resp.id, resp.token, resp.usuario );
      // localStorage.setItem('id', resp.id);
      // localStorage.setItem('token', resp.token);
      // localStorage.setItem('usuario', JSON.stringify(resp.usuario));
       return true;
     });

  }

   crearUsuario(usuario: Usuario) {
     // tslint:disable-next-line:prefer-const
     let url = URL_SERVICIOS + '/usuario';
     return this.http.post(url, usuario)
     .map((resp: any) => {
      swal('Usuario Creado!', usuario.email , 'success');
       return resp.usuario;

     });

   }
}
