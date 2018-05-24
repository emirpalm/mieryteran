import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICIOS } from '../config/config';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string, tipo: string = 'usuario'): any {

    // tslint:disable-next-line:prefer-const
    let url = URL_SERVICIOS + '/img';
    if (!img) {
      return url + '/usuarios/xxx';
    }
    if (img.indexOf('https') >= 0) {
      return img;
    }
    switch (tipo) {
      case 'usuario':
      url += '/usuarios/' + img;

      break;

      case 'usuario2':
      url += '/usuarios2/' + img;

      break;

      case 'usuario3':
      url += '/usuarios3/' + img;

      break;
      default:
      console.log('tipo de imagen no existe');
      url += '/usuarios/xxx';
    }
    return url;
  }

}
