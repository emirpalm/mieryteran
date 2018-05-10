import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  menu: any = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'CrearBoletin', url: 'crearboletin' },
        { titulo: 'Promesas', url: 'promesas' },
        { titulo: 'RXJS', url: 'rxjs' },
      ]
    }
  ];

  constructor() { }

}
