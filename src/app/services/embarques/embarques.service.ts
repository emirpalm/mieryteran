import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { UsuarioService } from '../usuario/usuario.service';
import { Embarque } from '../../models/embarques.model';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';

@Injectable()
export class EmbarquesService {

    constructor(private http: HttpClient) {

    }


    cargarEmbarques(id: number = 643, desde: number = 0) {
         // tslint:disable-next-line:prefer-const
    let url = URL_SERVICIOS + '/embarque?id=' + id + '&fechactual&desde=' + desde;

    return this.http.get(url);

    }

    buscarEmbarque(termino: string) {
        // tslint:disable-next-line:prefer-const
        let url = URL_SERVICIOS + '/busqueda/collection/embarques/' + termino;
        return this.http.get(url)
        .pipe(
        map((resp: any) => resp.embarques));
      }


}
