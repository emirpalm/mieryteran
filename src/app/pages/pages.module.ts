import { NgModule } from '@angular/core';

// Modulos Shared
import { SharedModule } from '../shared/shared.module';
// Fin modulos Shared

// Rutas
import { PAGES_ROUTES } from './pages.routes';
// Fin Rutas

// Componentes pages
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactoComponent } from './contacto/contacto.component';
import { BolsatrabajoComponent } from './bolsatrabajo/bolsatrabajo.component';
// Fin Componentes pages

// paginas internas servicios
// tslint:disable-next-line:max-line-length
import { ImportacionesyexportacionesComponent } from './paginas-servicios/importacionesyexportaciones/importacionesyexportaciones.component';
import { LogisticaComponent } from './paginas-servicios/logistica/logistica.component';
import { AsesoriaComponent } from './paginas-servicios/asesoria/asesoria.component';
import { InformacionComponent } from './paginas-servicios/informacion/informacion.component';
// fin paginas internas servicios

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from '../pipes/pipes.module';
import { CommonModule } from '@angular/common';

// NG-TRANSLATE
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient} from '@angular/common/http';
import { ModalcontactoComponent } from '../components/modalcontacto/modalcontacto.component';
import { RecaptchaDirective } from '../directives/recaptcha.directive';


@NgModule({
declarations: [
    PagesComponent,
    HomeComponent,
    NosotrosComponent,
    ServiciosComponent,
    ContactoComponent,
    BolsatrabajoComponent,
    AsesoriaComponent,
    ImportacionesyexportacionesComponent,
    LogisticaComponent,
    InformacionComponent,
    ModalcontactoComponent,
    RecaptchaDirective

],
exports: [
    HomeComponent,
    NosotrosComponent,
    ServiciosComponent,
    ContactoComponent,
    BolsatrabajoComponent,
    AsesoriaComponent,
    ImportacionesyexportacionesComponent,
    LogisticaComponent,
    InformacionComponent,
    ModalcontactoComponent,
    RecaptchaDirective

],
imports: [
    SharedModule,
    PAGES_ROUTES,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
    CommonModule,
    TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
                  useFactory: HttpLoaderFactory,
                  deps: [HttpClient]
        }
      })
]

})
export class PagesModules {}

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
  }
