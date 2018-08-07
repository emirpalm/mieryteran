import { ModalUploadPDFService } from './modaluploadpdf.service';
import { Component, OnInit } from '@angular/core';
import { SubirPdfService } from '../../services/service.index';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-modaluploadpdf',
  templateUrl: './modaluploadpdf.component.html',
  styles: []
})
export class ModaluploadpdfComponent implements OnInit {
  pdfSubir: File;
  pdfTemp: any;
  @ViewChild( 'inputFile' ) inputFile: any;

  constructor(public _subirPDFService: SubirPdfService,
    public _modalUploadPDFService: ModalUploadPDFService) { }

    ngOnInit() {
    }

    clearForm() {
      console.log('Aqui obtienes el elemento para atribuir algo vazio: ', this.inputFile.nativeElement);

      this.inputFile.nativeElement.value = '';
    }

    cerrarModal() {
      this.pdfTemp = null;
      this.pdfSubir = null;
      this._modalUploadPDFService.ocultarModal();
    }

    subirPDF() {
      this.clearForm();
      this._subirPDFService.subirPDF(this.pdfSubir, this._modalUploadPDFService.tipo, this._modalUploadPDFService.id)
      .then(resp => {
        console.log(resp);
        this._modalUploadPDFService.notification.emit(resp);
        this.cerrarModal();

      })
      .catch(err => {
        console.log('Error en la carga...');

      });

    }

    seleccionPDF(archivo: File) {
      if (!archivo) {
        this.pdfSubir = null;
        return;
      }
      if (archivo.type.indexOf('pdf') < 0) {
        swal('Solo Archivos PDF', 'El archivo seleccionado no es un PDF', 'error');
        this.pdfSubir = null;
        return;

      }
         this.pdfSubir = archivo;
         // tslint:disable-next-line:prefer-const
         let reader = new FileReader();
         // tslint:disable-next-line:prefer-const
         let urlPdfTemp = reader.readAsDataURL(archivo);
         reader.onloadend = () => this.pdfTemp = reader.result;
    }


  }
