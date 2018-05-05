import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactoComponent } from './contacto/contacto.component';
import { BolsatrabajoComponent } from './bolsatrabajo/bolsatrabajo.component';

import { FormsModule } from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// tslint:disable-next-line:max-line-length
import { ImportacionesyexportacionesComponent } from './paginas-servicios/importacionesyexportaciones/importacionesyexportaciones.component';
import { LogisticaComponent } from './paginas-servicios/logistica/logistica.component';



@NgModule({
declarations: [
    PagesComponent,
    HomeComponent,
    NosotrosComponent,
    ServiciosComponent,
    ContactoComponent,
    BolsatrabajoComponent,
    ImportacionesyexportacionesComponent,
    LogisticaComponent

],
exports: [
    HomeComponent,
    NosotrosComponent,
    ServiciosComponent,
    ContactoComponent,
    BolsatrabajoComponent,
    ImportacionesyexportacionesComponent,
    LogisticaComponent

],
imports: [
    SharedModule,
    PAGES_ROUTES,
    FormsModule,
    [BrowserAnimationsModule],
]

})
export class PagesModules {}
