import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import { observable } from 'rxjs';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit {

  constructor() {


    this.regresaObservable()
    .subscribe(
      numero => console.log('Subs', numero),
      error => console.error('Error en el obs', error),
      () => console.log('El observador termino')
    );
  }

  ngOnInit() {
  }

  regresaObservable(): Observable<any> {
       // tslint:disable-next-line:prefer-const
       return new Observable(Observer => {
        let contador = 0;
        // tslint:disable-next-line:prefer-const
        let intervalo = setInterval(() => {
         contador += 1;
         Observer.next(contador);

         if (contador === 3 ) {
           clearInterval(intervalo);
           Observer.complete();
         }
        // if (contador === 2) {
        //   Observer.error('Auxilio');
        // }
        }, 1000);
      }).retry(2);

  }

}
