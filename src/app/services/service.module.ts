import { ModalUploadPDFService } from '../components/modaluploadpdf/modaluploadpdf.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModalUploadService } from '../components/modal-upload/modal-upload.service';
import { ModalContactoService } from '../components/modalcontacto/modalcontacto.service';

import {
  SettingsService,
  SidebarService,
  SharedService,
  UsuarioService,
  EmailService,
  SubirArchivoService,
  LoginGuardGuard,
  BoletinesService,
  EmbarquesService,
  SubirPdfService,
  ScriptService
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
    EmailService,
    SubirArchivoService,
    LoginGuardGuard,
    ModalUploadService,
    ModalUploadPDFService,
    ModalContactoService,
    BoletinesService,
    EmbarquesService,
    SubirPdfService,
    ScriptService
  ],
  declarations: []
})
export class ServiceModule { }
