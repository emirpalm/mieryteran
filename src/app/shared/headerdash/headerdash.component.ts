import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/service.index';

@Component({
  selector: 'app-headerdash',
  templateUrl: './headerdash.component.html',
  styles: []
})
export class HeaderdashComponent implements OnInit {

  constructor(public _usuarioService: UsuarioService) { }

  ngOnInit() {
  }

}
