import { Component, OnInit } from '@angular/core';
import { Embarque } from '../../models/embarques.model';
import { EmbarquesService } from '../../services/service.index';
import { ScriptService } from '../../services/scritpt/script.service';

declare var jQuery: any;
@Component({
  selector: 'app-embarques',
  templateUrl: './embarques.component.html',
  styles: []
})
export class EmbarquesComponent implements OnInit {
  embarques: Embarque[] = [];
  fechactual: Date;
  // tslint:disable-next-line:no-inferrable-types
  desde: number = 0;
  // tslint:disable-next-line:no-inferrable-types
  id: number = 643;
  // tslint:disable-next-line:no-inferrable-types
  totalRegistros: number = 0;
   // tslint:disable-next-line:no-inferrable-types
  cargando: boolean = true;

  constructor(public _embarqueService: EmbarquesService /*public _scriptService: ScriptService*/) { }

  ngOnInit() {
    this.cargarEmbarques();
  }
  cargarEmbarques() {
    this.cargando = true;
    this._embarqueService.cargarEmbarques(this.id, this.desde)
    .subscribe((resp: any) => {
      this.totalRegistros = resp.total;
      this.embarques = resp.embarques;
      this.cargando = false;
      jQuery(function($) {
        $('.table').footable(); });
      });
  }

  cambiarDesde(valor: number) {
    // tslint:disable-next-line:prefer-const
    let desde = this.desde + valor;
    console.log(desde);
    if (desde >= this.totalRegistros) {
      return;
    }
    if (desde < 0) {
      return;
    }
    this.desde += valor;
    this.cargarEmbarques();

  }

  buscarEmbarque(termino: string) {
    if (termino.length <= 0) {
      this.cargarEmbarques();
      return;
    }
    this.cargando = true;
    this._embarqueService.buscarEmbarque(termino)
    .subscribe((embarques: Embarque[]) => {
      this.embarques = embarques;
      this.cargando = false;
    });
  }

}
