import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';

@Injectable()
export class BoletinesService {

    // tslint:disable-next-line:no-inferrable-types
    totalBoletines: number = 0;

    constructor(private http: HttpClient) {

    }

    cargarBoletines() {
        // tslint:disable-next-line:prefer-const
        let url = URL_SERVICIOS + '/boletin';

        return this.http.get(url)
        .map((resp: any) => {
            this.totalBoletines = resp.total;
            return resp.boletines;
        });
    }

    buscarBoletines(termino: string) {
        // tslint:disable-next-line:prefer-const
        let url = URL_SERVICIOS + '/busqueda/collection/boletines/' + termino;
        return this.http.get(url)
        .map((resp: any) => resp.boletines);
      }

}
