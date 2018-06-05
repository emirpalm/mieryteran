import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Boletin } from '../../models/boletines.models';
import { BoletinesService } from '../../services/service.index';
import { ModalUploadPDFService } from '../../components/modaluploadpdf/modaluploadpdf.service';

@Component({
  selector: 'app-boletines',
  templateUrl: './boletines.component.html',
  styles: []
})
export class BoletinesComponent implements OnInit {
  forma: FormGroup;
  boletines: Boletin[] = [];

  constructor(public _boletinesService: BoletinesService, public _modalUploadPDFSevice: ModalUploadPDFService) { }

  ngOnInit() {
    this.cargarBoletines();
  }
  mostarModal(id: string) {
    this._modalUploadPDFSevice.mostrarModal('boletines', id);
  }
  buscarBoletin(termino: string) {
    if (termino.length <= 0 ) {
      this.cargarBoletines();
      return;
    }
    this._boletinesService.buscarBoletines(termino)
    .subscribe(boletin => this.boletines = boletin);
  }
  crearBoletin() {}
  cargarBoletines() {
    this._boletinesService.cargarBoletines()
    .subscribe(boletines => this.boletines = boletines );
  }

}
