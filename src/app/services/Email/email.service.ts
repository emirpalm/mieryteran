import { Email } from '../../models/email.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { Router } from '@angular/router';
import swal from 'sweetalert';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';

@Injectable()
export class EmailService {
    email: Email;

  constructor(public http: HttpClient, public router: Router) {
  }

   enviarCorreo(email: Email) {
     // tslint:disable-next-line:prefer-const
     let url = URL_SERVICIOS + '/formulario';
     return this.http.post(url, email)
     .pipe(
      map((resp: any) => {
      swal('Correo Enviado!', email.nombre , 'success');
       return resp.email;

     }));

   }
}
