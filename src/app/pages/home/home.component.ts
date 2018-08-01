import { Component, OnInit } from '@angular/core';
import { Boletin } from '../../models/boletines.models';
import { BoletinesService } from '../../services/service.index';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  boletines: Boletin[] = [];
  anio: number = new Date().getFullYear() - 1934;
  constructor(public _boletinesService: BoletinesService) { }

  ngOnInit() {
    this.cargarBoletines();
  }
  cargarBoletines() {
    this._boletinesService.cargarBoletines()
    .subscribe(boletines => this.boletines = boletines );
  }
}
