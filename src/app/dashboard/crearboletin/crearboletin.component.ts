import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Boletin } from '../../models/boletines.models';
import { BoletinesService } from '../../services/service.index';

@Component({
  selector: 'app-crearboletin',
  templateUrl: './crearboletin.component.html',
  styles: []
})
export class CrearboletinComponent implements OnInit {
  forma: FormGroup;
  boletines: Boletin[] = [];

  constructor(public _boletinesService: BoletinesService) { }

  ngOnInit() {
    this.cargarBoletines();
  }
  buscarBoletin() {}
  crearBoletin() {}
  cargarBoletines() {
    this._boletinesService.cargarBoletines()
    .subscribe(boletines => this.boletines = boletines );
  }

}
