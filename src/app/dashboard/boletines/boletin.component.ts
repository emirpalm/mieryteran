import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Boletin } from '../../models/boletines.models';
import { BoletinesService } from '../../services/service.index';
import { Usuario } from '../../models/usuarios.model';

@Component({
  selector: 'app-boletin',
  templateUrl: './boletin.component.html',
  styles: []
})
export class BoletinComponent implements OnInit {
  boletin: Boletin = new Boletin();
  usuarios: Usuario[] = [];

  constructor(public _boletinesService: BoletinesService) { }

  ngOnInit() {
  }

  guardarBoletin(f: NgForm) {
    console.log(f.valid);
    console.log(f.value);

    if (f.invalid) {
      return;
    }

    this._boletinesService.guardarBoletin(this.boletin)
    .subscribe(boletin => {
      console.log(boletin);
    });
  }

}
