import { Component, OnInit } from '@angular/core';
import { SubirArchivoService } from '../../services/service.index';
import { ModalUploadService } from './modal-upload.service';

@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html',
  styles: []
})
export class ModalUploadComponent implements OnInit {

  imagenSubir: File;
  imagenTemp: string;

  constructor(public _subirArchivoService: SubirArchivoService,
  public _modalUplodaService: ModalUploadService) { }


  ngOnInit() {
  }

  cerrarModal() {
    this.imagenTemp = null;
    this.imagenSubir = null;
    this._modalUplodaService.ocultarModal();
  }

  subirImagen() {
    this._subirArchivoService.subirArchivo(this.imagenSubir, this._modalUplodaService.tipo, this._modalUplodaService.id)
    .then(resp => {
      console.log(resp);
      this._modalUplodaService.notification.emit(resp);
      this.cerrarModal();

    })
    .catch(err => {
      console.log('Error en la carga...');

    });

  }

  seleccionImagen(archivo: File) {
    if (!archivo) {
      this.imagenSubir = null;
      return;
    }
    if (archivo.type.indexOf('image') < 0) {
      swal('Solo imagenes', 'El archivo seleccionado no es una imagen', 'error');
      this.imagenSubir = null;
      return;

    }
       this.imagenSubir = archivo;
       // tslint:disable-next-line:prefer-const
       let reader = new FileReader();
       // tslint:disable-next-line:prefer-const
       let urlImagenTemp = reader.readAsDataURL(archivo);
       reader.onloadend = () => this.imagenTemp = reader.result;
  }


}
