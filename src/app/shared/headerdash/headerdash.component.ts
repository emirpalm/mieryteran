import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/service.index';
import { Usuario } from '../../models/usuarios.model';

@Component({
  selector: 'app-headerdash',
  templateUrl: './headerdash.component.html',
  styles: []
})
export class HeaderdashComponent implements OnInit {
  usuario: Usuario;

  constructor(public _usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuario = this._usuarioService.usuario;
  }

}
