import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Boletin } from '../../models/boletines.models';
import { BoletinesService } from '../../services/service.index';
import { ModalUploadPDFService } from '../../components/modaluploadpdf/modaluploadpdf.service';

@Component({
  selector: 'app-crearboletin',
  templateUrl: './crearboletin.component.html',
  styles: []
})
export class CrearboletinComponent implements OnInit {
  forma: FormGroup;
  boletines: Boletin[] = [];

  constructor(public _boletinesService: BoletinesService, public _modalUploadPDFSevice: ModalUploadPDFService) { }

  ngOnInit() {
    this.cargarBoletines();
  }
  mostarModal(id: string) {
    this._modalUploadPDFSevice.mostrarModal('boletines', id);
  }
  buscarBoletin() {}
  crearBoletin() {}
  cargarBoletines() {
    this._boletinesService.cargarBoletines()
    .subscribe(boletines => this.boletines = boletines );
  }

}
