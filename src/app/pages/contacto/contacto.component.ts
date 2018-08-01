import { ModalContactoService } from '../../components/modalcontacto/modalcontacto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styles: []
})
export class ContactoComponent implements OnInit {

    constructor(public _modalContactoSevice: ModalContactoService) { }

 ngOnInit() {
 }
 mostarModal() {
  this._modalContactoSevice.mostrarModal();
}
}
