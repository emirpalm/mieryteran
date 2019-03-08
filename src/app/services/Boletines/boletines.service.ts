import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { UsuarioService } from '../usuario/usuario.service';
import { Boletin } from '../../models/boletines.models';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';

@Injectable()
export class BoletinesService {

    // tslint:disable-next-line:no-inferrable-types
    totalBoletines: number = 0;

    constructor(private http: HttpClient,
    public _usuarioService: UsuarioService) {

    }

    cargarBoletines() {
        // tslint:disable-next-line:prefer-const
        let url = URL_SERVICIOS + '/boletin';

        return this.http.get(url)
        .pipe(
        map((resp: any) => {
            this.totalBoletines = resp.total;
            return resp.boletines;
        }));
    }

    buscarBoletines(termino: string) {
        // tslint:disable-next-line:prefer-const
        let url = URL_SERVICIOS + '/busqueda/collection/boletines/' + termino;
        return this.http.get(url)
        .pipe(
        map((resp: any) => resp.boletines));
      }

    borrarBoletin(id: string) {
        // tslint:disable-next-line:prefer-const
        let url = URL_SERVICIOS + '/boletin/' + id;
        url += '?token=' + this._usuarioService.token;

        return this.http.delete(url)
        .pipe(
        map(resp => {
            swal('Boletin Borrado', 'Boletin Borrado Correctamente', 'success');
            return resp;
        }));
    }

    guardarBoletin(boletin: Boletin) {
        // tslint:disable-next-line:prefer-const
        let url = URL_SERVICIOS + '/boletin/';
        url += '?token=' + this._usuarioService.token;

        return this.http.post(url, boletin)
        .pipe(
        map((resp: any) => {
            swal('Boletin Creado', 'Boletin Creado Correctamente', 'success');
            return resp.boletin;
        }));
    }

}
