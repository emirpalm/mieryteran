import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Componentes
import { AppComponent } from './app.component';
// Fin componentes

// RUTAS
import { APP_ROUTES } from './app.routes';
// Fin rUTAS

// Modulos
import { PagesModules } from './pages/pages.module';
import { DashboardModules } from './dashboard/dashboard.module';
// FIn modulos

// paginas login
import { LoginComponent } from './login/login/login.component';
// fin paginas login

// Servicios
import { ServiceModule } from './services/service.module';
// Fin Servicios

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModules,
    DashboardModules,
    ServiceModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
