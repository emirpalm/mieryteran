import { ModalUploadPDFService } from '../components/modaluploadpdf/modaluploadpdf.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModalUploadService } from '../components/modal-upload/modal-upload.service';

import {
  SettingsService,
  SidebarService,
  SharedService,
  UsuarioService,
  SubirArchivoService,
  LoginGuardGuard,
  BoletinesService,
  EmbarquesService,
  SubirPdfService
 } from './service.index';



@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SettingsService,
    SidebarService,
    SharedService,
    UsuarioService,
    SubirArchivoService,
    LoginGuardGuard,
    ModalUploadService,
    ModalUploadPDFService,
    BoletinesService,
    EmbarquesService,
    SubirPdfService
  ],
  declarations: []
})
export class ServiceModule { }
