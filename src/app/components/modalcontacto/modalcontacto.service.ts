import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable()
export class ModalContactoService {
  // tslint:disable-next-line:no-inferrable-types
  public oculto: string = 'oculto';

  public notification = new EventEmitter<any>();

  constructor() { console.log('modal ContactoServices listo'); }

  ocultarModal() {
    this.oculto = 'oculto';
   }
  mostrarModal() {
    this.oculto = '';
   }
}
