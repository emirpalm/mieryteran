import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import swal from 'sweetalert';
import { UsuarioService } from '../../services/service.index';
import { Usuario } from '../../models/usuarios.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {

  forma: FormGroup;

  constructor(public _usuarioService: UsuarioService, public router: Router) {
  }

  sonIguales(campo1: string, campo2: string) {
    return(group: FormGroup) => {
      // tslint:disable-next-line:prefer-const
      let pass1 = group.controls[campo1].value;
      // tslint:disable-next-line:prefer-const
      let pass2 = group.controls[campo2].value;

      if (pass1 === pass2) {
        return null;
      }
      return {
     sonIguales: true
    };
    };
  }

  ngOnInit() {
    this.forma = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      password2: new FormControl(null, Validators.required),
      condiciones: new FormControl(false),

    }, {validators: this.sonIguales('password', 'password2')});

    this.forma.setValue({
      nombre: 'Test',
      email: 'test@test.com',
      password: '123456',
      password2: '123456',
      condiciones: true

    });
  }

  registrarUsuario() {
    if (this.forma.invalid) {
      return;
    }
    if (!this.forma.value.condiciones) {
      swal('Importante!', 'Debe aceptar los terminos!', 'warning');
      return;
    }
    // tslint:disable-next-line:prefer-const
    let usuario = new Usuario(
      this.forma.value.nombre,
      this.forma.value.email,
      this.forma.value.password
    );
    this._usuarioService.crearUsuario(usuario)
    .subscribe(resp => this.router.navigate(['/login']));
  }

}