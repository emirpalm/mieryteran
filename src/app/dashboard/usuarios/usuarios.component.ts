import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuarios.model';
import { URL_SERVICIOS } from '../../config/config';
import { UsuarioService } from '../../services/service.index';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: []
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];
  // tslint:disable-next-line:no-inferrable-types
  desde: number = 0;
  // tslint:disable-next-line:no-inferrable-types
  totalRegistros: number = 0;
   // tslint:disable-next-line:no-inferrable-types
  cargando: boolean = true;

  constructor(public _usuarioService: UsuarioService) { }

  ngOnInit() {
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this.cargando = true;
    this._usuarioService.cargarUsuarios(this.desde)
    .subscribe((resp: any) => {
      this.totalRegistros = resp.total;
      this.usuarios = resp.usuarios;
      this.cargando = false;
    });


  }

  cambiarDesde(valor: number) {
    // tslint:disable-next-line:prefer-const
    let desde = this.desde + valor;
console.log(desde);
    if (desde >= this.totalRegistros) {
      return;
    }
    if (desde < 0) {
      return;
    }
    this.desde += valor;
    this.cargarUsuarios();

  }

  buscarUsuarios(termino: string) {
    if (termino.length <= 0) {
      this.cargarUsuarios();
      return;
    }
    this.cargando = true;
    this._usuarioService.buscarUsuarios(termino)
    .subscribe((usuarios: Usuario[]) => {
      this.usuarios = usuarios;
      this.cargando = false;

    });
  }

}
