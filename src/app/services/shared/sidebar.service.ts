import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  menu: any = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Crear Boletin', url: 'crearboletin' },
        { titulo: 'Registrar Usuarios', url: 'register' },
        { titulo: 'Promesas', url: 'promesas' },
        { titulo: 'RXJS', url: 'rxjs' },
      ]
    },
    {
      titulo: 'Mantenimientos',
      icono: 'mdi mdi-folder-lock-open',
      submenu: [
        { titulo: 'Usuarios', url: 'usuarios' }
      ]
    }
  ];

  constructor() { }

}
