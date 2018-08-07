import { Email } from '../../models/email.model';
import { Component, OnInit } from '@angular/core';
import { ModalContactoService } from './modalcontacto.service';
import { EmailService } from '../../services/service.index';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RECAPTCHA_URL } from '../../directives/recaptcha.directive';

declare const grecaptcha: any;
@Component({
  selector: 'app-modalcontacto',
  templateUrl: './modalcontacto.component.html',
  providers: [{
    provide: RECAPTCHA_URL,
    useValue: 'http://localhost:3000/validate_captcha'
  }]
})
export class ModalcontactoComponent implements OnInit {
  email: Email = new Email();
  contacto: FormGroup;
// tslint:disable-next-line:no-inferrable-types
oculto: string = '';

  constructor(public _emailService: EmailService, public _modalContactoService: ModalContactoService) {
  }

  ngOnInit() {
    this.contacto = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      asunto: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      mensaje: new FormControl(null, Validators.required),
      captcha: new FormControl()
    });
  }
  cerrarModal() {
    this._modalContactoService.ocultarModal();
  }
  enviarEmail() {
    if (this.contacto.invalid) {
      return;
    }
    // tslint:disable-next-line:prefer-const
    let email = new Email(
      this.contacto.value.nombre,
      this.contacto.value.asunto,
      this.contacto.value.email,
      this.contacto.value.mensaje
    );
    this._emailService.enviarCorreo(email)
    .subscribe(resp => { console.log(email);
      this.contacto.reset();
      grecaptcha.reset();
    });
   }

}
