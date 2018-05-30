import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICIOS } from '../config/config';

@Pipe({
  name: 'pdf'
})
export class PdfPipe implements PipeTransform {

  transform(pdf: string, tipo: string = 'boletin'): any {

    // tslint:disable-next-line:prefer-const
    let url = URL_SERVICIOS + '/pdf';
    if (!pdf) {
      return url + '/boletines/xxx';
    }
    if (pdf.indexOf('https') >= 0) {
      return pdf;
    }
    switch (tipo) {
      case 'boletin':
      url += '/boletines/' + pdf;

      break;

      case 'boletin1':
      url += '/boletines2/' + pdf;

      break;

      case 'boletin3':
      url += '/boletines3/' + pdf;

      break;
      default:
      console.log('El PDF no existe');
      url += '/boletines/xxx';
    }
    return url;
  }

}
