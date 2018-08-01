import { Email } from '../../models/email.model';
import { Component, OnInit } from '@angular/core';
import { ModalContactoService } from './modalcontacto.service';
import { EmailService } from '../../services/service.index';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modalcontacto',
  templateUrl: './modalcontacto.component.html',
  styles: []
})
export class ModalcontactoComponent implements OnInit {
  email: Email = new Email();
// tslint:disable-next-line:no-inferrable-types
oculto: string = '';

  constructor(public _emailService: EmailService, public _modalContactoService: ModalContactoService) {
  }

  ngOnInit() {
  }
  cerrarModal() {
    this._modalContactoService.ocultarModal();
  }
  enviarEmail(f: NgForm) {
    console.log(f.valid);
    console.log(f.value);

    if (f.invalid) {
      return;
    }
    this._emailService.enviarCorreo(this.email)
    .subscribe(email => {
      console.log(email);
    });
   }

}
